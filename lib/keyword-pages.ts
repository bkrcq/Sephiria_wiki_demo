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
  aliases?: string[]
  faqs?: { question: string; answer: string }[]
}

const lowValueKeywordSlugs = new Set([
  'sephiria-costumes',
  'sephiria-destiny-inscription',
  'sephiria-elru',
  'sephiria-mods',
  'sephiria-reddit',
  'sephiria-secret-rooms',
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
    "title": "Is Sephiria on Nintendo Switch? Release Date & Platform Status",
    "description": "Is Sephiria coming to Nintendo Switch? Check the official platform status, whether a Switch release date or eShop page exists, and where to watch for confirmed news.",
    "answer": "As of August 24, 2026, Sephiria's official Steam listing confirms its Steam release but does not list Nintendo Switch or a Switch release date. No official Switch announcement or eShop page was identified in the sources checked.",
    "aliases": ["sephiria nintendo switch", "sephiria switch release date", "is sephiria on switch"],
    "faqs": [
      { "question": "Is Sephiria on Nintendo Switch?", "answer": "No Nintendo Switch version is listed on Sephiria's official Steam page as of August 24, 2026." },
      { "question": "What is the Sephiria Switch release date?", "answer": "No official Nintendo Switch release date was identified in the Steam listing, Steam update history, or official developer links checked on August 24, 2026." },
      { "question": "Is there a Sephiria Nintendo eShop page?", "answer": "No official Nintendo eShop page was identified in the sources checked on August 24, 2026." }
    ]
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
  },
  {
    "keyword": "sephiria roadmap",
    "slug": "sephiria-roadmap",
    "category": "guide",
    "title": "Sephiria Roadmap: Updates, Patches & Official Plans",
    "description": "Check Sephiria's official release and update record, where to find patch notes, and whether TEAM HORAY has announced a public roadmap.",
    "answer": "Sephiria released on Steam on July 31, 2026. Its Steam listing links to update history, but no dated long-term public roadmap was identified in the official sources checked on August 24, 2026.",
    "aliases": ["sephiria updates", "sephiria patch notes"],
    "faqs": [
      { "question": "When did Sephiria release?", "answer": "Sephiria's official Steam listing gives July 31, 2026 as its release date." },
      { "question": "Does Sephiria have an official roadmap?", "answer": "No dated long-term public roadmap was identified in the official sources checked on August 24, 2026." },
      { "question": "Where can I check Sephiria patch notes?", "answer": "Use Sephiria's Steam update history and Steam Community hub for current developer announcements." }
    ]
  },
  {
    "keyword": "sephiria puzzle",
    "slug": "sephiria-puzzle",
    "category": "guide",
    "title": "Sephiria Puzzle Guide: Verified Status & Research",
    "description": "Looking for Sephiria puzzle solutions or locations? See the confirmed game context, what has not been documented by official sources, and where to verify new discoveries.",
    "answer": "No official puzzle list, solution guide, locations, or rewards were identified in the sources checked on August 24, 2026. This page separates verified game systems from player-reported puzzle details.",
    "aliases": ["sephiria puzzle guide", "sephiria puzzle solutions"],
    "faqs": [
      { "question": "Is there an official Sephiria puzzle guide?", "answer": "No official puzzle list or solution guide was identified in the sources checked on August 24, 2026." },
      { "question": "Are Sephiria puzzle locations confirmed?", "answer": "Official sources checked for this page did not document a verified puzzle-location list or reward table." }
    ]
  },
  {
    "keyword": "sephiria how many chapters",
    "slug": "sephiria-how-many-chapters",
    "category": "guide",
    "title": "Sephiria How Many Chapters? Confirmed Count",
    "description": "Sephiria how many chapters has a direct research answer: the brief records six chapters, while names, order, bosses, and unlock details remain unconfirmed.",
    "answer": "The supplied research records 6 chapters in Sephiria, but it does not provide a verified chapter list, order, or unlock guide."
  },
  {
    "keyword": "sephiria secrets",
    "slug": "sephiria-secrets",
    "category": "guide",
    "title": "Sephiria Secrets: Confirmed Facts & Unknowns",
    "description": "Sephiria secrets coverage from research: understand the run-based game while secret rooms, hidden items, triggers, and reward routes remain unconfirmed.",
    "answer": "The supplied research confirms exploration and random discoveries but does not document a verified list of Sephiria secrets."
  },
  {
    "keyword": "sephiria upgrade tree",
    "slug": "sephiria-upgrade-tree",
    "category": "weapons",
    "title": "Sephiria Upgrade Tree: 6 Weapon Branches & 200+ Upgrades",
    "description": "Sephiria's official Steam information confirms six weapon branches and more than 200 upgrades. Find the verified scope and what is still needed for a complete upgrade-tree map.",
    "answer": "Official Steam information confirms six weapon branches with more than 200 upgrades. A complete node-by-node upgrade tree, costs, and best routes were not identified in the sources checked on August 24, 2026.",
    "aliases": ["sephiria weapon upgrade tree", "sephiria weapon upgrades"],
    "faqs": [
      { "question": "How many weapon branches are in Sephiria?", "answer": "Official Steam information describes six weapon branches." },
      { "question": "How many upgrades does Sephiria have?", "answer": "Official Steam information describes more than 200 upgrades." },
      { "question": "Is there a complete Sephiria upgrade tree map?", "answer": "A verified node-by-node map, including costs and routes, was not identified in the official sources checked on August 24, 2026." }
    ]
  },
  {
    "keyword": "sephiria best weapon",
    "slug": "sephiria-best-weapon",
    "category": "weapons",
    "title": "Sephiria Best Weapon: Confirmed Facts Guide",
    "description": "Sephiria best weapon guidance from research: compare the confirmed weapon system and build factors without inventing a tier list or strongest choice today.",
    "answer": "No single best Sephiria weapon is verified by the supplied research; it confirms six branches and more than 200 upgrades."
  },
  {
    "keyword": "sephira weapons",
    "slug": "sephira-weapons",
    "category": "weapons",
    "title": "Sephira Weapons: Search Variant & Facts Guide",
    "description": "Sephira weapons is a search variant for Sephiria weapons; this page covers the confirmed scope while names, effects, and rankings remain unconfirmed today.",
    "answer": "The supplied research confirms Sephiria weapon systems, even when the search is written as ?sephira weapons,? but not a complete weapon catalogue."
  },
  {
    "keyword": "sephiria artifact",
    "slug": "sephiria-artifact",
    "category": "weapons",
    "title": "Sephiria Artifacts: 300-Item Scope & Bond Artifacts Status",
    "description": "Official Sephiria information describes about 300 artifacts. Check the verified artifact scope and whether 'Bond Artifacts' is a documented official system.",
    "answer": "Official Steam information describes about 300 artifacts in Sephiria. A complete item catalogue and an official system specifically named 'Bond Artifacts' were not identified in the sources checked on August 24, 2026.",
    "aliases": ["bond artifacts sephiria", "sephiria bond artifacts", "sephiria artifacts"],
    "faqs": [
      { "question": "How many artifacts are in Sephiria?", "answer": "Official Steam information describes about 300 artifacts." },
      { "question": "Are Bond Artifacts an official Sephiria system?", "answer": "An official system specifically named Bond Artifacts was not identified in the sources checked on August 24, 2026." },
      { "question": "Where can I find a complete Sephiria artifact list?", "answer": "A complete official item catalogue with effects and drop sources was not identified in the sources checked for this page." }
    ]
  },
  {
    "keyword": "aiba sephiria",
    "slug": "aiba-sephiria",
    "category": "characters",
    "title": "Aiba Sephiria: Character Search Status",
    "description": "Searching for Aiba in Sephiria? Review what the official sources identify, what they do not confirm about this character query, and how to verify future information.",
    "answer": "The official Sephiria sources checked on August 24, 2026 did not identify a verified Aiba character profile, role, abilities, or story entry. This page avoids treating the search term itself as confirmation.",
    "aliases": ["sephiria aiba", "aiba character sephiria"],
    "faqs": [
      { "question": "Who is Aiba in Sephiria?", "answer": "The official Sephiria sources checked on August 24, 2026 did not identify a verified Aiba character profile." },
      { "question": "Is Aiba a playable Sephiria character?", "answer": "No official source checked for this page confirmed Aiba as a playable character, NPC, or story character." }
    ]
  },
  {
    "keyword": "sephiria all characters",
    "slug": "sephiria-all-characters",
    "category": "characters",
    "title": "Sephiria All Characters: Roster Status Guide",
    "description": "Sephiria all characters coverage from research: review the player premise while character names, roster size, roles, and unlocks remain unconfirmed today.",
    "answer": "The supplied research does not provide a complete, verified Sephiria character roster."
  },
  {
    "keyword": "sephiria discord",
    "slug": "sephiria-discord",
    "category": "community",
    "title": "Sephiria Discord: Official Community Entry",
    "description": "Sephiria Discord guidance from research: use the pinned Steam discussion as the stable entry while invite links, channels, and server details stay unconfirmed.",
    "answer": "The supplied research points to a developer-pinned Steam discussion as the stable Discord entry, but does not verify server channels or invite details."
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
    keywords: [page.keyword, ...(page.aliases || []), 'Sephiria', 'wiki'],
  })
}
