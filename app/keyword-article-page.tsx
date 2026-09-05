import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { JsonLd } from '@/components/json-ld'
import { WikiShell } from '@/components/wiki-shell'
import { getCopy, officialLinks } from '@/lib/content'
import { getKeywordMdx } from '@/lib/keyword-mdx'
import { isKeywordIndexable, keywordPages, type KeywordPage } from '@/lib/keyword-pages'
import { localePath, type Locale } from '@/lib/locales'
import { absoluteUrl, CONTENT_UPDATED, LAST_VERIFIED, localeUrl, SEARCH_DATA_REVIEWED } from '@/lib/seo'
import { notFound } from 'next/navigation'

const priorityRelatedSlugs: Record<string, string[]> = {
  'sephiria-discord': ['sephiria-roadmap', 'sephiria-coop', 'sephiria-reddit'],
  'sephiria-puzzle': ['sephiria-how-many-chapters', 'sephiria-secrets', 'sephiria-guide'],
  'sephiria-how-many-chapters': ['sephiria-roadmap', 'sephiria-puzzle', 'sephiria-guide'],
  'sephiria-switch': ['sephiria-guide', 'sephiria-coop', 'sephiria-roadmap'],
  'sephiria-roadmap': ['sephiria-switch', 'sephiria-1-0', 'sephiria-discord'],
  'aiba-sephiria': ['sephiria-all-characters', 'sephiria-wiki', 'sephiria-guide'],
  'sephiria-artifact': ['sephiria-grimoire', 'sephiria-builds', 'sephiria-upgrade-tree'],
  'sephiria-upgrade-tree': ['sephiria-weapons', 'sephiria-grimoire', 'sephiria-artifact'],
  'sephiria-grimoire': ['sephiria-upgrade-tree', 'sephiria-builds', 'sephiria-artifact'],
}
export async function KeywordArticlePage({ locale, page }: { locale: Locale; page: KeywordPage }) {
  const copy = getCopy(locale)
  const Content = await getKeywordMdx(page.slug, locale)
  if (!Content) notFound()

  const path = `/guides/${page.slug}`
  const articleUrl = localeUrl(locale, path)
  const relatedBySlug = new Map(keywordPages.map((item) => [item.slug, item]))
  const preferredRelated = (priorityRelatedSlugs[page.slug] || [])
    .map((slug) => relatedBySlug.get(slug))
    .filter((item): item is KeywordPage => Boolean(item))
    .filter((item) => item.slug !== page.slug && isKeywordIndexable(item.slug))
  const categoryRelated = keywordPages.filter((item) => item.category === page.category && item.slug !== page.slug && isKeywordIndexable(item.slug))
  const related = [...preferredRelated, ...categoryRelated.filter((item) => !preferredRelated.some((preferred) => preferred.slug === item.slug))].slice(0, 6)
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Guides', href: '/guides' },
    { label: page.keyword },
  ]
  const faqSchema = page.faqs?.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  } : undefined
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: page.title,
      description: page.description,
      mainEntityOfPage: { '@type': 'WebPage', '@id': articleUrl },
      url: articleUrl,
      inLanguage: locale === 'en' ? 'en' : locale,
      dateModified: CONTENT_UPDATED,
      isAccessibleForFree: true,
      author: { '@type': 'Organization', name: 'Sephiria Wiki' },
      publisher: { '@type': 'Organization', name: 'Sephiria Wiki', url: absoluteUrl('/') },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((item, position) => ({
        '@type': 'ListItem',
        position: position + 1,
        name: item.label,
        ...(item.href ? { item: localeUrl(locale, item.href) } : {}),
      })),
    },
    ...(faqSchema ? [faqSchema] : []),
  ]

  return <WikiShell locale={locale} copy={copy}>
    <JsonLd data={schema} />
    <div className="article-wrap keyword-article">
      <Breadcrumbs locale={locale} items={breadcrumbs} />
      <div className="article-hero">
        <div className="eyebrow">{page.category} · Researched page</div>
        <h1 className="display-title"><span>{page.keyword}</span></h1>
        <p className="hero-copy keyword-answer">{page.answer}</p>
      </div>
      <div className="article-layout">
        <article className="article-content">
          <aside className="research-note" aria-label="Research and editorial status"><strong>Search data reviewed:</strong> {new Date(`${SEARCH_DATA_REVIEWED}T00:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })}. <strong>Source facts last checked:</strong> {new Date(`${LAST_VERIFIED}T00:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })}. <strong>Page updated:</strong> {new Date(`${CONTENT_UPDATED}T00:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })}. <strong>Evidence:</strong> official Steam and developer channels are prioritized; unsupported details are marked unconfirmed. <Link href="/editorial-policy">Read the editorial policy.</Link></aside>
          <Content />
          {page.faqs?.length ? <section className="keyword-faq" aria-labelledby="faq-heading"><h2 id="faq-heading">Quick answers</h2>{page.faqs.map((faq) => <div key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}</section> : null}
        </article>
        <aside className="article-sidebar" aria-label="Page sources and related links">
          <h2>Confirmed sources</h2>
          <p>This page prioritizes official Steam and developer references. Details that cannot be verified from those sources are marked unconfirmed.</p>
          <ul className="source-list">
            <li><a href={officialLinks.website} target="_blank" rel="noreferrer">Official website</a></li>
            <li><a href={officialLinks.steam} target="_blank" rel="noreferrer">Steam store</a></li>
            <li><a href={officialLinks.steamNews} target="_blank" rel="noreferrer">Steam update history</a></li>
            <li><a href={officialLinks.community} target="_blank" rel="noreferrer">Steam Community</a></li>
            <li><a href={officialLinks.discord} target="_blank" rel="noreferrer">Discord entry</a></li>
            <li><a href={officialLinks.youtube} target="_blank" rel="noreferrer">Official YouTube</a></li>
          </ul>
          {related.length > 0 && <><h2 className="sidebar-subtitle">Related pages</h2><ul className="source-list">{related.map((item) => <li key={item.slug}><Link href={localePath(locale, `/guides/${item.slug}`)}>{item.keyword}</Link></li>)}</ul></>}
        </aside>
      </div>
    </div>
  </WikiShell>
}
