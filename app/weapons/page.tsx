import { WeaponsPage } from '../weapons-page'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Sephiria Weapons: Branches & Upgrade Facts',
  description: 'Explore Sephiria weapons through supplied research, including six confirmed weapon branches, 200+ upgrades, build context, and clearly marked unconfirmed details.',
  path: '/weapons',
  keywords: ['Sephiria weapons', 'Sephiria weapon branches', 'Sephiria upgrades'],
})

export default function Page() { return <WeaponsPage locale="en" /> }
