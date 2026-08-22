import type { MetadataRoute } from 'next'
import { isKeywordIndexable, keywordPages } from '@/lib/keyword-pages'
import { SITE_URL } from '@/lib/seo'

const staticPaths = ['', '/weapons', '/weapons/grimoire', '/artifacts', '/bosses', '/coop', '/guides']
const lastModified = new Date('2026-08-22T00:00:00.000Z')

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPaths.map((path) => ({ url: `${SITE_URL}${path}`, lastModified, changeFrequency: path === '' ? 'weekly' as const : 'monthly' as const, priority: path === '' ? 1 : 0.8 })),
    ...keywordPages.filter((page) => isKeywordIndexable(page.slug)).map((page) => ({ url: `${SITE_URL}/guides/${page.slug}`, lastModified, changeFrequency: 'monthly' as const, priority: 0.5 })),
  ]
}
