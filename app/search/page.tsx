import { Suspense } from 'react'
import { getCopy } from '@/lib/content'
import { pageMetadata } from '@/lib/seo'
import { WikiShell } from '@/components/wiki-shell'
import { SearchUI } from './search-ui'

export const metadata = pageMetadata({
  title: 'Search Sephiria Wiki',
  description: 'Search Sephiria Wiki guides by keyword: builds, weapons, artifacts, bosses, co-op, chapters, puzzles, and platform status.',
  path: '/search',
  index: false,
  keywords: ['Sephiria Wiki search', 'search Sephiria guides'],
})

export default function Page() {
  const copy = getCopy('en')
  return (
    <WikiShell locale="en" copy={copy}>
      <div className="article-wrap">
        <div className="article-hero">
          <div className="eyebrow">Site search</div>
          <h1 className="display-title"><span>Search Sephiria Wiki</span></h1>
          <p className="hero-copy">Search every guide on this site by keyword. Results link to the full article, which shows its sources and last-updated date.</p>
        </div>
        <Suspense>
          <SearchUI />
        </Suspense>
      </div>
    </WikiShell>
  )
}
