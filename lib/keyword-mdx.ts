import type { ComponentType } from 'react'
import type { Locale } from './locales'

type MdxComponent = ComponentType

const englishLoaders: Record<string, () => Promise<{ default: MdxComponent }>> = {
  'sephiria-guide': () => import('@/content/en/keywords/sephiria-guide.mdx'),
  'sephiria-wiki': () => import('@/content/en/keywords/sephiria-wiki.mdx'),
  'sephiria-weapons': () => import('@/content/en/keywords/sephiria-weapons.mdx'),
  'sephiria-grimoire': () => import('@/content/en/keywords/sephiria-grimoire.mdx'),
  'sephiria-tier-list': () => import('@/content/en/keywords/sephiria-tier-list.mdx'),
  'sephiria-builds': () => import('@/content/en/keywords/sephiria-builds.mdx'),
  'sephiria-destiny-inscription': () => import('@/content/en/keywords/sephiria-destiny-inscription.mdx'),
  'sephiria-coop': () => import('@/content/en/keywords/sephiria-coop.mdx'),
  'sephiria-secret-rooms': () => import('@/content/en/keywords/sephiria-secret-rooms.mdx'),
  'sephiria-elru': () => import('@/content/en/keywords/sephiria-elru.mdx'),
  'sephiria-costumes': () => import('@/content/en/keywords/sephiria-costumes.mdx'),
  'sephiria-mods': () => import('@/content/en/keywords/sephiria-mods.mdx'),
  'sephiria-switch': () => import('@/content/en/keywords/sephiria-switch.mdx'),
  'sephiria-reddit': () => import('@/content/en/keywords/sephiria-reddit.mdx'),
  'sephiria-review': () => import('@/content/en/keywords/sephiria-review.mdx'),
  'sephiria-1-0': () => import('@/content/en/keywords/sephiria-1-0.mdx'),
  'sephiria-roadmap': () => import('@/content/en/keywords/sephiria-roadmap.mdx'),
  'sephiria-puzzle': () => import('@/content/en/keywords/sephiria-puzzle.mdx'),
  'sephiria-how-many-chapters': () => import('@/content/en/keywords/sephiria-how-many-chapters.mdx'),
  'sephiria-secrets': () => import('@/content/en/keywords/sephiria-secrets.mdx'),
  'sephiria-upgrade-tree': () => import('@/content/en/keywords/sephiria-upgrade-tree.mdx'),
  'sephiria-best-weapon': () => import('@/content/en/keywords/sephiria-best-weapon.mdx'),
  'sephira-weapons': () => import('@/content/en/keywords/sephira-weapons.mdx'),
  'sephiria-artifact': () => import('@/content/en/keywords/sephiria-artifact.mdx'),
  'aiba-sephiria': () => import('@/content/en/keywords/aiba-sephiria.mdx'),
  'sephiria-all-characters': () => import('@/content/en/keywords/sephiria-all-characters.mdx'),
  'sephiria-discord': () => import('@/content/en/keywords/sephiria-discord.mdx'),
}

export async function getKeywordMdx(slug: string, _locale: Locale) {
  const loader = englishLoaders[slug]
  if (!loader) return undefined
  return (await loader()).default
}
