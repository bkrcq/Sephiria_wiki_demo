import type { Copy } from '@/lib/content'
import type { Locale } from '@/lib/locales'
import { getCopy } from '@/lib/content'
import { SectionHeading, WikiShell } from '@/components/wiki-shell'
import Link from 'next/link'
import { getWeaponsMdx } from '@/lib/mdx-content'

export async function WeaponsPage({ locale }: { locale: Locale }) {
  const copy: Copy = getCopy(locale); const Content = await getWeaponsMdx(locale); const href = (path: string) => locale === 'en' ? path : `/${locale}${path}`
  return <WikiShell locale={locale} copy={copy}><div className="article-wrap"><div className="article-hero"><div className="eyebrow">{copy.weapons.eyebrow}</div><h1 className="display-title"><span>{copy.weapons.title}</span></h1><p className="hero-copy">{copy.weapons.description}</p></div><article className="article-content"><Content /></article></div></WikiShell>
}

