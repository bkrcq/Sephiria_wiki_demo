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
    "title": "Sephiria Guide: Beginner Facts, Builds & Co-op",
    "description": "Sephiria guide for beginners: learn the verified game premise, Steam release, core systems, co-op scope, and facts that remain unconfirmed today.",
    "answer": "sephiria guide can be answered only at a high level from the supplied Sephiria research; keyword-specific names, rankings, routes, values, or instructions are unconfirmed."
  },
  {
    "keyword": "sephiria wiki",
    "slug": "sephiria-wiki",
    "category": "guide",
    "title": "Sephiria Wiki: Game Facts, Builds & Guides",
    "description": "Sephiria wiki overview: check developer, platforms, release dates, content counts, co-op facts, and source-backed game guides for players today.",
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
    "title": "Sephiria Grimoire Guide: Builds, Upgrades & Facts",
    "description": "Sephiria Grimoire guide for build planning, upgrades, weapons, artifacts, and tablets, with unknown item details clearly marked as unconfirmed today.",
    "answer": "The official research confirms Sephiria's build systems, but it does not define Grimoire entries, effects, or upgrade rules; those details remain unconfirmed.",
    "aliases": ["sephiria grimoire build", "grimoire build sephiria", "sephira grimoire"],
    "faqs": [
      { "question": "What is the Sephiria Grimoire?", "answer": "The available research does not define a verified Grimoire catalogue or separate Grimoire progression system." },
      { "question": "Can I find a confirmed Sephiria Grimoire build?", "answer": "No universal Grimoire build is confirmed. Track weapons, artifacts, tablets, run conditions, and game version before calling a build reliable." },
      { "question": "Are Grimoire item effects confirmed?", "answer": "Specific names, effects, rarity, acquisition routes, and upgrade rules remain unconfirmed in the current sources." }
    ]
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
    "title": "Sephiria Coop: Online Multiplayer for 4 Players",
    "description": "Sephiria coop guide: online multiplayer supports up to four players; check the verified scope and unconfirmed invite, cross-play, and progression details.",
    "answer": "Yes. Sephiria supports online co-op for up to four players according to the supplied research.",
    "aliases": ["sephiria co op", "sephiria online multiplayer", "sephiria 4 player co op"],
    "faqs": [
      { "question": "How many players can play Sephiria co-op?", "answer": "The supplied research confirms online co-op for up to four players." },
      { "question": "Is Sephiria co-op online or local?", "answer": "The research confirms online co-op, but it does not establish local multiplayer, matchmaking, or lobby steps." },
      { "question": "Does Sephiria support cross-play?", "answer": "Cross-play and platform compatibility are not confirmed by the current primary sources." },
      { "question": "How do I invite players to Sephiria co-op?", "answer": "Invitation and lobby procedures are not documented in the supplied research; check current official Steam announcements." }
    ]
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
    "title": "Sephiria Switch: Nintendo Release Status & FAQ",
    "description": "Sephiria switch status: see current Nintendo evidence, Steam platform details, and release-date information without guesswork today or later.",
    "answer": "Official sources checked on August 24, 2026 found no Nintendo Switch version or release date for Sephiria. The official listing confirms the Steam release and does not list Switch.",
    "aliases": ["sephiria nintendo switch", "sephiria switch release date", "is sephiria on switch", "sephiria console", "sephiria switch 2", "sephiria mobile"],
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
    "description": "Sephiria roadmap status: review the July 31, 2026 release, update history, and whether a dated long-term public roadmap was identified in official sources.",
    "answer": "Sephiria released on Steam on July 31, 2026. Official sources checked on August 24, 2026 show an update history but no dated long-term public roadmap.",
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
    "title": "Sephiria Puzzle Guide: Ark, Tablet & Solutions",
    "description": "Sephiria puzzle guide for Ark, tablet, and exploration searches: see documented facts, then verify locations, steps, and rewards in the game.",
    "answer": "No complete official Sephiria puzzle list or solution guide was identified in sources checked on August 24, 2026. Puzzle locations, steps, and rewards remain unconfirmed.",
    "aliases": ["sephiria puzzle guide", "sephiria puzzle solutions", "sephiria ark puzzle", "ark exploration sephiria", "sephiria align the tablet"],
    "faqs": [
      { "question": "Is there an official Sephiria puzzle guide?", "answer": "No official puzzle list or solution guide was identified in the sources checked on August 24, 2026." },
      { "question": "Are Sephiria puzzle locations confirmed?", "answer": "Official sources checked for this page did not document a verified puzzle-location list or reward table." },
      { "question": "What should I record for a Sephiria puzzle solution?", "answer": "Record the chapter or room, trigger, input order, game version, and evidence of the result before treating a solution as confirmed." }
    ]
  },
  {
    "keyword": "sephiria how many chapters",
    "slug": "sephiria-how-many-chapters",
    "category": "guide",
    "title": "Sephiria How Many Chapters? 6 Chapters Explained",
    "description": "Sephiria how many chapters? The verified count is 6; chapter names, order, bosses, routes, and unlock requirements need source confirmation.",
    "answer": "Official research records 6 chapters in Sephiria, but it does not provide a verified chapter list, order, or unlock guide.",
    "aliases": ["how many chapters in sephiria", "how many chapters are in sephiria", "sephiria chapter count"],
    "faqs": [
      { "question": "How many chapters are in Sephiria?", "answer": "Official research records 6 chapters in Sephiria." },
      { "question": "Are the Sephiria chapter names and order confirmed?", "answer": "The available research does not provide a verified chapter-by-chapter list, names, order, bosses, or unlock requirements; those details remain unconfirmed." },
      { "question": "Does Hard Mode add more Sephiria chapters?", "answer": "The research records a 60-level Hard Mode but does not say that it adds chapters; that relationship remains unconfirmed." }
    ]
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
    "title": "Sephiria Upgrade Tree: 6 Branches & 200+ Upgrades",
    "description": "Sephiria upgrade tree facts: six branches and 200+ upgrades are described; a complete node-by-node map remains unconfirmed in current sources.",
    "answer": "Official research describes six weapon branches and more than 200 upgrades. A complete node-by-node upgrade tree, costs, and best routes remain unconfirmed.",
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
    "title": "Sephiria Artifact Guide: 300-Item Status",
    "description": "Sephiria artifact status: about 300 are described, but a complete list, effects, and Bond Artifacts system remain unconfirmed in current sources.",
    "answer": "Official research describes about 300 artifacts in Sephiria. A complete item catalogue and an official system named Bond Artifacts remain unconfirmed.",
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
    "title": "Aiba Sephiria: Character Status & Search Facts",
    "description": "Aiba Sephiria status: official sources did not verify a character profile, role, abilities, story entry, or playable status in current research.",
    "answer": "Official sources checked on August 24, 2026 do not verify an Aiba character profile, role, abilities, or story entry in Sephiria.",
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
    "title": "Sephiria Discord: Official Server Link & Join Guide",
    "description": "Sephiria Discord join guide: use the developer-pinned Steam discussion as the stable entry, while invite links and server details remain unconfirmed.",
    "answer": "Official research points to a developer-pinned Steam discussion as the stable Sephiria Discord entry. Invite links, channels, and current server details remain unconfirmed.",
    "faqs": [
      { "question": "How do I join the Sephiria Discord?", "answer": "Use the developer-pinned Steam discussion as the stable entry point and follow the current community link shown there." },
      { "question": "Is the Sephiria Discord invite link confirmed?", "answer": "The stable Steam discussion entry is supported by the research, but a current invite URL, server channels, and moderation details remain unconfirmed." },
      { "question": "Where should I check Sephiria community announcements?", "answer": "Start with the developer-pinned Steam discussion and the official Steam Community hub; verify the date before relying on a community detail." }
    ]
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
