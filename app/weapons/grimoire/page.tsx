import { GrimoirePage } from '../../grimoire-page'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Sephiria Grimoire: Build Planner Facts',
  description: 'Review Sephiria Grimoire build-planning context from supplied research, with confirmed system scale, official links, and unknown item details marked unconfirmed.',
  path: '/weapons/grimoire',
  keywords: ['Sephiria Grimoire', 'Sephiria builds', 'Sephiria build planner'],
})

export default function Page() { return <GrimoirePage locale="en" /> }
