import Link from 'next/link'
import { getCopy } from '@/lib/content'
import { isKeywordIndexable, keywordPages } from '@/lib/keyword-pages'
import { localePath, type Locale } from '@/lib/locales'
import { SectionHeading, WikiShell } from '@/components/wiki-shell'

const priorityGuides = [
  { number: 'D', href: '/guides/sephiria-discord', label: 'Sephiria Discord', description: 'Start with the stable community entry and the official-source limits around invite and server details.' },
  { number: 'S', href: '/guides/sephiria-switch', label: 'Sephiria on Nintendo Switch', description: 'Check the current evidence for Switch, console, and release-status questions.' },
  { number: 'P', href: '/guides/sephiria-puzzle', label: 'Sephiria puzzle guide', description: 'Review documented puzzle information without turning unconfirmed steps into instructions.' },
  { number: '6', href: '/guides/sephiria-how-many-chapters', label: 'How many chapters are in Sephiria?', description: 'Get the direct chapter-count answer and the limits of the current chapter research.' },
  { number: 'R', href: '/guides/sephiria-roadmap', label: 'Sephiria roadmap', description: 'Follow the dated release and update record, with claims separated by evidence status.' },
  { number: 'A', href: '/guides/aiba-sephiria', label: 'Aiba in Sephiria', description: 'See what official sources currently confirm about the Aiba search.' },
  { number: 'G', href: '/weapons/grimoire', label: 'Sephiria Grimoire', description: 'Use the Grimoire page as the build-system entry point while unsupported details stay marked.' },
]

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
        <p className="hero-copy">Start with topics that have enough verified information to be useful. The research library is currently maintained in English; every page shows its status and links to current official sources.</p>
      </div>
      <section className="keyword-group keyword-priority" aria-labelledby="priority-guides-heading">
        <SectionHeading>Priority reading</SectionHeading>
        <h2 className="section-title gradient-title" id="priority-guides-heading">High-opportunity search topics</h2>
        <p className="hero-copy">These guides are linked first because they already match recurring Search Console queries or sit close to the first page. Use the descriptive links below to move between the most useful starting points.</p>
        <div className="card-grid keyword-grid">{priorityGuides.map((guide) => <Link className="wiki-card" href={localePath(locale, guide.href)} key={guide.href}><div className="card-number">{guide.number}</div><h2 className="card-title">{guide.label}</h2><p className="card-copy">{guide.description}</p></Link>)}</div>
      </section>
      {grouped.map(([category, pages]) => <section className="keyword-group" key={category}>
        <SectionHeading>{category}</SectionHeading>
        <div className="card-grid keyword-grid">{pages.map((page) => <Link className="wiki-card" href={localePath(locale, `/guides/${page.slug}`)} key={page.slug}><div className="card-number">{page.keyword.slice(0, 1).toUpperCase()}</div><h2 className="card-title">{page.keyword}</h2><p className="card-copy">{page.answer}</p></Link>)}</div>
      </section>)}
    </div>
  </WikiShell>
}
