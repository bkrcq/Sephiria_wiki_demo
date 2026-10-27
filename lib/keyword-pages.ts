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
  /** Date when this page's visible content or SEO presentation was last reviewed. */
  updatedAt?: string
}

const lowValueKeywordSlugs = new Set([
  'aiba-sephiria',
  'sephiria-destiny-inscription',
  'sephiria-discord',
  'sephiria-elru',
  'sephiria-mods',
  'sephiria-reddit',
  // Restored to indexable on 2026-10-21 after full real-data rewrites:
  // sephiria-costumes, sephiria-secret-rooms, sephiria-tier-list.
  // Merged into static canonical pages on 2026-10-21 (301 in next.config.mjs);
  // excluded here so they leave the sitemap, guide index, and related links.
  'sephira-weapons',
  'sephiria-artifact',
  'sephiria-coop',
  'sephiria-grimoire',
  'sephiria-secrets',
  'sephiria-weapons',
  'sephiria-wiki',
])

export function isKeywordIndexable(slug: string) {
  return !lowValueKeywordSlugs.has(slug)
}
export const keywordPages: KeywordPage[] = [
  {
    "keyword": "sephiria guide",
    "slug": "sephiria-guide",
    "category": "guide",
    "updatedAt": "2026-10-21",
    "title": "Sephiria Beginner Guide: Builds, Weapons & Co-op",
    "description": "Sephiria beginner guide with confirmed facts: the Bunnyville premise, 6 chapters, 6 weapon branches, artifacts and tablets, Talents, Training Grounds, and 4-player online co-op.",
    "answer": "Sephiria is TEAM HORAY's top-down action roguelite: a bunny climbs a tower across 6 chapters to save Bunnyville from a prophesied slaughter. This guide collects the confirmed starting facts - six weapon branches, about 300 artifacts, 70 tablets, Talents unlocked per run, and online co-op for up to 4 players."
  },
  {
    "keyword": "sephiria wiki",
    "slug": "sephiria-wiki",
    "category": "guide",
    "updatedAt": "2026-09-06",
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
    "updatedAt": "2026-09-06",
    "title": "Sephiria Grimoire Guide: Grimoires, Builds & Upgrades",
    "description": "Sephiria Grimoire and grimoires guide: review build planning, upgrades, weapons, artifacts, and tablets without inventing unverified item details.",
    "answer": "The official research confirms Sephiria's build systems, but it does not define Grimoire entries, effects, or upgrade rules; those details remain unconfirmed.",
    "aliases": ["sephiria grimoire build", "grimoire build sephiria", "sephiria grimoires", "sephira grimoire"],
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
    "updatedAt": "2026-10-21",
    "title": "Sephiria Tier List: What Is Confirmed So Far",
    "description": "Is there an official Sephiria tier list? No - but the six weapon branches now have dated patch-note histories. See what can be compared honestly and what a real tier list would require.",
    "answer": "TEAM HORAY has not published an official tier list, and no reproducible community ranking with stated test conditions exists yet. What can be compared honestly is documented scope: six weapon branches, their unlock methods, and their dated update histories, which this page summarizes."
  },
  {
    "keyword": "sephiria builds",
    "slug": "sephiria-builds",
    "category": "builds",
    "updatedAt": "2026-10-21",
    "title": "Sephiria Builds: Confirmed Systems and Facts",
    "description": "How Sephiria builds actually combine: six weapon branches, artifacts and tablets in the inventory grid, Talents, Miracles, item combos, and animal synergies - all from official sources.",
    "answer": "A Sephiria build combines one of six weapon branches (Sword and Shield, Dagger, Greatsword, Crossbow, Blade, Staff), artifacts and tablets arranged in the inventory, Talents, Miracles, and item combos. This page documents each confirmed layer and the combinations named in official patch notes."
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
    "updatedAt": "2026-09-06",
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
    "updatedAt": "2026-10-21",
    "title": "Sephiria Secret Rooms: Confirmed Facts & Unknowns",
    "description": "Sephiria hidden rooms are confirmed by official patch notes: cracks in the Library, rooms in Rooted Cave and Chapter 4's Woodlands, and the Mystic Pot that turns artifacts into tablets.",
    "answer": "Hidden rooms are confirmed by TEAM HORAY's patch notes: they appear in stages such as the Library (entered through cracks) and Rooted Cave, in Chapter 4 Woodlands events, and they can hold the Mystic Pot, which converts artifacts into a Tablet."
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
    "updatedAt": "2026-10-21",
    "title": "Sephiria Costumes: Confirmed Cosmetic Information",
    "description": "Sephiria has over 20 costumes. Documented facts: costume effects and starting items, appearance variants for 7 costumes (1.0.24), a Chapter 1 costume unlock, and the June 2025 appearance system.",
    "answer": "Sephiria has over 20 costumes, per the 1.0 launch announcement. They are not purely cosmetic in the documented record: patch notes describe costume effects, starting items granted by a costume, appearance variants added to 7 costumes in update 1.0.24, and at least one costume unlocked in Chapter 1."
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
    "updatedAt": "2026-10-21",
    "title": "Is Sephiria on Nintendo Switch? Status, Rumors & Switch-Only Options",
    "description": "No official Switch version or date yet — but see which rumors to ignore, how to spot a real announcement, and what Switch-only players can do now.",
    "answer": "No Nintendo Switch version or release date has been announced. The official Steam listing checked on October 21, 2026 confirms Sephiria for Windows and macOS only, and does not list Switch.",
    "aliases": ["sephiria nintendo switch", "sephiria switch release date", "is sephiria on switch", "sephiria console", "sephiria console release", "sephiria game switch", "sephiria switch 2", "sephiria mobile"],
    "faqs": [
      { "question": "Is Sephiria on Nintendo Switch?", "answer": "No Nintendo Switch version is listed on Sephiria's official Steam page as of October 21, 2026. The confirmed platforms are Windows and macOS." },
      { "question": "What is the Sephiria Switch release date?", "answer": "No official Nintendo Switch release date exists, because no Switch version has been announced by TEAM HORAY, Steam, or Nintendo." },
      { "question": "Is there a Sephiria Nintendo eShop page?", "answer": "No official Nintendo eShop page was identified in the sources checked on October 21, 2026." },
      { "question": "Is Sephiria coming to Switch 2?", "answer": "No Switch 2 version has been announced either. Wait for a statement from TEAM HORAY, Steam, or Nintendo that names the platform, timing, and store destination." },
      { "question": "Will my Steam progress transfer to Switch if a port appears?", "answer": "Cross-save and cross-play are unconfirmed. A future port announcement would need to state explicitly whether progress transfers; do not assume it." },
      { "question": "What does a genuine Switch announcement look like?", "answer": "It names the platform, the timing, and a store destination, and it comes from TEAM HORAY, Steam, or Nintendo — not only from a rumor account or a retailer placeholder." }
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
    "updatedAt": "2026-10-21",
    "title": "Sephiria Review: Verified Facts & Review Context",
    "description": "Sephiria review snapshot checked October 21, 2026: 'Very Positive' on Steam with 12,746 positive reviews out of 13,485 total (about 95%), plus price and reception context.",
    "answer": "As of October 21, 2026, Sephiria's all-time Steam rating is Very Positive: 12,746 positive reviews out of 13,485 total (about 95%). This page records that dated snapshot instead of quoting a score without a check date."
  },
  {
    "keyword": "sephiria 1.0",
    "slug": "sephiria-1-0",
    "category": "updates",
    "updatedAt": "2026-10-21",
    "title": "Sephiria 1.0: Release Date & Update Facts",
    "description": "Sephiria 1.0 launched July 31, 2026: Chapter 6, the ending, 3 Miracles, 19 artifacts, 7 tablets, and an Early Access badge. Post-launch patches ran through 1.0.33 (September 11, 2026).",
    "answer": "Sephiria 1.0 launched on July 31, 2026, adding Chapter 6, the game ending, 3 new Miracles (Angler, Electromancer, Flame Sword), 19 artifacts, and 7 tablets. Post-launch updates continued through 1.0.33 on September 11, 2026."
  },
  {
    "keyword": "sephiria roadmap",
    "slug": "sephiria-roadmap",
    "category": "guide",
    "updatedAt": "2026-10-21",
    "title": "Sephiria Roadmap: Updates, Patch Notes & Official Plans",
    "description": "Sephiria's dated record: Early Access April 2025, Chapters 3-6 added August 2025 to July 2026, 1.0 launch July 31, 2026, patches through 1.0.33, and the September 2026 price change.",
    "answer": "Sephiria's documented record runs from Early Access (April 2025) through the 1.0 launch (July 31, 2026) and post-launch patches up to 1.0.33 (September 11, 2026). No dated long-term future roadmap has been published.",
    "aliases": ["sephiria updates", "sephiria patch notes", "sephiria roadmap update"],
    "faqs": [
      { "question": "When did Sephiria release?", "answer": "Sephiria's official Steam listing gives July 31, 2026 as its release date." },
      { "question": "Does Sephiria have an official roadmap?", "answer": "No dated long-term public roadmap was identified in the official sources checked on October 21, 2026. The developer communicates through dated Steam patch notes instead." },
      { "question": "What is the latest Sephiria update?", "answer": "Update 1.0.33, released September 11, 2026, per the official Steam news feed checked on October 21, 2026." },
      { "question": "Where can I check Sephiria patch notes?", "answer": "Use Sephiria's Steam update history and Steam Community hub for current developer announcements." }
    ]
  },
  {
    "keyword": "sephiria puzzle",
    "slug": "sephiria-puzzle",
    "category": "guide",
    "updatedAt": "2026-10-21",
    "title": "Sephiria Puzzle Guide: All Solutions & Locations",
    "description": "Sephiria puzzle solutions: review evidence for locations, steps, Ark or tablet searches, and rewards before trusting an unverified route today.",
    "answer": "No standalone puzzle system or official puzzle list is documented for Sephiria. The one puzzle element named in official patch notes is the Ark quest, whose puzzle items were repriced to 0 in update 1.0.23 (August 4, 2026).",
    "aliases": ["sephiria puzzle guide", "sephiria puzzle solutions", "sephiria puzzle locations", "sephiria ark puzzle", "ark exploration sephiria", "sephiria align the tablet"],
    "faqs": [
      { "question": "Is there an official Sephiria puzzle guide?", "answer": "No official puzzle list or solution guide was identified in the sources checked on October 21, 2026. The Ark quest is the only puzzle element named in official patch notes." },
      { "question": "Are Sephiria puzzle locations confirmed?", "answer": "Official sources checked for this page did not document a verified puzzle-location list or reward table." },
      { "question": "What should I record for a Sephiria puzzle solution?", "answer": "Record the chapter or room, trigger, input order, game version, and evidence of the result before treating a solution as confirmed." },
      { "question": "How do I know if a puzzle tip is trustworthy?", "answer": "A trustworthy tip states a precise claim, names its setup, includes a game version, and has been tested more than once — including a control case when an item is involved. Tips without those elements are unconfirmed." },
      { "question": "Why doesn't this page list puzzle solutions?", "answer": "Because no puzzle list could be verified against official sources or reproducible in-game evidence. The page gives you the method to find and verify real ones instead of a list of invented steps." },
      { "question": "Do patches change puzzle interactions?", "answer": "They can. Always check the official Steam update history and retest a solution after a patch before relying on it." }
    ]
  },
  {
    "keyword": "sephiria how many chapters",
    "slug": "sephiria-how-many-chapters",
    "category": "guide",
    "updatedAt": "2026-10-21",
    "title": "How Many Chapters in Sephiria? Full Chapter List",
    "description": "Sephiria has 6 chapters. See the full chapter list with the update that added each chapter (3 in Aug 2025, 4 in Dec 2025, 5 in Mar 2026, 6 at 1.0), documented bosses, and locations.",
    "answer": "Sephiria has 6 chapters, per the Steam store description and TEAM HORAY's 1.0 launch announcement. Chapters 3, 4, 5, and 6 were added one at a time in updates 0.8.3, 0.10.0, 0.11.0, and version 1.0 (July 31, 2026).",
    "aliases": ["how many chapters in sephiria", "how many chapters are in sephiria", "sephiria chapter count"],
    "faqs": [
      { "question": "How many chapters are in Sephiria?", "answer": "Six chapters, confirmed by the Steam store description and the 1.0 launch announcement." },
      { "question": "When was the last chapter added?", "answer": "Chapter 6 arrived with version 1.0 on July 31, 2026, together with the game's ending." },
      { "question": "Does Hard Mode add more Sephiria chapters?", "answer": "No. Hard Mode is a separate challenge structure (18 elements at 1.0) layered on the same six chapters." }
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
    "updatedAt": "2026-10-21",
    "title": "Sephiria Upgrade Tree: 6 Branches & 200+ Upgrades",
    "description": "Sephiria upgrade tree facts: six branches and 200+ upgrades are described; a complete node-by-node map remains unconfirmed in current sources.",
    "answer": "Sephiria has six weapon branches - Sword and Shield, Dagger, Greatsword, Crossbow, Blade, and Staff - with more than 200 upgrades in total and over 50 per weapon. A complete node-by-node map is not published officially, but patch notes document many individual named upgrades, collected on this page by branch.",
    "aliases": ["sephiria weapon upgrade tree", "sephiria weapon upgrades"],
    "faqs": [
      { "question": "How many weapon branches are in Sephiria?", "answer": "Six: Sword and Shield, Dagger, Greatsword, Crossbow, Blade, and Staff, per the Steam store description and TEAM HORAY patch notes." },
      { "question": "How many upgrades does Sephiria have?", "answer": "Official Steam information describes more than 200 upgrades." },
      { "question": "Is there a complete Sephiria upgrade tree map?", "answer": "A verified node-by-node map, including costs and routes, was not identified in the official sources checked on October 14, 2026." },
      { "question": "What is the best upgrade route?", "answer": "No universal best route is established. Plan by run goal, commit to one branch, spend on the bottleneck that actually ends your runs, and change one thing per run." },
      { "question": "How do I record an upgrade node reliably?", "answer": "Record the branch, the node name exactly as shown in-game, the observed effect, the cost or requirement, the prerequisite (or unconfirmed), the game version, and your evidence." },
      { "question": "Do patches change the upgrade tree?", "answer": "They can. Patch notes may add, remove, or rebalance upgrades, which is why every upgrade note should carry a game-version stamp and be retested after a patch." }
    ]
  },
  {
    "keyword": "sephiria best weapon",
    "slug": "sephiria-best-weapon",
    "category": "weapons",
    "updatedAt": "2026-10-21",
    "title": "Sephiria Best Weapon: Confirmed Facts Guide",
    "description": "Which Sephiria weapon is best? Compare the six documented branches - Sword and Shield, Dagger, Greatsword, Crossbow, Blade, Staff - on role, unlock method, and update history.",
    "answer": "No official source names a single best weapon, but the six branches are fully documented: Sword and Shield, Dagger, Greatsword, Crossbow, Blade, and Staff, each with over 50 upgrades. This page compares them on documented role and unlock facts instead of inventing a winner."
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
    "updatedAt": "2026-09-06",
    "title": "Sephiria Artifact Guide: 300-Item Status",
    "description": "Sephiria artifact status: about 300 are described, but a complete list, effects, and Bond Artifacts system remain unconfirmed in current sources.",
    "answer": "Official research describes about 300 artifacts in Sephiria. A complete item catalogue and an official system named Bond Artifacts remain unconfirmed.",
    "aliases": ["bond artifacts sephiria", "sephiria bond artifacts", "sephiria artifacts"],
    "faqs": [
      { "question": "How many artifacts are in Sephiria?", "answer": "Official Steam information describes about 300 artifacts." },
      { "question": "Are Bond Artifacts an official Sephiria system?", "answer": "An official system specifically named Bond Artifacts was not identified in the sources checked on October 14, 2026." },
      { "question": "Where can I find a complete Sephiria artifact list?", "answer": "A complete official item catalogue with effects and drop sources was not identified in the sources checked for this page." }
    ]
  },
  {
    "keyword": "aiba sephiria",
    "slug": "aiba-sephiria",
    "category": "characters",
    "updatedAt": "2026-09-06",
    "title": "Who Is Aiba in Sephiria? Character Guide",
    "description": "Who is Aiba in Sephiria? What official sources confirm — and what is still unknown — about this character. Updated guide.",
    "answer": "Official sources checked on October 14, 2026 do not verify an Aiba character profile, role, abilities, or story entry in Sephiria.",
    "aliases": ["sephiria aiba", "aiba character sephiria"],
    "faqs": [
      { "question": "Who is Aiba in Sephiria?", "answer": "The official Sephiria sources checked on October 14, 2026 did not identify a verified Aiba character profile." },
      { "question": "Is Aiba a playable Sephiria character?", "answer": "No official source checked for this page confirmed Aiba as a playable character, NPC, or story character." }
    ]
  },
  {
    "keyword": "sephiria all characters",
    "slug": "sephiria-all-characters",
    "category": "characters",
    "updatedAt": "2026-10-21",
    "title": "Sephiria All Characters: Roster Status Guide",
    "description": "Every Sephiria character named in official sources: the bunny protagonist, companion NPC Collin, Carrot Soldier summons, and named bosses Kraz, Odner, Mogdi, and Haz.",
    "answer": "Official sources name a small cast rather than publishing a full roster: the bunny protagonist who defends Bunnyville, the NPC Collin who can become a companion, and bosses including Kraz, Odner, Mogdi, and Haz. This page lists every character named in the store page and official patch notes."
  },
  {
    "keyword": "sephiria discord",
    "slug": "sephiria-discord",
    "category": "community",
    "updatedAt": "2026-09-06",
    "title": "Sephiria Discord: Official Link & How to Join",
    "description": "Sephiria Discord: join through the developer-pinned Steam discussion; invite links and server details remain unconfirmed and may change over time.",
    "answer": "Use the developer-pinned Steam discussion as the stable official Sephiria Discord entry. Follow the current community link there; invite URLs, channels, and server details remain unconfirmed.",
    "faqs": [
      { "question": "How do I join the Sephiria Discord?", "answer": "Use the developer-pinned Steam discussion as the stable entry point and follow the current community link shown there." },
      { "question": "Is the Sephiria Discord invite link confirmed?", "answer": "The stable Steam discussion entry is supported by the research, but a current invite URL, server channels, and moderation details remain unconfirmed." },
      { "question": "Where should I check Sephiria community announcements?", "answer": "Start with the developer-pinned Steam discussion and the official Steam Community hub; verify the date before relying on a community detail." }
    ]
  },
  {
    "keyword": "sephiria build decision guide",
    "slug": "sephiria-build-decision-guide",
    "category": "builds",
    "updatedAt": "2026-10-14",
    "title": "Sephiria Build Decision Guide: Choose a Build That Fits Your Run",
    "description": "Sephiria build decision guide: a step-by-step worksheet to name your run goal, diagnose the bottleneck ending your runs, compare builds, and test one choice for three runs.",
    "answer": "Choose a Sephiria build by run goal and evidence: name the bottleneck ending your runs, compare two or three candidates on execution, bottleneck fit, testability, and goal fit, then test the leader for three runs changing one thing at a time.",
    "aliases": ["sephiria how to choose a build", "sephiria best build for beginners", "sephiria build planner", "sephiria build worksheet"],
    "faqs": [
      { "question": "What is the best Sephiria build?", "answer": "No universal best build is confirmed. Use the worksheet: name your run goal, diagnose the bottleneck from your own run notes, test one candidate for three runs, and decide from the evidence." },
      { "question": "How do I choose between two Sephiria builds?", "answer": "List both as candidates, score them on execution, bottleneck fit, testability, and goal fit, then test the leader for three runs with one variable changed at a time." },
      { "question": "How many runs should I test a build?", "answer": "Three runs with the same goal is a reasonable minimum. Fewer runs can suggest a lead but do not establish reliability." },
      { "question": "Should my co-op build differ from my solo build?", "answer": "Usually, yes. In co-op, the party can split ranges and roles, and teammates can trade items and revive fallen companions according to the developer's 1.0 announcement. Plan the party first, then the individual builds." },
      { "question": "When should I re-check a build decision?", "answer": "After a patch, after a goal change, after switching between solo and co-op, or after three consecutive runs end the same new way." }
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
