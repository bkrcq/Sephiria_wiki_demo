import type { Locale } from './locales'

export async function getHomeMdx(locale: Locale) {
  switch (locale) {
    case 'ko': return (await import('@/content/ko/home.mdx')).default
    case 'ja': return (await import('@/content/ja/home.mdx')).default
    case 'ru': return (await import('@/content/ru/home.mdx')).default
    default: return (await import('@/content/en/home.mdx')).default
  }
}

export async function getWeaponsMdx(locale: Locale) {
  switch (locale) {
    case 'ko': return (await import('@/content/ko/weapons.mdx')).default
    case 'ja': return (await import('@/content/ja/weapons.mdx')).default
    case 'ru': return (await import('@/content/ru/weapons.mdx')).default
    default: return (await import('@/content/en/weapons.mdx')).default
  }
}

export async function getGrimoireMdx(locale: Locale) {
  switch (locale) {
    case 'ko': return (await import('@/content/ko/grimoire.mdx')).default
    case 'ja': return (await import('@/content/ja/grimoire.mdx')).default
    case 'ru': return (await import('@/content/ru/grimoire.mdx')).default
    default: return (await import('@/content/en/grimoire.mdx')).default
  }
}
