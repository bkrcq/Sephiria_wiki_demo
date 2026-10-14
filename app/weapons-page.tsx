import { JsonLd } from '@/components/json-ld'
import type { Copy } from '@/lib/content'
import type { Locale } from '@/lib/locales'
import { getCopy } from '@/lib/content'
import { SectionHeading, WikiShell } from '@/components/wiki-shell'
import Link from 'next/link'
import { getWeaponsMdx } from '@/lib/mdx-content'

export async function WeaponsPage({ locale }: { locale: Locale }) {
  const copy: Copy = getCopy(locale); const Content = await getWeaponsMdx(locale); const href = (path: string) => locale === 'en' ? path : `/${locale}${path}`
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How many weapon branches are in Sephiria?', acceptedAnswer: { '@type': 'Answer', text: 'Six weapon branches are confirmed, with more than 200 upgrades across the system.' } },
      { '@type': 'Question', name: 'What is the best weapon in Sephiria?', acceptedAnswer: { '@type': 'Answer', text: 'No single best weapon is verified by the available research. Choose by range, speed, damage style, and synergy surface for your run goal, then test the choice with a fixed protocol.' } },
      { '@type': 'Question', name: 'Where can I find a complete weapon list with stats?', acceptedAnswer: { '@type': 'Answer', text: 'No verified branch-by-branch catalogue with names, skill values, rarity tiers, or drop locations exists in the sources reviewed for this page. Those details are marked unconfirmed rather than invented.' } },
      { '@type': 'Question', name: 'Do weapon choices matter in co-op?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. In co-op, the party can split ranges and roles, and teammates can trade items and revive fallen companions according to the developer\'s 1.0 announcement. Plan the party\'s weapon mix, not just your own branch.' } },
    ],
  }
  return <WikiShell locale={locale} copy={copy}><JsonLd data={faqSchema} /><div className="article-wrap"><div className="article-hero"><div className="eyebrow">{copy.weapons.eyebrow}</div><h1 className="display-title"><span>{copy.weapons.title}</span></h1><p className="hero-copy">{copy.weapons.description}</p></div><article className="article-content"><Content /></article></div></WikiShell>
}

