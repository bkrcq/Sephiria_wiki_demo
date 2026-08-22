import type { Metadata } from 'next'
import type { Locale } from './locales'
import { pageMetadata } from './seo'

export type KeywordPage = {
  keyword: string
  slug: string
  category: string
  title: string
  description: string
  answer: string
}

const lowValueKeywordSlugs = new Set([
  'sephiria-costumes',
  'sephiria-destiny-inscription',
  'sephiria-elru',
  'sephiria-mods',
  'sephiria-reddit',
  'sephiria-secret-rooms',
  'sephiria-switch',
  'sephiria-tier-list',
])

export function isKeywordIndexable(slug: string) {
  return !lowValueKeywordSlugs.has(slug)
}
export const keywordPages: KeywordPage[] = [
  {
    "keyword": "sephiria guide",
    "slug": "sephiria-guide",
    "category": "guide",
    "title": "Sephiria Guide: Verified Facts & Beginner Steps",
    "description": "Sephiria guide answers from verified research: review the premise, Steam release details, core systems, co-op status, and questions that remain unconfirmed.",
    "answer": "sephiria guide can be answered only at a high level from the supplied Sephiria research; keyword-specific names, rankings, routes, values, or instructions are unconfirmed."
  },
  {
    "keyword": "sephiria wiki",
    "slug": "sephiria-wiki",
    "category": "guide",
    "title": "Sephiria Wiki: Verified Game Facts & Player Guide",
    "description": "Sephiria wiki facts from supplied research: review the developer, genre, platforms, release dates, content counts, co-op details, and clearly marked unknowns.",
    "answer": "sephiria wiki can be answered only at a high level from the supplied Sephiria research; keyword-specific names, rankings, routes, values, or instructions are unconfirmed."
  },
  {
    "keyword": "sephiria weapons",
    "slug": "sephiria-weapons",
    "category": "weapons",
    "title": "Sephiria Weapons: Branches, Upgrades & Facts",
    "description": "Sephiria weapons facts from supplied research: see confirmed branch and upgrade counts, system context, and names, effects, or rankings that need confirmation.",
    "answer": "sephiria weapons can be answered only at a high level from the supplied Sephiria research; keyword-specific names, rankings, routes, values, or instructions are unconfirmed."
  },
  {
    "keyword": "sephiria grimoire",
    "slug": "sephiria-grimoire",
    "category": "weapons",
    "title": "Sephiria Grimoire: Confirmed System Facts & Guide",
    "description": "Sephiria grimoire information from supplied research: understand build context and content scale without inventing names, effects, unlocks, or rankings.",
    "answer": "sephiria grimoire can be answered only at a high level from the supplied Sephiria research; keyword-specific names, rankings, routes, values, or instructions are unconfirmed."
  },
  {
    "keyword": "sephiria tier list",
    "slug": "sephiria-tier-list",
    "category": "weapons",
    "title": "Sephiria Tier List: What Is Confirmed So Far",
    "description": "Sephiria tier list research with a direct answer: no verified ranking is supplied, so this page separates confirmed facts from unconfirmed tier placements.",
    "answer": "sephiria tier list can be answered only at a high level from the supplied Sephiria research; keyword-specific names, rankings, routes, values, or instructions are unconfirmed."
  },
  {
    "keyword": "sephiria builds",
    "slug": "sephiria-builds",
    "category": "builds",
    "title": "Sephiria Builds: Confirmed Systems and Facts",
    "description": "Sephiria builds information from verified research: review weapons, artifacts, tablets, synergies, co-op context, and build details pending confirmation.",
    "answer": "sephiria builds can be answered only at a high level from the supplied Sephiria research; keyword-specific names, rankings, routes, values, or instructions are unconfirmed."
  },
  {
    "keyword": "sephiria destiny inscription",
    "slug": "sephiria-destiny-inscription",
    "category": "builds",
    "title": "Sephiria Destiny Inscription: Facts & Status",
    "description": "Sephiria destiny inscription information from supplied research: find the direct status, related systems, and details not verified in the current materials.",
    "answer": "sephiria destiny inscription can be answered only at a high level from the supplied Sephiria research; keyword-specific names, rankings, routes, values, or instructions are unconfirmed."
  },
  {
    "keyword": "sephiria coop",
    "slug": "sephiria-coop",
    "category": "coop",
    "title": "Sephiria Coop: Four-Player Online Facts & Guide",
    "description": "Sephiria coop is confirmed for online play with up to four players; this page explains the scope and marks missing team systems and setup details unconfirmed.",
    "answer": "Yes. The supplied research confirms online co-op for up to 4 players."
  },
  {
    "keyword": "sephiria secret rooms",
    "slug": "sephiria-secret-rooms",
    "category": "secret rooms",
    "title": "Sephiria Secret Rooms: Confirmed Facts & Unknowns",
    "description": "Sephiria secret rooms research: see what sources confirm about runs and exploration, while room locations, triggers, rewards, and routes remain unconfirmed.",
    "answer": "sephiria secret rooms can be answered only at a high level from the supplied Sephiria research; keyword-specific names, rankings, routes, values, or instructions are unconfirmed."
  },
  {
    "keyword": "sephiria elru",
    "slug": "sephiria-elru",
    "category": "characters",
    "title": "Sephiria Elru: Search Facts & Confirmation Status",
    "description": "Sephiria Elru information from supplied research: review game context and see which character identity, role, abilities, and story details need confirmation.",
    "answer": "sephiria elru can be answered only at a high level from the supplied Sephiria research; keyword-specific names, rankings, routes, values, or instructions are unconfirmed."
  },
  {
    "keyword": "sephiria costumes",
    "slug": "sephiria-costumes",
    "category": "costumes",
    "title": "Sephiria Costumes: Confirmed Cosmetic Information",
    "description": "Sephiria costumes information here: see what is confirmed and why costume names, availability, effects, and unlock requirements are unconfirmed.",
    "answer": "sephiria costumes can be answered only at a high level from the supplied Sephiria research; keyword-specific names, rankings, routes, values, or instructions are unconfirmed."
  },
  {
    "keyword": "sephiria mods",
    "slug": "sephiria-mods",
    "category": "mods",
    "title": "Sephiria Mods: Official Support Status & Facts",
    "description": "Sephiria mods status from supplied research: check platforms and official links, while mod support, tools, installation, and compatibility remain unconfirmed.",
    "answer": "sephiria mods can be answered only at a high level from the supplied Sephiria research; keyword-specific names, rankings, routes, values, or instructions are unconfirmed."
  },
  {
    "keyword": "sephiria switch",
    "slug": "sephiria-switch",
    "category": "platforms",
    "title": "Sephiria Switch: Official Platform Status",
    "description": "Sephiria Switch status: supplied research confirms Steam, Windows, and macOS, but does not confirm a Nintendo Switch release or planned launch date.",
    "answer": "Switch availability is unconfirmed. The supplied research confirms Steam, Windows and macOS, but does not confirm a Nintendo Switch release."
  },
  {
    "keyword": "sephiria reddit",
    "slug": "sephiria-reddit",
    "category": "community",
    "title": "Sephiria Reddit: Community Link & Research Status",
    "description": "Sephiria Reddit information from supplied research: use the community link while treating subreddit activity, consensus, guides, and rankings as unverified.",
    "answer": "sephiria reddit can be answered only at a high level from the supplied Sephiria research; keyword-specific names, rankings, routes, values, or instructions are unconfirmed."
  },
  {
    "keyword": "sephiria review",
    "slug": "sephiria-review",
    "category": "review",
    "title": "Sephiria Review: Verified Facts & Review Context",
    "description": "Sephiria review context from research: brief records 93% positive recent reviews, while dynamic Steam values need checking before they are called current.",
    "answer": "The supplied brief records 93% Positive Recent Reviews, but this dynamic value should be rechecked on Steam."
  },
  {
    "keyword": "sephiria 1.0",
    "slug": "sephiria-1-0",
    "category": "updates",
    "title": "Sephiria 1.0: Release Date & Update Facts",
    "description": "Sephiria 1.0 facts from supplied research: the brief records a full release on July 31, 2026 and an August 7, 2026 update; the changelog is unconfirmed.",
    "answer": "The supplied brief records Full Release: Jul 31, 2026, with Latest Update: Aug 7, 2026; a full 1.0 changelog is unconfirmed."
  }
]

export function getKeywordPage(slug: string) {
  return keywordPages.find((page) => page.slug === slug)
}

export function keywordMetadata(page: KeywordPage, locale: Locale = 'en'): Metadata {
  return pageMetadata({
    title: page.title,
    description: page.description,
    path: `/guides/${page.slug}`,
    locale,
    index: locale === 'en' && isKeywordIndexable(page.slug),
    keywords: [page.keyword, 'Sephiria', 'wiki'],
  })
}
