import type { Locale } from '@/lib/locales'
import { getCopy } from '@/lib/content'
import { WikiShell } from '@/components/wiki-shell'

export function LegalPage({ locale, kind }: { locale: Locale; kind: 'privacy' | 'terms' }) {
  const copy = getCopy(locale)
  const title = kind === 'privacy' ? copy.footer.privacy : copy.footer.terms

  return <WikiShell locale={locale} copy={copy}>
    <div className="article-wrap">
      <div className="article-hero">
        <div className="eyebrow">Sephiria Wiki</div>
        <h1 className="display-title"><span>{title}</span></h1>
        <p className="hero-copy">Last reviewed: August 24, 2026</p>
      </div>
      <article className="article-content">
        {kind === 'privacy' ? <>
          <h2>Privacy</h2>
          <p>Sephiria Wiki does not require an account and does not knowingly collect player-submitted personal data through the site. If analytics, advertising, a contact form, newsletters, or other data-collection features are added later, this policy must be updated before those features are enabled.</p>
          <h2>Third-party services</h2>
          <p>Links to TEAM HORAY, Steam, YouTube, Reddit, and developer-posted Discord or Steam Community pages lead to third-party services. Those services operate under their own privacy policies and terms.</p>
          <h2>Cookies</h2>
          <p>This site does not currently provide a user account or a first-party marketing-cookie feature. Platform, hosting, and linked third-party services may process technical data according to their own policies.</p>
        </> : <>
          <h2>Fan-site status</h2>
          <p>Sephiria Wiki is an independent fan-made guide and is not affiliated with TEAM HORAY, Valve, Steam, Nintendo, or any platform holder. All trademarks belong to their respective owners.</p>
          <h2>Accuracy and sources</h2>
          <p>The site prioritizes official developer and Steam sources. Information that has not been confirmed by a reliable source or reproducible evidence is labeled unconfirmed. Game updates can change details, so readers should follow the source links and check the last-reviewed date before relying on a guide.</p>
          <h2>External links</h2>
          <p>External links are included for research convenience. Sephiria Wiki does not control, endorse, or guarantee third-party websites, community posts, videos, stores, or Discord servers.</p>
        </>}
      </article>
    </div>
  </WikiShell>
}
