import Link from 'next/link'
import { JsonLd } from '@/components/json-ld'
import { codeRows, getCopy, officialLinks, seoByLocale } from '@/lib/content'
import { localePath, type Locale } from '@/lib/locales'
import { absoluteUrl } from '@/lib/seo'
import { SectionHeading, WikiShell } from '@/components/wiki-shell'
import { getHomeMdx } from '@/lib/mdx-content'

export function generateMetadata(locale: Locale) { const seo = seoByLocale[locale]; return { title: seo.title, description: seo.description, keywords: seo.keywords } }

export default async function HomePage({ locale = 'en' as Locale }: { locale?: Locale }) {
  const copy = getCopy(locale); const Notes = await getHomeMdx(locale); const href = (path: string) => localePath(locale, path)
  const gameSchema = locale === 'en' ? {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: 'Sephiria',
    url: officialLinks.website,
    description: 'A top-down action roguelite and action RPG developed by TEAM HORAY.',
    genre: ['Action Roguelite', 'Action RPG'],
    gamePlatform: ['Windows', 'macOS'],
    operatingSystem: ['Windows', 'macOS'],
    applicationCategory: 'Game',
    sameAs: [officialLinks.steam, officialLinks.website],
    author: { '@type': 'Organization', name: 'TEAM HORAY' },
    mainEntityOfPage: absoluteUrl('/'),
  } : undefined
  return <WikiShell locale={locale} copy={copy}>
    {gameSchema && <JsonLd data={gameSchema} />}
    <section className="hero"><div className="hero-mark" aria-hidden="true" /><div className="eyebrow">{copy.home.eyebrow}</div><h1 className="display-title"><span>{copy.home.title}</span></h1><p className="hero-copy">{copy.home.description}</p><div className="actions"><Link className="action-primary" href={href('/weapons')}>{copy.home.primaryCta}</Link><Link className="action-secondary" href={href('/weapons/grimoire')}>{copy.home.secondaryCta}</Link><a className="action-secondary" href="https://www.youtube.com/watch?v=uK0Yjz3Q3Sc" target="_blank" rel="noreferrer">{copy.home.tertiaryCta}</a></div><div className="hero-stats">{copy.home.heroStats.map((stat, index) => <div className="hero-stat" key={stat}><strong>{index === 0 ? '2026' : index === 1 ? 'Aug' : index === 2 ? '93%' : index === 3 ? '4' : '300'}</strong>{stat}</div>)}</div></section>
    <section className="section"><SectionHeading>{copy.home.startEyebrow}</SectionHeading><h2 className="section-title gradient-title">{copy.home.startTitle}</h2><div className="card-grid">{copy.home.cards.map(card => <Link className="wiki-card" href={href(card.href)} key={card.number}><div className="card-number">{card.number}</div><h3 className="card-title">{card.title}</h3><p className="card-copy">{card.description}</p></Link>)}</div></section>
    <section className="section"><SectionHeading>{copy.home.aboutTitle}</SectionHeading><div className="split"><div className="prose">{copy.home.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<Link className="action-secondary" href={href('/weapons')}>{copy.home.aboutCta}</Link></div><div><h3 className="section-title" style={{ textAlign: 'left', fontSize: '32px' }}>{copy.home.statsTitle}</h3><div className="quick-facts">{copy.home.quickStats.map(item => <div className="fact" key={item.label}><div className="fact-label">{item.label}</div><div className="fact-value">{item.value}</div></div>)}</div></div></div></section>
    <section className="section" id="codes"><SectionHeading>{copy.home.codeEyebrow}</SectionHeading><h2 className="section-title gradient-title">{copy.home.codeTitle}</h2><div className="code-panel"><p>{copy.home.codeDescription}</p><div className="code-list">{codeRows.map(row => <div className="code-row" key={row.reward}><span className="code">{row.code}</span><span className="code-reward">{row.reward}</span></div>)}</div></div></section>
    <section className="section"><SectionHeading>Research Notes</SectionHeading><article className="article-content"><Notes /></article></section>
    <section className="final-cta"><div className="eyebrow">{copy.home.eyebrow}</div><h2 className="section-title gradient-title">{copy.home.finalTitle}</h2><p>{copy.home.finalDescription}</p><div className="actions"><Link className="action-primary" href={href('/weapons')}>{copy.home.finalPrimary}</Link><a className="action-secondary" href="https://store.steampowered.com/app/2436940/Sephiria/" target="_blank" rel="noreferrer">{copy.home.finalSecondary}</a></div></section>
  </WikiShell>
}

