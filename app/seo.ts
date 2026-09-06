import type { Metadata } from 'next'
import { defaultLocale, type Locale } from '@/lib/locales'

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://sephiriawiki-indol.vercel.app').replace(/\/$/, '')
export const LAST_VERIFIED = '2026-08-24'
export const RESEARCH_DATE = LAST_VERIFIED
// The GSC export covers data through September 4, 2026.
export const SEARCH_DATA_REVIEWED = '2026-09-04'
export const CONTENT_UPDATED = '2026-09-06'

export function absoluteUrl(path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalized === '/' ? '' : normalized}`
}

export function localeUrl(locale: Locale, path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return absoluteUrl(locale === defaultLocale ? normalized : `/${locale}${normalized === '/' ? '' : normalized}`)
}

export function localizedPath(locale: Locale, path = '/') {
  const normalized = path === '/' ? '' : path
  return locale === 'en' ? normalized || '/' : `/${locale}${normalized}`
}

export function localeAlternates(path: string) {
  const normalized = path.startsWith('/') ? path : `/${path}`
  // Localized keyword pages currently redirect to the English research library,
  // so only advertise the indexable English URL until equivalent translations exist.
  return { canonical: normalized, languages: { en: localeUrl('en', normalized), 'x-default': localeUrl('en', normalized) } }
}

export function noIndexMetadata(title: string): Metadata {
  return { title, robots: { index: false, follow: true } }
}

export function pageMetadata({
  title,
  description,
  path = '/',
  locale = 'en',
  index = true,
  keywords,
}: {
  title: string
  description: string
  path?: string
  locale?: Locale
  index?: boolean
  keywords?: string | string[]
}): Metadata {
  const canonical = localeUrl(locale, path)
  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    robots: index ? { index: true, follow: true } : { index: false, follow: true },
    openGraph: { type: 'website', url: canonical, title, description, siteName: 'Sephiria Wiki', locale: locale === 'en' ? 'en_US' : locale === 'ko' ? 'ko_KR' : locale === 'ja' ? 'ja_JP' : 'ru_RU' },
    twitter: { card: 'summary', title, description },
  }
}
