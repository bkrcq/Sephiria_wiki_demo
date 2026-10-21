import { WikiShell } from '@/components/wiki-shell'
import { getCopy } from '@/lib/content'
import { type Locale } from '@/lib/locales'

export type TrustPageKind = 'about' | 'editorial-policy' | 'contact'

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
  contact: {
    eyebrow: 'Contact',
    title: 'Contact Sephiria Wiki',
    description: 'How to report a correction, suggest a source, or reach the official Sephiria channels for game support.',
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
        <p className="article-meta">Last reviewed: October 14, 2026</p>
      </div>
      <article className="article-content">
        {kind === 'contact' ? <>
          <h2>Corrections and source suggestions</h2>
          <p>Sephiria Wiki is maintained by an independent editor, and corrections from readers are welcome. The fastest way to reach the site is the public issue tracker for this website on GitHub: <a href="https://github.com/bkrcq/Sephiria_wiki_demo/issues" target="_blank" rel="noreferrer">github.com/bkrcq/Sephiria_wiki_demo/issues</a>. A useful correction report includes the page address, the exact statement that looks wrong, and a link to the primary source (a Steam announcement, the official website, or a developer post) that supports the change.</p>
          <p>Reports are checked against the source hierarchy in the <a href="/editorial-policy">editorial policy</a> before a page changes. When a correction is accepted, the page is updated and its review date is moved forward; when a claim cannot be verified either way, the page keeps the detail labeled unconfirmed instead of guessing.</p>
          <h2>Game support and bug reports</h2>
          <p>This site is a fan guide, not the developer. For game bugs, crashes, account or purchase problems, contact TEAM HORAY through official channels: the <a href="https://steamcommunity.com/app/2436940/" target="_blank" rel="noreferrer">Steam Community hub</a>, the official Discord server linked from the developer&rsquo;s Steam announcements (discord.gg/g7AaeBuyMV), or the developer bug-report email published in the official patch notes, team.horay.game@gmail.com. Log files and game-version details help the developer reproduce a problem; the official 0.10.0 patch notes list the log file locations.</p>
          <h2>What this site does not collect</h2>
          <p>Sephiria Wiki has no accounts, no comment system, and no contact form, and it does not ask readers for personal data. Contacting the site through GitHub is handled under GitHub&rsquo;s own privacy policy. See the <a href="/privacy">privacy policy</a> for the full statement.</p>
        </> : kind === 'about' ? <>
          <h2>Independent fan resource</h2>
          <p>Sephiria Wiki is an independent, unofficial guide project for the game Sephiria. It is not affiliated with TEAM HORAY, Valve, Steam, Nintendo, or any platform holder. Game names, artwork, and trademarks belong to their respective owners.</p>
          <h2>What this site is for</h2>
          <p>The site organizes official release information and player-facing guide topics such as weapons, artifacts, tablets, co-op, updates, and platform availability. It aims to provide a direct answer first, link to the supporting source, and clearly distinguish verified facts from information that still needs confirmation.</p>
          <h2>How information is maintained</h2>
          <p>Pages are reviewed against primary sources where possible, including the developer website, the official Steam store page, Steam announcements, and developer-posted community links. When a useful detail is not supported by a reliable source or reproducible in-game evidence, the page labels it as unconfirmed rather than filling the gap with a guess.</p>
          <h2>Who maintains this site</h2>
          <p>Sephiria Wiki is maintained by the Sephiria Wiki editorial team as an independent fan project. It is not staffed by, funded by, or affiliated with TEAM HORAY, Valve, Steam, or Nintendo. The team writes the guides, checks them against the primary sources named in the editorial policy, and updates pages when official announcements change the answer.</p>
          <h2>Update frequency</h2>
          <p>There is no fixed publishing calendar. Pages are re-checked and updated when an official announcement changes a fact, when a patch changes gameplay, or when a review finds a gap worth filling with a real method or worksheet. Every expanded guide shows its own last-updated date at the top of the article, and the update log below records the most recent changes.</p>
          <h2>Corrections</h2>
          <p>When a source proves an earlier page wrong or incomplete, the page is corrected and its review date is updated. Corrections are recorded in the update log with the date, so readers can see what changed and why. The site does not silently rewrite a wrong claim to look as if it was always right.</p>
          <h2>Update log</h2>
          <ul>
            <li><strong>October 14, 2026:</strong> expanded five core pages with full planning methods (Grimoire builds, weapons, Switch status, upgrade tree, puzzle guide), added the Build Decision Guide worksheet, added per-page last-updated dates, FAQ structured data, a site search page, and a footer last-updated line.</li>
            <li><strong>October 11, 2026:</strong> refreshed page titles and descriptions for the five highest-impression search topics, using real Search Console query data.</li>
            <li><strong>September 6, 2026:</strong> keyword research library reviewed; per-page review dates recorded.</li>
            <li><strong>August 24, 2026:</strong> initial source verification against the official Steam listing and developer pages.</li>
          </ul>
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
          <h2>Update frequency and corrections</h2>
          <p>Guides are re-checked when an official announcement or patch changes the answer, and expanded pages show their own last-updated date. The About page carries a dated update log. When a source proves an earlier page wrong or incomplete, the page is corrected and its review date is updated rather than silently rewritten.</p>
          <h2>Contact and corrections</h2>
          <p>Corrections and source suggestions are collected on the <a href="/contact">contact page</a>. Player submissions and community-sourced data are only published after they can be traced to a primary source or reproducible evidence, following the hierarchy above.</p>
        </>}
      </article>
    </div>
  </WikiShell>
}
