import { KeywordGuideIndex } from '@/app/keyword-guide-index'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Sephiria Wiki: All Guides — Beginner, Builds, Bosses & Co-op',
  description: 'All Sephiria guides in one place: beginner basics, build planning, bosses and co-op — answers checked against official sources, unknowns marked.',
  path: '/guides',
  keywords: ['Sephiria guides', 'Sephiria wiki', 'Sephiria facts'],
})

export default function Page() { return <KeywordGuideIndex locale="en" /> }
