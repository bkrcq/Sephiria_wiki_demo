export type Locale = 'en' | 'ko' | 'ja' | 'ru'

export const locales: Locale[] = ['en', 'ko', 'ja', 'ru']
export const defaultLocale: Locale = 'en'

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ko: '한국어',
  ja: '日本語',
  ru: 'Русский',
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

export function localePath(locale: Locale, path = '') {
  const normalized = path ? (path.startsWith('/') ? path : `/${path}`) : ''
  return locale === defaultLocale ? normalized || '/' : `/${locale}${normalized}`
}

export function stripLocale(pathname: string) {
  const parts = pathname.split('/').filter(Boolean)
  if (parts[0] && isLocale(parts[0])) return `/${parts.slice(1).join('/')}` || '/'
  return pathname || '/'
}
