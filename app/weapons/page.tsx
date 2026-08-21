import type { Metadata } from 'next'
import { WeaponsPage } from '../weapons-page'
import { ArticleJsonLd } from '@/app/seo-json-ld'

export const metadata: Metadata = {
  title: 'Sephiria Weapons: Branches, Upgrades & Build Planning',
  description: 'Explore Sephiria’s six confirmed weapon branches, 200+ upgrades, and practical build-planning notes. Last verified August 21, 2026.',
  alternates: { canonical: '/weapons', languages: { en: '/weapons', 'x-default': '/weapons' } },
  openGraph: { type: 'article', title: 'Sephiria Weapons: Branches, Upgrades & Build Planning', description: 'Six confirmed weapon branches, 200+ upgrades, and practical build-planning notes.' },
}
export default function Page() { return <><ArticleJsonLd headline="Sephiria Weapons: Branches, Upgrades & Build Planning" description="Six confirmed weapon branches, 200+ upgrades, and practical build-planning notes." path="/weapons" breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Weapons', path: '/weapons' }]} /><WeaponsPage locale="en" /></> }
