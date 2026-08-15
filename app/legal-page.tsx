import type { Locale } from '@/lib/locales'
import { getCopy } from '@/lib/content'
import { WikiShell } from '@/components/wiki-shell'

export function LegalPage({ locale, kind }: { locale: Locale; kind: 'privacy' | 'terms' }) {
  const copy = getCopy(locale)
  const title = kind === 'privacy' ? copy.footer.privacy : copy.footer.terms
  return <WikiShell locale={locale} copy={copy}><div className="article-wrap"><div className="article-hero"><div className="eyebrow">Sephiria Wiki</div><h1 className="display-title"><span>{title}</span></h1><p className="hero-copy">Last reviewed: August 13, 2026</p></div><article className="article-content">{kind === 'privacy' ? <><h2>Privacy</h2><p>This independent Sephiria fan wiki does not require an account in this implementation. Analytics, advertising, cookies, data retention, and contact details are 待确认 before deployment.</p><h2>Official services</h2><p>Links to TEAM HORAY, Steam, YouTube, Reddit, and the developer-posted Discord entry lead to third-party services with their own privacy policies.</p></> : <><h2>Fan-site status</h2><p>Sephiria Wiki is an independent fan-made guide and is not affiliated with TEAM HORAY or Valve. All trademarks belong to their respective owners.</p><h2>Accuracy</h2><p>Content uses the supplied research file. Information not confirmed by that research is marked 待确认, and no redemption code or numeric game value is invented.</p><h2>Deployment terms</h2><p>Hosting jurisdiction, contact address, moderation rules, and liability language are 待确认 before public launch.</p></>}</article></div></WikiShell>
}
