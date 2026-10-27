import { GrimoirePage } from '../../grimoire-page'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Sephiria Grimoire Build Guide: Plan by Run Goal, Test in 3 Runs',
  description: 'No universal Grimoire build is confirmed. Use this run-goal worksheet: pick a branch, test it over three runs, and decide from your own evidence.',
  path: '/weapons/grimoire',
  keywords: ['Sephiria Grimoire', 'Sephiria grimoire build', 'Sephiria builds', 'Sephiria build planner'],
})

export default function Page() { return <GrimoirePage locale="en" /> }
