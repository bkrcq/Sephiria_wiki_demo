import { GrimoirePage } from '../../grimoire-page'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Sephiria Grimoire Build Guide – Best Builds & Upgrades',
  description: 'Best Sephiria Grimoire builds: stats, upgrade paths, weapon combos and unlock requirements. Complete Grimoire build guide with everything confirmed so far.',
  path: '/weapons/grimoire',
  keywords: ['Sephiria Grimoire', 'Sephiria grimoire build', 'Sephiria builds', 'Sephiria build planner'],
})

export default function Page() { return <GrimoirePage locale="en" /> }
