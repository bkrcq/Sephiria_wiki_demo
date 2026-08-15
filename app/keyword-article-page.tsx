import Link from 'next/link'
import { codeRows, getCopy, officialLinks } from '@/lib/content'
import { keywordPages, type KeywordPage } from '@/lib/keyword-pages'
import { getKeywordMdx } from '@/lib/keyword-mdx'
import { localePath, type Locale } from '@/lib/locales'
import { WikiShell } from '@/components/wiki-shell'
import { notFound } from 'next/navigation'

export async function KeywordArticlePage({ locale, page }: { locale: Locale; page: KeywordPage }) {
  const copy = getCopy(locale)
  const Content = await getKeywordMdx(page.slug, locale)
  if (!Content) notFound()
  const related = keywordPages.filter((item) => item.category === page.category && item.slug !== page.slug)

  return <WikiShell locale={locale} copy={copy}>
    <div className="article-wrap keyword-article">
      <div className="article-hero">
        <div className="eyebrow">{page.category} · Researched Page</div>
        <h1 className="display-title"><span>{page.keyword}</span></h1>
        <p className="hero-copy keyword-answer">{page.answer}</p>
      </div>
      <div className="article-layout">
        <article className="article-content"><Content /></article>
        <aside className="article-sidebar">
          <h2>Confirmed sources</h2>
          <p>This page uses only the supplied Sephiria research. Unsupported details are marked unconfirmed.</p>
          <ul className="source-list">
            <li><a href={officialLinks.website} target="_blank" rel="noreferrer">Official website</a></li>
            <li><a href={officialLinks.steam} target="_blank" rel="noreferrer">Steam store</a></li>
            <li><a href={officialLinks.community} target="_blank" rel="noreferrer">Steam Community</a></li>
            <li><a href={officialLinks.discord} target="_blank" rel="noreferrer">Discord entry</a></li>
            <li><a href={officialLinks.youtube} target="_blank" rel="noreferrer">Official YouTube</a></li>
          </ul>
          <h2 className="sidebar-subtitle">Redemption codes</h2>
          <div className="code-list">{codeRows.map((row) => <div className="code-row" key={row.reward}><span className="code">{row.code}</span><span className="code-reward">{row.reward}</span></div>)}</div>
          {related.length > 0 && <><h2 className="sidebar-subtitle">Related pages</h2><ul className="source-list">{related.map((item) => <li key={item.slug}><Link href={localePath(locale, `/guides/${item.slug}`)}>{item.keyword}</Link></li>)}</ul></>}
        </aside>
      </div>
    </div>
  </WikiShell>
}
