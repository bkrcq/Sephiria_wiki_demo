import type { Locale } from '@/lib/locales'
import { codeRows, getCopy } from '@/lib/content'
import { WikiShell } from '@/components/wiki-shell'
import { getGrimoireMdx } from '@/lib/mdx-content'

export async function GrimoirePage({ locale }: { locale: Locale }) {
  const copy = getCopy(locale)
  const Content = await getGrimoireMdx(locale)
  return <WikiShell locale={locale} copy={copy}><div className="article-wrap"><div className="article-hero"><div className="eyebrow">{copy.grimoire.eyebrow}</div><h1 className="display-title"><span>{copy.grimoire.title}</span></h1><p className="hero-copy">{copy.grimoire.description}</p></div><div className="article-layout"><article className="article-content"><Content /></article><aside className="article-sidebar"><h2>{copy.home.codeTitle}</h2><p>{copy.home.codeDescription}</p><div className="code-list">{codeRows.map(row => <div className="code-row" key={row.reward}><span className="code">{row.code}</span><span className="code-reward">{row.reward}</span></div>)}</div></aside></div></div></WikiShell>
}
