import Link from 'next/link'
import { getCopy } from '@/lib/content'
import { keywordPages } from '@/lib/keyword-pages'
import { localePath, type Locale } from '@/lib/locales'
import { SectionHeading, WikiShell } from '@/components/wiki-shell'

export function KeywordGuideIndex({ locale }: { locale: Locale }) {
  const copy = getCopy(locale)
  const grouped = Object.entries(keywordPages.reduce<Record<string, typeof keywordPages>>((groups, page) => {
    ;(groups[page.category] ??= []).push(page)
    return groups
  }, {}))
  return <WikiShell locale={locale} copy={copy}>
    <div className="article-wrap guide-index">
      <div className="article-hero">
        <div className="eyebrow">Keyword Navigation</div>
        <h1 className="display-title"><span>Sephiria Guides</span></h1>
        <p className="hero-copy">One researched page for every keyword in keywords.json. Confirmed facts are separated from details marked 待确认.</p>
      </div>
      {grouped.map(([category, pages]) => <section className="keyword-group" key={category}>
        <SectionHeading>{category}</SectionHeading>
        <div className="card-grid keyword-grid">{pages?.map((page) => <Link className="wiki-card" href={localePath(locale, `/guides/${page.slug}`)} key={page.slug}><div className="card-number">{page.keyword.slice(0, 1).toUpperCase()}</div><h2 className="card-title">{page.keyword}</h2><p className="card-copy">{page.answer}</p></Link>)}</div>
      </section>)}
    </div>
  </WikiShell>
}

