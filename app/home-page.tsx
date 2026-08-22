import Link from 'next/link'
import { codeRows, getCopy, officialLinks, seoByLocale } from '@/lib/content'
import { localePath, type Locale } from '@/lib/locales'
import { SectionHeading, WikiShell } from '@/components/wiki-shell'
import { JsonLd } from '@/components/json-ld'
import { absoluteUrl } from '@/lib/seo'
import { getHomeMdx } from '@/lib/mdx-content'

export function generateMetadata(locale: Locale) { const seo = seoByLocale[locale]; return { title: seo.title, description: seo.description, keywords: seo.keywords } }

export default async function HomePage({ locale = 'en' as Locale }: { locale?: Locale }) {
  const copy = getCopy(locale)
  const Notes = await getHomeMdx(locale)
  const href = (path: string) => localePath(locale, path)
  const gameSchema = locale === 'en' ? {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: 'Sephiria',
    url: officialLinks.website,
    description: 'A top-down action roguelike game developed by TEAM HORAY.',
    genre: ['Action Roguelike'],
    gamePlatform: ['Windows', 'macOS'],
    operatingSystem: ['Windows', 'macOS'],
    applicationCategory: 'Game',
    sameAs: [officialLinks.steam, officialLinks.website],
    author: { '@type': 'Organization', name: 'TEAM HORAY' },
    mainEntityOfPage: absoluteUrl('/'),
  } : undefined

  return <WikiShell locale={locale} copy={copy}>
    {gameSchema && <JsonLd data={gameSchema} />}
    <section className="hero"><div className="hero-mark" aria-hidden="true" /><div className="eyebrow">{copy.home.eyebrow}</div><h1 className="display-title"><span>{copy.home.title}</span></h1><p className="hero-copy">{copy.home.description}</p><div className="actions"><Link className="action-primary" href={href('/guides/sephiria-guide')}>{copy.home.primaryCta}</Link><Link className="action-secondary" href={href('/weapons/grimoire')}>{copy.home.secondaryCta}</Link><a className="action-secondary" href={officialLinks.trailer} target="_blank" rel="noreferrer">{copy.home.tertiaryCta}</a></div><div className="hero-stats">{copy.home.heroStats.map((stat) => <div className="hero-stat" key={stat}>{stat}</div>)}</div></section>
    <section className="section"><SectionHeading>{copy.home.startEyebrow}</SectionHeading><h2 className="section-title gradient-title">{copy.home.startTitle}</h2><div className="card-grid">{copy.home.cards.map(card => <Link className="wiki-card" href={href(card.href)} key={card.number}><div className="card-number">{card.number}</div><h3 className="card-title">{card.title}</h3><p className="card-copy">{card.description}</p></Link>)}</div></section>
    <section className="section"><SectionHeading>{copy.home.aboutTitle}</SectionHeading><div className="split"><div className="prose">{copy.home.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<Link className="action-secondary" href={href('/guides')}>{copy.home.aboutCta}</Link></div><div><h3 className="section-title" style={{ textAlign: 'left', fontSize: '32px' }}>{copy.home.statsTitle}</h3><div className="quick-facts">{copy.home.quickStats.map(item => <div className="fact" key={item.label}><div className="fact-label">{item.label}</div><div className="fact-value">{item.value}</div></div>)}</div></div></div></section>
    {locale === 'en' && <section className="section"><SectionHeading>Verified topic hubs</SectionHeading><h2 className="section-title gradient-title">Research, not guesswork</h2><div className="card-grid topic-hub-grid"><Link className="wiki-card" href="/artifacts"><div className="card-number">A</div><h3 className="card-title">Artifacts & Tablets</h3><p className="card-copy">See the verified 300-artifact and 70-tablet scope, plus a reproducible way to document builds.</p></Link><Link className="wiki-card" href="/bosses"><div className="card-number">B</div><h3 className="card-title">Boss Research Hub</h3><p className="card-copy">Use a six-chapter preparation and encounter-recording checklist without invented boss data.</p></Link><Link className="wiki-card" href="/coop"><div className="card-number">C</div><h3 className="card-title">Co-op: Up to 4 Players</h3><p className="card-copy">Find the confirmed online co-op scope and the details that still require primary sources.</p></Link></div></section>}
    <section className="section" id="codes"><SectionHeading>{copy.home.codeEyebrow}</SectionHeading><h2 className="section-title gradient-title">{copy.home.codeTitle}</h2><div className="code-panel"><p>{copy.home.codeDescription}</p><div className="code-list">{codeRows.map(row => <div className="code-row" key={row.reward}><span className="code">{row.code}</span><span className="code-reward">{row.reward}</span></div>)}</div></div></section>
    <section className="section"><SectionHeading>Research Notes</SectionHeading><article className="article-content"><Notes /></article></section>
    <section className="final-cta"><div className="eyebrow">{copy.home.eyebrow}</div><h2 className="section-title gradient-title">{copy.home.finalTitle}</h2><p>{copy.home.finalDescription}</p><div className="actions"><Link className="action-primary" href={href('/guides/sephiria-guide')}>{copy.home.finalPrimary}</Link><a className="action-secondary" href={officialLinks.steam} target="_blank" rel="noreferrer">{copy.home.finalSecondary}</a></div></section>
  </WikiShell>
}
