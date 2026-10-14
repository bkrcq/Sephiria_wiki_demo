'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { isKeywordIndexable, keywordPages } from '@/lib/keyword-pages'

type Entry = { href: string; title: string; text: string }

const staticEntries: Entry[] = [
  { href: '/', title: 'Sephiria Wiki — Home', text: 'Guides, builds, weapons, artifacts, bosses, co-op, and verified game facts in one place.' },
  { href: '/weapons', title: 'Sephiria Weapons & Upgrade Paths', text: 'Six weapon branches, 200+ upgrades, and a method for choosing and testing a branch.' },
  { href: '/weapons/grimoire', title: 'Sephiria Grimoire Build Guide', text: 'Build planning by run goal, with a reusable worksheet and testing method.' },
  { href: '/guides/sephiria-build-decision-guide', title: 'Sephiria Build Decision Guide', text: 'A step-by-step worksheet for choosing between builds.' },
  { href: '/artifacts', title: 'Sephiria Artifacts & Tablets', text: 'The verified 300-artifact and 70-tablet scope, plus a reproducible build-note method.' },
  { href: '/bosses', title: 'Sephiria Bosses: Research Hub', text: 'Boss preparation and encounter-recording checklist for the six-chapter structure.' },
  { href: '/coop', title: 'Sephiria Co-op: Up to 4 Players', text: 'Verified online co-op scope and a coordination checklist.' },
  { href: '/guides', title: 'Sephiria Guides', text: 'The full guide library, grouped by topic.' },
  { href: '/about', title: 'About Sephiria Wiki', text: 'Who maintains this wiki, how it is updated, and the dated update log.' },
  { href: '/editorial-policy', title: 'Research & Editorial Policy', text: 'Source hierarchy, verification standards, update policy, and corrections.' },
]

const allEntries: Entry[] = [
  ...staticEntries,
  ...keywordPages
    .filter((page) => isKeywordIndexable(page.slug))
    .map((page) => ({ href: `/guides/${page.slug}`, title: page.title, text: page.answer })),
]

export function SearchUI() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get('q') ?? ''
  const [query, setQuery] = useState(initialQuery)
  const normalized = query.trim().toLowerCase()
  const results = useMemo(() => {
    if (!normalized) return allEntries
    const terms = normalized.split(/\s+/)
    return allEntries.filter((entry) => {
      const haystack = `${entry.title} ${entry.text}`.toLowerCase()
      return terms.every((term) => haystack.includes(term))
    })
  }, [normalized])

  return (
    <section className="section" aria-label="Search">
      <form action="/search" method="get" role="search" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <label htmlFor="site-search" style={{ position: 'absolute', left: '-9999px' }}>Search guides</label>
        <input
          id="site-search"
          name="q"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try: build, switch, puzzle, co-op, upgrade tree…"
          autoComplete="off"
          style={{ flex: '1 1 280px', padding: '12px 16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.25)', background: 'rgba(255,255,255,0.06)', color: 'inherit', fontSize: '16px' }}
        />
        <button type="submit" className="action-primary" style={{ border: 'none', cursor: 'pointer' }}>Search</button>
      </form>
      <p style={{ marginTop: '16px' }}>
        {normalized ? `${results.length} result${results.length === 1 ? '' : 's'} for “${query.trim()}”.` : `Showing all ${results.length} guides. Type a keyword to narrow the list.`}
      </p>
      <div className="card-grid">
        {results.map((entry) => (
          <Link className="wiki-card" href={entry.href} key={entry.href}>
            <div className="card-number">{entry.title.slice(0, 1).toUpperCase()}</div>
            <h2 className="card-title">{entry.title}</h2>
            <p className="card-copy">{entry.text}</p>
          </Link>
        ))}
      </div>
      {results.length === 0 && <p>No guides matched. Try a broader keyword such as “build”, “weapon”, “co-op”, or “switch”.</p>}
    </section>
  )
}
