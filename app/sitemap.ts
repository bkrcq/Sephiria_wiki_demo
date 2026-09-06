import type { MetadataRoute } from 'next'
import { isKeywordIndexable, keywordPages } from '@/lib/keyword-pages'
import { SITE_URL } from '@/lib/seo'

const staticPaths = ['', '/weapons', '/weapons/grimoire', '/artifacts', '/bosses', '/coop', '/guides', '/about', '/editorial-policy']
const lastModifiedByPath: Record<string, Date> = {
  '': new Date('2026-09-01T00:00:00.000Z'),
  '/guides': new Date('2026-09-01T00:00:00.000Z'),
  '/weapons': new Date('2026-08-30T00:00:00.000Z'),
  '/weapons/grimoire': new Date('2026-08-30T00:00:00.000Z'),
  '/artifacts': new Date('2026-08-30T00:00:00.000Z'),
  '/bosses': new Date('2026-08-30T00:00:00.000Z'),
  '/coop': new Date('2026-08-30T00:00:00.000Z'),
  '/about': new Date('2026-08-24T00:00:00.000Z'),
  '/editorial-policy': new Date('2026-08-24T00:00:00.000Z'),
}
const indexableKeywordSlugs = new Set(keywordPages.filter((page) => isKeywordIndexable(page.slug)).map((page) => page.slug))
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPaths.map((path) => ({ url: `${SITE_URL}${path}`, lastModified: lastModifiedByPath[path] || new Date('2026-08-24T00:00:00.000Z'), changeFrequency: path === '' ? 'weekly' as const : 'monthly' as const, priority: path === '' ? 1 : path === '/about' || path === '/editorial-policy' ? 0.4 : 0.8 })),
    ...keywordPages
      .filter((page) => indexableKeywordSlugs.has(page.slug))
      .map((page) => ({ url: `${SITE_URL}/guides/${page.slug}`, lastModified: new Date(`${page.updatedAt || '2026-09-06'}T00:00:00.000Z`), changeFrequency: 'monthly' as const, priority: page.slug === 'sephiria-guide' || page.slug === 'sephiria-switch' || page.slug === 'sephiria-discord' ? 0.8 : 0.5 })),
  ]
}
