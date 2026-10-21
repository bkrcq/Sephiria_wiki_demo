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
    answer: 'Sephiria’s 1.0 launch announcement (July 31, 2026) confirms about 300 artifacts, about 70 tablets, and over 30 potions. The launch update itself added 19 new artifacts and 7 new tablets. Official patch notes also document the systems around them — the Mystic Pot that turns artifacts into tablets, the Tablet Combiner, and artifact unlocks through Destiny Inscription — but no complete, versioned item catalogue has been published officially.',
    confirmed: [
      { label: 'Artifacts', value: 'About 300', evidence: 'TEAM HORAY 1.0 launch announcement, July 31, 2026.' },
      { label: 'Tablets', value: 'About 70', evidence: 'TEAM HORAY 1.0 launch announcement, July 31, 2026.' },
      { label: 'Potions', value: 'Over 30', evidence: 'TEAM HORAY 1.0 launch announcement, July 31, 2026.' },
      { label: 'Added at 1.0.19', value: '19 artifacts, 7 tablets, 3 Miracles', evidence: 'Bundled into the July 31, 2026 launch announcement.' },
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
        title: 'Documented artifact and tablet mechanics (official patch notes)',
        paragraphs: ['Individual mechanics are named in TEAM HORAY’s Steam patch notes often enough to document the systems, even though a full item catalogue is not public. The following are stated directly in those notes:'],
        items: [
          'Mystic Pot (update 0.10.10, January 23, 2026): insert artifacts into the pot to create a Tablet. The pot occasionally appears in hidden rooms or as a combat reward during exploration.',
          'Tablet Combiner (update 0.10.14, February 2026): a random exploration object that can synthesize Tablets.',
          'Destiny Inscription unlocks (update 0.10.14): the six artifacts added in that update are unlocked through Destiny Inscription.',
          'Named artifacts in patch notes include the Chalcedony Key, the Absolute Ring, the Bucket of Plump Berries, Rylie’s Pocket Watch (reduces Grimoire MP Cost), the Glowing Hourglass, and the Academy Fountain Pen (scales Grimoire Damage with Evasion).',
          'Item combos (update 0.10.10): the Elemental combo is a support combo that enhances the highest elemental attribute; the combo system was overhauled in October 2025.',
          'Wish Fountain (update 0.10.0): base capacity rose from 3 to 4, and the Talent “Willpower” modifies its maximum capacity.',
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
    limits: ['A complete artifact and tablet catalogue (only patch-note-named examples are documented)', 'Most individual effects, rarities, drop locations, and numeric values', 'Guaranteed combinations or best-in-slot rankings'],
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
    answer: 'Sephiria supports online co-op for up to four players. The official store description and the developer’s 1.0 announcement both confirm that teammates can trade items and revive fallen companions while exploring the tower together. Matchmaking rules, cross-play, shared progression, and difficulty scaling are not documented in official sources, so those details are deliberately left unclaimed.',
    confirmed: [
      { label: 'Online co-op', value: 'Up to 4 players', evidence: 'Published store feature.' },
      { label: 'Item trading', value: 'Confirmed', evidence: 'Steam store description and 1.0 launch announcement.' },
      { label: 'Reviving teammates', value: 'Confirmed', evidence: 'Steam store description: “revive fallen companions”.' },
      { label: 'Platforms', value: 'Windows and macOS', evidence: 'Steam store platform listing, checked October 21, 2026.' },
      { label: 'Build layers', value: 'Weapons, artifacts, tablets, animal synergies', evidence: 'Published game systems.' },
    ],
    sections: [
      {
        title: 'What “up to four players” confirms',
        paragraphs: [
          'The verified claim is the maximum online co-op party size, together with two party mechanics the developer states directly: trading items between teammates and reviving fallen companions. It does not by itself confirm how players join, whether play supports cross-platform parties, or how rewards and progression are handled.',
          'Check the Steam store page and developer announcements immediately before organizing a session, because platform support and online features are time-sensitive details.',
        ],
      },
      {
        title: 'Multiplayer details from official patch notes',
        paragraphs: ['TEAM HORAY’s patch notes document how co-op behaves in practice, including its limits:'],
        items: [
          'Chapter progress matters for invites: update 1.0.24 (August 7, 2026) fixed cases where players with mismatched chapter progress could be invited, and a separate fix stopped players from clearing the game through another player’s Chapter 6 lobby while still progressing Chapter 5.',
          'Early Access supporters receive a badge shown in multiplayer, per the 1.0 launch announcement.',
          'Lobby names are limited to 64 characters when creating a lobby (update 1.0.30, August 20, 2026).',
          'Update 1.0.24 added Steam Rich Presence support, and multiplayer sessions include story events such as the Chapter 6 earthquake sequence (update 1.0.22).',
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
    limits: ['Cross-play and matchmaking rules', 'Progression and reward ownership between party members', 'Party roles, recommended compositions, and multiplayer scaling values'],
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
        <p className="article-meta">Last verified: October 21, 2026 · Sources are listed below.</p>
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
