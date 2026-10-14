import type { Locale } from '@/lib/locales'
import { codeRows, getCopy } from '@/lib/content'
import { JsonLd } from '@/components/json-ld'
import { WikiShell } from '@/components/wiki-shell'
import { getGrimoireMdx } from '@/lib/mdx-content'

export async function GrimoirePage({ locale }: { locale: Locale }) {
  const copy = getCopy(locale)
  const Content = await getGrimoireMdx(locale)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is the Sephiria Grimoire?', acceptedAnswer: { '@type': 'Answer', text: 'The available research does not define a verified Grimoire catalogue or a separate Grimoire progression system. This page treats Grimoire build as build planning across the confirmed systems: weapons, artifacts, tablets, and animal synergies.' } },
      { '@type': 'Question', name: 'Can I find a confirmed Sephiria Grimoire build?', acceptedAnswer: { '@type': 'Answer', text: 'No universal Grimoire build is confirmed. Use the worksheet on this page, record your weapon branch, artifacts, tablets, run conditions, and game version, and judge a build by repeatability instead of by one good run.' } },
      { '@type': 'Question', name: 'Are Grimoire item effects confirmed?', acceptedAnswer: { '@type': 'Answer', text: 'Specific names, effects, rarity, acquisition routes, and upgrade rules remain unconfirmed in the current sources. This page deliberately does not invent them.' } },
      { '@type': 'Question', name: 'How many runs should I test before trusting a build?', acceptedAnswer: { '@type': 'Answer', text: 'At least three runs with the same goal, recorded with the same template, is a reasonable minimum. Fewer runs can suggest a lead, but they do not establish reliability.' } },
      { '@type': 'Question', name: 'Should I use a different build for co-op?', acceptedAnswer: { '@type': 'Answer', text: 'Usually, yes. In co-op, the party can split responsibilities, because teammates can trade items and revive fallen companions, as described in the developer\'s 1.0 announcement. Plan the party, not just your own loadout.' } },
    ],
  }
  return <WikiShell locale={locale} copy={copy}><JsonLd data={faqSchema} /><div className="article-wrap"><div className="article-hero"><div className="eyebrow">{copy.grimoire.eyebrow}</div><h1 className="display-title"><span>{copy.grimoire.title}</span></h1><p className="hero-copy">{copy.grimoire.description}</p></div><div className="article-layout"><article className="article-content"><Content /></article><aside className="article-sidebar"><h2>{copy.home.codeTitle}</h2><p>{copy.home.codeDescription}</p><div className="code-list">{codeRows.map(row => <div className="code-row" key={row.reward}><span className="code">{row.code}</span><span className="code-reward">{row.reward}</span></div>)}</div></aside></div></div></WikiShell>
}
