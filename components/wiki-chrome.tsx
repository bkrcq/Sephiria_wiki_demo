import Link from 'next/link'
import { officialLinks } from '@/lib/content'
import { localeNames, localePath, type Locale } from '@/lib/locales'
import type { Copy } from '@/lib/content'

export function WikiHeader({ locale, copy }: { locale: Locale; copy: Copy }) {
  const href = (path: string) => localePath(locale, path)
  return <header className="wiki-header">
    <div className="header-main">
      <Link className="brand" href={href('')}>
        <span className="brand-mark" aria-hidden="true" />
        <span><span className="brand-title">{copy.siteTitle}</span><span className="brand-subtitle">{copy.siteSubtitle}</span></span>
      </Link>
      <nav className="main-nav" aria-label="Main navigation">
        {[['weapons', copy.nav.weapons], ['weapons/grimoire', copy.nav.builds], ['guides', copy.nav.guides]].map(([path, label]) => <Link key={path} href={href(path)}>{label}</Link>)}
      </nav>
      <a className="steam-pill" href={officialLinks.steam} target="_blank" rel="noreferrer">{copy.steam}</a>
    </div>
    <div className="header-utility"><nav className="utility-nav" aria-label="Utility navigation">
      <a href={`${href('')}#updates`}>{copy.utility.update}</a>
      <a href={`${href('')}#codes`}>{copy.utility.codes}</a>
      <a href={officialLinks.community} target="_blank" rel="noreferrer">{copy.utility.community}</a>
    </nav></div>
  </header>
}

export function WikiFooter({ locale, copy }: { locale: Locale; copy: Copy }) {
  const href = (path: string) => localePath(locale, path)
  return <footer className="footer"><div className="footer-inner"><div className="footer-grid">
    <div><h3>{copy.footer.aboutTitle}</h3><p>{copy.footer.about}</p><p>{copy.footer.description}</p></div>
    <div><h3>{copy.footer.guides}</h3><ul><li><Link href={href('/weapons')}>{copy.nav.weapons}</Link></li><li><Link href={href('/weapons/grimoire')}>{copy.nav.builds}</Link></li><li><Link href={href('/guides')}>{copy.nav.guides}</Link></li></ul></div>
    <div><h3>{copy.footer.resources}</h3><ul><li><a href={officialLinks.steam} target="_blank" rel="noreferrer">{copy.steam}</a></li><li><a href={officialLinks.trailer} target="_blank" rel="noreferrer">{copy.home.videoLabel}</a></li><li><a href={officialLinks.community} target="_blank" rel="noreferrer">{copy.footer.officialDiscord}</a></li></ul></div>
    <div><h3>{copy.footer.community}</h3><ul><li><a href={officialLinks.website} target="_blank" rel="noreferrer">{copy.footer.officialWebsite}</a></li><li><a href={officialLinks.youtube} target="_blank" rel="noreferrer">{copy.footer.officialYoutube}</a></li><li><a href={officialLinks.discord} target="_blank" rel="noreferrer">{copy.footer.officialDiscord}</a></li><li><Link href={href('/privacy')}>{copy.footer.privacy}</Link></li><li><Link href={href('/terms')}>{copy.footer.terms}</Link></li></ul></div>
  </div><div className="footer-bottom"><span>{copy.footer.copyright}</span><a href={officialLinks.steam} target="_blank" rel="noreferrer">{copy.footer.buy}</a><span>{copy.languageLabel}: {Object.entries(localeNames).map(([code, name]) => <span key={code}> <Link href={localePath(code as Locale)}>{name}</Link></span>)}</span></div></div></footer>
}
