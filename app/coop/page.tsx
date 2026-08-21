import type { Metadata } from 'next'
import { ArticleJsonLd } from '@/app/seo-json-ld'
import { TopicGuidePage } from '@/app/topic-guide-page'

export const metadata: Metadata = {
  title: 'Sephiria Co-op: Up to 4 Players (Verified Scope)',
  description: 'Learn the verified Sephiria online co-op scope—up to four players—and see which matchmaking, cross-play, and progression details still need primary sources.',
  alternates: { canonical: '/coop', languages: { en: '/coop', 'x-default': '/coop' } },
  openGraph: { type: 'article', title: 'Sephiria Co-op: Up to 4 Players', description: 'Verified online co-op scope and a source-led coordination checklist.' },
}

export default function Page() {
  return <><ArticleJsonLd headline="Sephiria Co-op: Up to 4 Players" description="Verified online co-op scope and a source-led coordination checklist." path="/coop" breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Co-op', path: '/coop' }]} /><TopicGuidePage topic="coop" /></>
}
