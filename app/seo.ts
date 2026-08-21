import type { Metadata } from 'next'
import type { Locale } from '@/lib/locales'

export const SITE_URL = 'https://sephiriawiki-indol.vercel.app'
export const LAST_VERIFIED = '2026-08-21'

export function absoluteUrl(path = '/') {
  return new URL(path, SITE_URL).toString()
}

export function localizedPath(locale: Locale, path = '/') {
  const normalized = path === '/' ? '' : path
  return locale === 'en' ? normalized || '/' : `/${locale}${normalized}`
}

export function localeAlternates(path: string) {
  return {
    canonical: path,
    languages: {
      en: path,
      'x-default': path,
    },
  }
}

export function noIndexMetadata(title: string): Metadata {
  return {
    title,
    robots: { index: false, follow: true },
  }
}
