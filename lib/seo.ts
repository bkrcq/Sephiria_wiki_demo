import type { Metadata } from 'next'
import { defaultLocale, type Locale } from './locales'

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://sephiriawiki-indol.vercel.app').replace(/\/$/, '')
export const RESEARCH_DATE = '2026-08-07'

export function absoluteUrl(path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalized === '/' ? '' : normalized}`
}

export function localeUrl(locale: Locale, path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return absoluteUrl(locale === defaultLocale ? normalized : `/${locale}${normalized === '/' ? '' : normalized}`)
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
    openGraph: {
      type: 'website',
      url: canonical,
      title,
      description,
      siteName: 'Sephiria Wiki',
      locale: locale === 'en' ? 'en_US' : locale,
    },
    twitter: { card: 'summary', title, description },
  }
}
