import type { MetadataRoute } from 'next'
import { isKeywordIndexable, keywordPages } from '@/lib/keyword-pages'
import { LAST_VERIFIED, SITE_URL } from '@/app/seo'

const staticPaths = ['', '/weapons', '/weapons/grimoire', '/guides']

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPaths.map((path) => ({ url: `${SITE_URL}${path}`, lastModified: LAST_VERIFIED, changeFrequency: 'weekly' as const, priority: path === '' ? 1 : 0.8 })),
    ...keywordPages.filter((page) => isKeywordIndexable(page.slug)).map((page) => ({ url: `${SITE_URL}/guides/${page.slug}`, lastModified: LAST_VERIFIED, changeFrequency: 'monthly' as const, priority: 0.5 })),
  ]
}
