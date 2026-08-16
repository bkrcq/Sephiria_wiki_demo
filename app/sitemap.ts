import type { MetadataRoute } from 'next'
import { keywordPages } from '@/lib/keyword-pages'
import { locales, defaultLocale } from '@/lib/locales'

const SITE_URL = 'https://sephiriawiki-indol.vercel.app'

const staticPaths = ['', '/weapons', '/weapons/grimoire', '/guides', '/privacy', '/terms']

function localeAlternates(path: string) {
  const languages: Record<string, string> = {}
  for (const locale of locales) {
    languages[locale] =
      locale === defaultLocale ? SITE_URL + path : `${SITE_URL}/${locale}${path}`
  }
  return { languages: { ...languages, 'x-default': SITE_URL + path } }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []
  const addPage = (path: string) => {
    for (const locale of locales) {
      const url =
        locale === defaultLocale ? SITE_URL + path : `${SITE_URL}/${locale}${path}`
      entries.push({ url, alternates: localeAlternates(path) })
    }
  }
  staticPaths.forEach(addPage)
  keywordPages.forEach((page) => addPage(`/guides/${page.slug}`))
  return entries
}
