import type { Metadata } from 'next'
import { ArticleJsonLd } from '@/app/seo-json-ld'
import { TopicGuidePage } from '@/app/topic-guide-page'

export const metadata: Metadata = {
  title: 'Sephiria Bosses: Verified Research & Preparation',
  description: 'Prepare for Sephiria boss encounters with a transparent research checklist. Six chapters are confirmed; unsupported boss names and mechanics are clearly excluded.',
  alternates: { canonical: '/bosses', languages: { en: '/bosses', 'x-default': '/bosses' } },
  openGraph: { type: 'article', title: 'Sephiria Bosses: Verified Research & Preparation', description: 'A transparent Sephiria boss research hub and encounter documentation checklist.' },
}

export default function Page() {
  return <><ArticleJsonLd headline="Sephiria Bosses: Verified Research & Preparation" description="A transparent Sephiria boss research hub and encounter documentation checklist." path="/bosses" breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Bosses', path: '/bosses' }]} /><TopicGuidePage topic="bosses" /></>
}
