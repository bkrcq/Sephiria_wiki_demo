import Link from 'next/link'
import { getCopy } from '@/lib/content'
import { isKeywordIndexable, keywordPages } from '@/lib/keyword-pages'
import { localePath, type Locale } from '@/lib/locales'
import { SectionHeading, WikiShell } from '@/components/wiki-shell'

export function KeywordGuideIndex({ locale }: { locale: Locale }) {
  const copy = getCopy(locale)
  const grouped = Object.entries(keywordPages.filter((page) => isKeywordIndexable(page.slug)).reduce<Record<string, typeof keywordPages>>((result, page) => {
    ;(result[page.category] ||= []).push(page)
    return result
  }, {}))

  return <WikiShell locale={locale} copy={copy}>
    <div className="article-wrap guide-index">
      <div className="article-hero">
        <div className="eyebrow">Guide library</div>
        <h1 className="display-title"><span>Sephiria Guides</span></h1>
        <p className="hero-copy">Start with the topics that have enough verified information to be useful. Every page shows its research status and links back to current official sources.</p>
      </div>
      {grouped.map(([category, pages]) => <section className="keyword-group" key={category}>
        <SectionHeading>{category}</SectionHeading>
        <div className="card-grid keyword-grid">{pages.map((page) => <Link className="wiki-card" href={localePath(locale, `/guides/${page.slug}`)} key={page.slug}><div className="card-number">{page.keyword.slice(0, 1).toUpperCase()}</div><h2 className="card-title">{page.keyword}</h2><p className="card-copy">{page.answer}</p></Link>)}</div>
      </section>)}
    </div>
  </WikiShell>
}
