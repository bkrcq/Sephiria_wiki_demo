import Link from 'next/link'
import { LAST_VERIFIED } from '@/app/seo'
import { officialLinks, getCopy } from '@/lib/content'
import { WikiShell } from '@/components/wiki-shell'
import type { Locale } from '@/lib/locales'

type Source = {
  label: string
  href: string
  note: string
}

type TopicGuide = {
  eyebrow: string
  title: string
  description: string
  answer: string
  confirmed: { label: string; value: string; evidence: string }[]
  sections: { title: string; paragraphs: string[]; items?: string[] }[]
  limits: string[]
  related: { href: string; label: string; description: string }[]
  sources: Source[]
}

const sharedSources: Source[] = [
  { label: 'Official game page', href: officialLinks.website, note: 'Developer description and official media.' },
  { label: 'Steam store page', href: officialLinks.steam, note: 'Storefront features, platform details, and current release information.' },
  { label: 'Steam Community', href: officialLinks.community, note: 'Developer announcements and community discussions; verify time-sensitive details here.' },
]

const guides: Record<'artifacts' | 'bosses' | 'coop', TopicGuide> = {
  artifacts: {
    eyebrow: 'Build systems · verified scope',
    title: 'Sephiria Artifacts & Tablets',
    description: 'A source-led starting point for Sephiria artifact and tablet build planning, with verified totals separated from unverified item effects.',
    answer: 'Sephiria’s official store material describes a run-building system with 300 artifacts and 70 tablets. The available official material does not provide a complete, versioned item catalogue, so this guide does not invent artifact names, effects, rarity, or acquisition rules.',
    confirmed: [
      { label: 'Artifacts', value: '300', evidence: 'Published game-content total.' },
      { label: 'Tablets', value: '70', evidence: 'Published game-content total.' },
      { label: 'Related systems', value: 'Weapons + animal synergies', evidence: 'Listed as part of the game’s build combinations.' },
    ],
    sections: [
      {
        title: 'What is confirmed',
        paragraphs: [
          'Artifacts and tablets are two of the confirmed build layers alongside weapon branches and animal synergies. They are designed to be considered together during a run rather than as a standalone ranking list.',
          'The public figures establish the size of the system, but they do not establish which individual items are strongest. A useful wiki must keep those two kinds of claims separate.',
        ],
      },
      {
        title: 'A reproducible build-note method',
        paragraphs: ['Use this template while testing a run. It produces notes that can be updated when official item data or versioned patch notes become available.'],
        items: [
          'Record the weapon branch first, then list each artifact and tablet exactly as shown in-game.',
          'Note the chapter, mode, player count, and game version before drawing a conclusion.',
          'Describe an observed interaction without turning it into a universal recommendation until it can be repeated.',
          'Link the final note to the relevant weapon and co-op context so readers know the conditions behind it.',
        ],
      },
      {
        title: 'Why there is no tier list here',
        paragraphs: ['An artifact tier list needs a complete item list, exact effects, version context, and repeatable test conditions. Those details were not established by the official sources reviewed for this page. Until they are, a transparent research hub is more useful than fabricated rankings.'],
      },
    ],
    limits: ['Individual artifact and tablet names', 'Effects, rarities, drop locations, and numeric values', 'Guaranteed combinations or best-in-slot rankings'],
    related: [
      { href: '/weapons', label: 'Weapons & upgrades', description: 'Use the confirmed six-branch / 200+ upgrade scope to frame a build note.' },
      { href: '/weapons/grimoire', label: 'Build planning', description: 'Keep artifacts, tablets, weapon choices, and test conditions together.' },
      { href: '/coop', label: 'Co-op guide', description: 'Record party size and coordination conditions when testing a multiplayer build.' },
    ],
    sources: sharedSources,
  },
  bosses: {
    eyebrow: 'Boss research · evidence first',
    title: 'Sephiria Bosses: Research Hub',
    description: 'A careful Sephiria boss-preparation guide that separates the confirmed six-chapter structure from boss details not yet published in a complete official roster.',
    answer: 'Sephiria has six confirmed chapters, but the official material reviewed for this guide does not publish a complete, versioned boss roster with names, attacks, rewards, or phase data. This page therefore focuses on a repeatable boss-research checklist instead of pretending to be a complete boss database.',
    confirmed: [
      { label: 'Chapter structure', value: '6 chapters', evidence: 'Published game-content total.' },
      { label: 'Game format', value: 'Top-down action roguelike', evidence: 'Developer’s official game description.' },
      { label: 'Hard Mode', value: '60 levels', evidence: 'Published game-content total.' },
    ],
    sections: [
      {
        title: 'What the available sources do—and do not—show',
        paragraphs: [
          'The developer describes Sephiria as a top-down action roguelike about a rabbit adventurer climbing a tower. The current public material supports the game’s overall structure, but it is not a substitute for a named encounter compendium.',
          'A boss page should not infer attack patterns from screenshots, trailers, or community recollection. Names, rewards, unlock conditions, and phase timings remain unconfirmed until they can be tied to an official, versioned source or documented in-game evidence.',
        ],
      },
      {
        title: 'Boss encounter research checklist',
        paragraphs: ['When documenting a specific encounter, capture enough context that another player can reproduce and verify the observation.'],
        items: [
          'Write the boss name exactly as it appears in-game and record the chapter, difficulty, and game version.',
          'Separate observed moves from assumptions; include a short clip or timestamp when possible.',
          'List the weapon branch, artifacts, tablets, and player count used for the attempt.',
          'Record confirmed rewards separately from speculation about drops or unlocks.',
        ],
      },
      {
        title: 'Prepare without inventing a meta',
        paragraphs: ['Use a build you can execute consistently, leave room in your notes for defensive or mobility choices, and review the official Steam announcements for balance changes before relying on older advice. Exact boss counters and optimal loadouts are not claimed here because the supporting data is incomplete.'],
      },
    ],
    limits: ['A complete boss list or boss names', 'Attack phases, rewards, weaknesses, and drop tables', 'Chapter-by-chapter clear routes or hard-mode scaling values'],
    related: [
      { href: '/artifacts', label: 'Artifacts & tablets', description: 'Use a recordable build framework before testing an encounter.' },
      { href: '/weapons', label: 'Weapons & upgrades', description: 'Start a boss note by recording its weapon branch and upgrade context.' },
      { href: '/coop', label: 'Co-op guide', description: 'Add player count and responsibilities to a multiplayer encounter report.' },
    ],
    sources: sharedSources,
  },
  coop: {
    eyebrow: 'Online co-op · confirmed scope',
    title: 'Sephiria Co-op: Up to 4 Players',
    description: 'Verified Sephiria online co-op scope and a practical coordination checklist, without unsupported claims about matchmaking, cross-play, or party roles.',
    answer: 'Sephiria supports online co-op for up to four players. The official sources reviewed for this page do not establish matchmaking rules, invite flow, cross-play, shared progression, difficulty scaling, or fixed team roles, so those details are deliberately left unclaimed.',
    confirmed: [
      { label: 'Online co-op', value: 'Up to 4 players', evidence: 'Published store feature.' },
      { label: 'Build layers', value: 'Weapons, artifacts, tablets, animal synergies', evidence: 'Published game systems.' },
      { label: 'Modes', value: 'Hard Mode: 60 levels', evidence: 'Published game-content total.' },
    ],
    sections: [
      {
        title: 'What “up to four players” confirms',
        paragraphs: [
          'The verified claim is the maximum online co-op party size. It does not by itself confirm how players join, whether play supports cross-platform parties, or how rewards and progression are handled.',
          'Check the Steam store page and developer announcements immediately before organizing a session, because platform support and online features are time-sensitive details.',
        ],
      },
      {
        title: 'Low-risk coordination checklist',
        paragraphs: ['These are communication habits, not claims about mandatory game mechanics. They keep a party’s testing and progression notes clear while the detailed online rules are being verified.'],
        items: [
          'Agree on the game version and use the official Steam or developer channels for session information.',
          'Say what each player is currently testing: weapon branch, artifact/tablet interaction, or encounter observation.',
          'Keep a shared run note with chapter, mode, party size, and any observed behavior that needs retesting.',
          'Treat community advice as a lead to test, not as an official rule, unless it links to a current primary source.',
        ],
      },
      {
        title: 'Details still needing a primary source',
        paragraphs: ['A reliable co-op guide needs explicit confirmation of lobby or invite behavior, platform compatibility, progression ownership, revive rules, disconnect handling, and multiplayer scaling. Those claims are not added until a current official source supports them.'],
      },
    ],
    limits: ['Cross-play, matchmaking, invite, and lobby behavior', 'Progression, rewards, revive, and disconnect rules', 'Party roles, recommended compositions, and multiplayer scaling values'],
    related: [
      { href: '/artifacts', label: 'Artifacts & tablets', description: 'Capture build choices per player before comparing a co-op result.' },
      { href: '/bosses', label: 'Boss research hub', description: 'Use the same version and party-size record for encounter reports.' },
      { href: '/guides', label: 'Verified guide library', description: 'Find research-status pages and official source links.' },
    ],
    sources: sharedSources,
  },
}

