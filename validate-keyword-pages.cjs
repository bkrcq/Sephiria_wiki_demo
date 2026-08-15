const fs = require('fs')
const source = JSON.parse(fs.readFileSync('keywords.json', 'utf8'))
const keywords = source.categories.flatMap((c) => c.keywords)
const configText = fs.readFileSync('lib/keyword-pages.ts', 'utf8')
const pages = [...configText.matchAll(/"keyword": "([^"]+)",\s+"slug": "([^"]+)",\s+"category": "([^"]+)",\s+"title": "([^"]+)",\s+"description": "([^"]+)"/g)].map((m) => ({ keyword:m[1], slug:m[2], title:m[4], description:m[5] }))
let failures = []
if (pages.length !== keywords.length) failures.push(`config pages ${pages.length} != keywords ${keywords.length}`)
for (const keyword of keywords) {
  const page = pages.find((p) => p.keyword === keyword)
  if (!page) { failures.push(`missing config: ${keyword}`); continue }
  if (!page.title.toLowerCase().includes(keyword)) failures.push(`title missing keyword: ${keyword}`)
  if (page.title.length < 40 || page.title.length > 60) failures.push(`title length ${page.title.length}: ${keyword}`)
  if (!page.description.toLowerCase().includes(keyword)) failures.push(`description missing keyword: ${keyword}`)
  if (page.description.length < 140 || page.description.length > 160) failures.push(`description length ${page.description.length}: ${keyword}`)
  const mdx = fs.readFileSync(`content/en/keywords/${page.slug}.mdx`, 'utf8')
  const words = mdx.trim().split(/\s+/).length
  const h2 = (mdx.match(/^## /gm) || []).length
  if (words < 1100 || words > 1350) failures.push(`word count ${words}: ${keyword}`)
  if (h2 < 8) failures.push(`H2 count ${h2}: ${keyword}`)
  if (!mdx.includes('unconfirmed')) failures.push(`missing unconfirmed: ${keyword}`)
  if (/redemption code/i.test(mdx) && !mdx.includes('暂无')) failures.push(`codes missing 暂无: ${keyword}`)
  const paragraphs = mdx.split(/\n\s*\n/).filter((p) => !p.startsWith('## '))
  for (const paragraph of paragraphs) {
    const sentences = (paragraph.match(/[.!?](?:\*\*)?(?=\s|$)/g) || []).length
    if (sentences < 3 || sentences > 4) failures.push(`paragraph sentence count ${sentences}: ${keyword} :: ${paragraph.slice(0,55)}`)
  }
}
console.log(`keywords=${keywords.length} config=${pages.length}`)
console.log(pages.map((p)=>`${p.keyword}: title ${p.title.length}, description ${p.description.length}`).join('\n'))
if (failures.length) { console.error('\nFAILURES\n'+failures.join('\n')); process.exit(1) }
console.log('Keyword SEO/content validation: PASS')
