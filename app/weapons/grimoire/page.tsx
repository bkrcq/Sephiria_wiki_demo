import type { Metadata } from 'next'
import { GrimoirePage } from '../../grimoire-page'
import { ArticleJsonLd } from '@/app/seo-json-ld'

export const metadata: Metadata = {
  title: 'Sephiria Build Planning: Grimoire, Artifacts & Tablets',
  description: 'Plan Sephiria runs around weapon branches, artifacts, tablets, and animal synergies with clearly separated confirmed facts and open questions.',
  alternates: { canonical: '/weapons/grimoire', languages: { en: '/weapons/grimoire', 'x-default': '/weapons/grimoire' } },
  openGraph: { type: 'article', title: 'Sephiria Build Planning: Grimoire, Artifacts & Tablets', description: 'Build-planning notes for weapons, artifacts, tablets, and animal synergies.' },
}
export default function Page() { return <><ArticleJsonLd headline="Sephiria Build Planning: Grimoire, Artifacts & Tablets" description="Build-planning notes for weapons, artifacts, tablets, and animal synergies." path="/weapons/grimoire" breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Weapons', path: '/weapons' }, { name: 'Build Planning', path: '/weapons/grimoire' }]} /><GrimoirePage locale="en" /></> }
