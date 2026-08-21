import type { MetadataRoute } from 'next'
import { keywordPages } from '@/lib/keyword-pages'
import { SITE_URL } from '@/lib/seo'

const staticPaths = ['', '/weapons', '/weapons/grimoire', '/guides', '/privacy', '/terms']

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date('2026-08-07T00:00:00.000Z')
  return [...staticPaths.map((path) => ({ url: `${SITE_URL}${path}`, lastModified: now })), ...keywordPages.map((page) => ({ url: `${SITE_URL}/guides/${page.slug}`, lastModified: now }))]
}
