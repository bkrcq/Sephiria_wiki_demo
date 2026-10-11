import { WeaponsPage } from '../weapons-page'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Sephiria Weapons & Upgrades Guide – All Branches',
  description: 'All Sephiria weapons: 6 branches, 200+ upgrades, stats and build recommendations. Complete Sephiria weapons and upgrades guide.',
  path: '/weapons',
  keywords: ['Sephiria weapons', 'Sephiria weapon upgrades', 'Sephiria weapon branches', 'Sephiria upgrades'],
})

export default function Page() { return <WeaponsPage locale="en" /> }
