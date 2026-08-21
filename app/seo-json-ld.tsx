import { LAST_VERIFIED, SITE_URL, absoluteUrl } from '@/app/seo'

type BreadcrumbItem = { name: string; path: string }

function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export function WebsiteJsonLd() {
  return <JsonLd data={{
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Sephiria Wiki',
    url: SITE_URL,
    description: 'Independent fan-made guides for Sephiria weapons, builds, co-op, and verified updates.',
    inLanguage: 'en',
  }} />
}

export function ArticleJsonLd({ headline, description, path, breadcrumbs }: { headline: string; description: string; path: string; breadcrumbs: BreadcrumbItem[] }) {
  return <>
    <JsonLd data={{
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline,
      description,
      mainEntityOfPage: absoluteUrl(path),
      dateModified: LAST_VERIFIED,
      author: { '@type': 'Organization', name: 'Sephiria Wiki' },
      publisher: { '@type': 'Organization', name: 'Sephiria Wiki' },
      inLanguage: 'en',
    }} />
    <JsonLd data={{
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: absoluteUrl(item.path),
      })),
    }} />
  </>
}
