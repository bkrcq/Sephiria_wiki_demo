import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { JsonLd } from '@/components/json-ld'
import { WikiShell } from '@/components/wiki-shell'
import { codeRows, getCopy, officialLinks } from '@/lib/content'
import { getKeywordMdx } from '@/lib/keyword-mdx'
import { keywordPages, type KeywordPage } from '@/lib/keyword-pages'
import { localePath, type Locale } from '@/lib/locales'
import { absoluteUrl, localeUrl, RESEARCH_DATE } from '@/lib/seo'
import { notFound } from 'next/navigation'

export async function KeywordArticlePage({ locale, page }: { locale: Locale; page: KeywordPage }) {
  const copy = getCopy(locale)
  const Content = await getKeywordMdx(page.slug, locale)
  if (!Content) notFound()

  const path = `/guides/${page.slug}`
  const articleUrl = localeUrl(locale, path)
  const related = keywordPages.filter((item) => item.category === page.category && item.slug !== page.slug)
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Guides', href: '/guides' },
    { label: page.keyword },
  ]
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: page.title,
      description: page.description,
      mainEntityOfPage: { '@type': 'WebPage', '@id': articleUrl },
      url: articleUrl,
      inLanguage: locale === 'en' ? 'en' : locale,
      dateModified: RESEARCH_DATE,
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
          <p className="research-note"><strong>Research snapshot:</strong> facts on this page were last checked from the supplied official-source research on August 7, 2026. This independent fan resource marks unsupported details as unconfirmed.</p>
          <Content />
        </article>
        <aside className="article-sidebar" aria-label="Page sources and related links">
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
