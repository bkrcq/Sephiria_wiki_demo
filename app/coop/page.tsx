import type { Metadata } from 'next'
import { ArticleJsonLd } from '@/app/seo-json-ld'
import { TopicGuidePage } from '@/app/topic-guide-page'

export const metadata: Metadata = {
  title: 'Sephiria Co-op: How to Play With Friends Online (Up to 4 Players)',
  description: 'Sephiria online co-op supports up to 4 players. See the confirmed scope, how to split party roles, and which details are still unconfirmed.',
  alternates: { canonical: '/coop', languages: { en: '/coop', 'x-default': '/coop' } },
  openGraph: { type: 'article', title: 'Sephiria Co-op: How to Play With Friends (Up to 4 Players)', description: 'Confirmed online co-op scope plus a party-role checklist.' },
}

export default function Page() {
  return <><ArticleJsonLd headline="Sephiria Co-op: How to Play With Friends (Up to 4 Players)" description="Confirmed online co-op scope plus a party-role checklist." path="/coop" breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Co-op', path: '/coop' }]} /><TopicGuidePage topic="coop" /></>
}
