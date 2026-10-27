import { WeaponsPage } from '../weapons-page'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Sephiria Weapons Guide: 6 Branches & 200+ Upgrades Compared',
  description: 'Compare Sephiria\'s 6 weapon branches and 200+ upgrades on range, speed and damage style — plus a fixed test protocol for choosing your branch.',
  path: '/weapons',
  keywords: ['Sephiria weapons', 'Sephiria weapon upgrades', 'Sephiria weapon branches', 'Sephiria upgrades'],
})

export default function Page() { return <WeaponsPage locale="en" /> }
