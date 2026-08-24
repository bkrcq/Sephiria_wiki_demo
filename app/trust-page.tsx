import { WikiShell } from '@/components/wiki-shell'
import { getCopy } from '@/lib/content'
import { type Locale } from '@/lib/locales'

export type TrustPageKind = 'about' | 'editorial-policy'

const content = {
  about: {
    eyebrow: 'About this project',
    title: 'About Sephiria Wiki',
    description: 'A source-led, independent fan resource for players who want clear Sephiria information without invented details.',
  },
  'editorial-policy': {
    eyebrow: 'Editorial standards',
    title: 'Research & Editorial Policy',
    description: 'How Sephiria Wiki checks sources, labels uncertainty, updates pages, and handles corrections.',
  },
} satisfies Record<TrustPageKind, { eyebrow: string; title: string; description: string }>

export function TrustPage({ kind, locale = 'en' }: { kind: TrustPageKind; locale?: Locale }) {
  const copy = getCopy(locale)
  const page = content[kind]

  return <WikiShell locale={locale} copy={copy}>
    <div className="article-wrap trust-page">
      <div className="article-hero">
        <div className="eyebrow">{page.eyebrow}</div>
        <h1 className="display-title"><span>{page.title}</span></h1>
        <p className="hero-copy">{page.description}</p>
        <p className="article-meta">Last reviewed: August 24, 2026</p>
      </div>
      <article className="article-content">
        {kind === 'about' ? <>
          <h2>Independent fan resource</h2>
          <p>Sephiria Wiki is an independent, unofficial guide project for the game Sephiria. It is not affiliated with TEAM HORAY, Valve, Steam, Nintendo, or any platform holder. Game names, artwork, and trademarks belong to their respective owners.</p>
          <h2>What this site is for</h2>
          <p>The site organizes official release information and player-facing guide topics such as weapons, artifacts, tablets, co-op, updates, and platform availability. It aims to provide a direct answer first, link to the supporting source, and clearly distinguish verified facts from information that still needs confirmation.</p>
          <h2>How information is maintained</h2>
          <p>Pages are reviewed against primary sources where possible, including the developer website, the official Steam store page, Steam announcements, and developer-posted community links. When a useful detail is not supported by a reliable source or reproducible in-game evidence, the page labels it as unconfirmed rather than filling the gap with a guess.</p>
          <h2>Language availability</h2>
          <p>The keyword research library is currently maintained in English. Navigation and a small set of overview pages are available in Japanese, Korean, and Russian, but untranslated English guide articles are not presented as localized search results.</p>
        </> : <>
          <h2>Source hierarchy</h2>
          <ol>
            <li><strong>Primary sources:</strong> developer announcements, the official website, Steam store details, Steam news, and official community posts.</li>
            <li><strong>Reproducible in-game evidence:</strong> clearly labeled screenshots, version-specific tests, or repeatable steps documented by the editorial team.</li>
            <li><strong>Community reports:</strong> used as leads only until they can be confirmed by a primary source or reproducible evidence.</li>
          </ol>
          <h2>What each guide should disclose</h2>
          <p>Research pages should show a last-checked date, identify the evidence standard used, link to relevant official sources, and separate confirmed facts from open questions. Time-sensitive pages such as platform availability, patch notes, and roadmaps are reviewed whenever a new official announcement changes the answer.</p>
          <h2>Uncertainty and corrections</h2>
          <p>A search query, social post, retailer placeholder, or repeated community claim is not treated as proof that a feature, character, item, platform version, or release date exists. When a source proves an earlier page wrong or incomplete, the page should be corrected and its review date updated.</p>
          <h2>Content quality rule</h2>
          <p>New pages should add a useful, distinct answer. Pages are not created merely because a phrase appears in search data. A gameplay guide should contain a verified method, a data point, a route, a screenshot, a version note, or another piece of information that helps a player complete a task.</p>
          <h2>Contact and corrections</h2>
          <p>A public corrections contact should be added before accepting player submissions or publishing community-sourced data. Until then, the site limits claims to information that can be traced to the source links shown on each page.</p>
        </>}
      </article>
    </div>
  </WikiShell>
}
