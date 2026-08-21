import type { Metadata } from 'next'
import { ArticleJsonLd } from '@/app/seo-json-ld'
import { TopicGuidePage } from '@/app/topic-guide-page'

export const metadata: Metadata = {
  title: 'Sephiria Artifacts & Tablets: Verified Build Scope',
  description: 'Explore the verified Sephiria artifact and tablet scope: 300 artifacts, 70 tablets, and a transparent framework for build research without invented item data.',
  alternates: { canonical: '/artifacts', languages: { en: '/artifacts', 'x-default': '/artifacts' } },
  openGraph: { type: 'article', title: 'Sephiria Artifacts & Tablets: Verified Build Scope', description: 'Verified artifact and tablet build scope with clear research limits.' },
}

export default function Page() {
  return <><ArticleJsonLd headline="Sephiria Artifacts & Tablets: Verified Build Scope" description="Verified Sephiria artifact and tablet build scope with clear research limits." path="/artifacts" breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Artifacts', path: '/artifacts' }]} /><TopicGuidePage topic="artifacts" /></>
}