export function TopicGuidePage({ topic, locale = 'en' }: { topic: keyof typeof guides; locale?: Locale }) {
  const copy = getCopy(locale)
  const guide = guides[topic]

  return <WikiShell locale={locale} copy={copy}>
    <div className="article-wrap topic-guide">
      <div className="article-hero">
        <div className="eyebrow">{guide.eyebrow}</div>
        <h1 className="display-title"><span>{guide.title}</span></h1>
        <p className="hero-copy">{guide.description}</p>
        <p className="article-meta">Last verified: August 21, 2026 · Sources are listed below.</p>
      </div>

      <div className="article-layout">
        <article className="article-content">
          <section className="topic-answer" aria-label="Direct answer"><h2>Quick answer</h2><p>{guide.answer}</p></section>
          <section><h2>Confirmed scope</h2><table className="data-table"><thead><tr><th>Area</th><th>Confirmed information</th><th>Evidence</th></tr></thead><tbody>{guide.confirmed.map((fact) => <tr key={fact.label}><td>{fact.label}</td><td><strong>{fact.value}</strong></td><td>{fact.evidence}</td></tr>)}</tbody></table></section>
          {guide.sections.map((section) => <section key={section.title}><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.items && <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}</section>)}
          <section className="research-limits"><h2>Not yet verified</h2><p>The following detail is intentionally excluded from this page until it can be supported by a current primary source:</p><ul>{guide.limits.map((item) => <li key={item}>{item}</li>)}</ul></section>
          <section><h2>Continue your research</h2><div className="related-topic-grid">{guide.related.map((item) => <Link className="related-topic" href={item.href} key={item.href}><h3>{item.label}</h3><p>{item.description}</p></Link>)}</div></section>
        </article>
        <aside className="article-sidebar">
          <h2>Sources</h2>
          <p>Primary sources were checked on {new Date(`${LAST_VERIFIED}T00:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })}. Recheck release, patch, and online details before relying on them.</p>
          <ul className="source-list">{guide.sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.label}</a><br /><span>{source.note}</span></li>)}</ul>
          <h2 className="sidebar-subtitle">Site policy</h2>
          <p>Community reports can help locate a topic, but named items, mechanics, and numerical claims are not presented as facts without a verifiable source.</p>
        </aside>
      </div>
    </div>
  </WikiShell>
}
