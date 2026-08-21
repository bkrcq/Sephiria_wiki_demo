import type { Metadata } from 'next'

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

export const keywordPages: KeywordPage[] = [
  {
    "keyword": "sephiria guide",
    "slug": "sephiria-guide",
    "category": "guide",
    "title": "sephiria guide | Sephiria Wiki: Facts & Guide",
    "description": "Find sephiria guide answers in this Sephiria Wiki page using confirmed research, official links, and clearly marked unconfirmed details for players today.",
    "answer": "sephiria guide can be answered only at a high level from the supplied Sephiria research; keyword-specific names, rankings, routes, values, or instructions are unconfirmed."
  },
  {
    "keyword": "sephiria wiki",
    "slug": "sephiria-wiki",
    "category": "guide",
    "title": "sephiria wiki | Sephiria Wiki: Facts & Guide",
    "description": "Find sephiria wiki answers in this Sephiria Wiki page using confirmed research, official links, and clearly marked unconfirmed details for players today.",
    "answer": "sephiria wiki can be answered only at a high level from the supplied Sephiria research; keyword-specific names, rankings, routes, values, or instructions are unconfirmed."
  },
  {
    "keyword": "sephiria weapons",
    "slug": "sephiria-weapons",
    "category": "weapons",
    "title": "sephiria weapons | Sephiria Wiki: Facts & Guide",
    "description": "Find sephiria weapons answers in this Sephiria Wiki page using confirmed research, official links, and clearly marked unconfirmed details for players today.",
    "answer": "sephiria weapons can be answered only at a high level from the supplied Sephiria research; keyword-specific names, rankings, routes, values, or instructions are unconfirmed."
  },
  {
    "keyword": "sephiria grimoire",
    "slug": "sephiria-grimoire",
    "category": "weapons",
    "title": "sephiria grimoire | Sephiria Wiki: Facts & Guide",
    "description": "Find sephiria grimoire answers in this Sephiria Wiki page using confirmed research, official links, and clearly marked unconfirmed details for players today.",
    "answer": "sephiria grimoire can be answered only at a high level from the supplied Sephiria research; keyword-specific names, rankings, routes, values, or instructions are unconfirmed."
  },
  {
    "keyword": "sephiria tier list",
    "slug": "sephiria-tier-list",
    "category": "weapons",
    "title": "sephiria tier list | Sephiria Wiki: Facts & Guide",
    "description": "Find sephiria tier list answers in this Sephiria Wiki page using confirmed research, official links, and clearly marked unconfirmed details for players today.",
    "answer": "sephiria tier list can be answered only at a high level from the supplied Sephiria research; keyword-specific names, rankings, routes, values, or instructions are unconfirmed."
  },
  {
    "keyword": "sephiria builds",
    "slug": "sephiria-builds",
    "category": "builds",
    "title": "sephiria builds | Sephiria Wiki: Facts & Guide",
    "description": "Find sephiria builds answers in this Sephiria Wiki page using confirmed research, official links, and clearly marked unconfirmed details for players today.",
    "answer": "sephiria builds can be answered only at a high level from the supplied Sephiria research; keyword-specific names, rankings, routes, values, or instructions are unconfirmed."
  },
  {
    "keyword": "sephiria destiny inscription",
    "slug": "sephiria-destiny-inscription",
    "category": "builds",
    "title": "sephiria destiny inscription | Sephiria Wiki: Facts & Guide",
    "description": "Find sephiria destiny inscription answers in this Sephiria Wiki page using confirmed research, official links, and marked unconfirmed details for players today.",
    "answer": "sephiria destiny inscription can be answered only at a high level from the supplied Sephiria research; keyword-specific names, rankings, routes, values, or instructions are unconfirmed."
  },
  {
    "keyword": "sephiria coop",
    "slug": "sephiria-coop",
    "category": "coop",
    "title": "sephiria coop | Sephiria Wiki: Facts & Guide",
    "description": "Find sephiria coop answers in this Sephiria Wiki page using confirmed research, official links, and clearly marked unconfirmed details for players today.",
    "answer": "Yes. The supplied research confirms online co-op for up to 4 players."
  },
  {
    "keyword": "sephiria secret rooms",
    "slug": "sephiria-secret-rooms",
    "category": "secret rooms",
    "title": "sephiria secret rooms | Sephiria Wiki: Facts & Guide",
    "description": "Find sephiria secret rooms answers in this Sephiria Wiki page using confirmed research, official links, and marked unconfirmed details for players today.",
    "answer": "sephiria secret rooms can be answered only at a high level from the supplied Sephiria research; keyword-specific names, rankings, routes, values, or instructions are unconfirmed."
  },
  {
    "keyword": "sephiria elru",
    "slug": "sephiria-elru",
    "category": "characters",
    "title": "sephiria elru | Sephiria Wiki: Facts & Guide",
    "description": "Find sephiria elru answers in this Sephiria Wiki page using confirmed research, official links, and clearly marked unconfirmed details for players today.",
    "answer": "sephiria elru can be answered only at a high level from the supplied Sephiria research; keyword-specific names, rankings, routes, values, or instructions are unconfirmed."
  },
  {
    "keyword": "sephiria costumes",
    "slug": "sephiria-costumes",
    "category": "costumes",
    "title": "sephiria costumes | Sephiria Wiki: Facts & Guide",
    "description": "Find sephiria costumes answers in this Sephiria Wiki page using confirmed research, official links, and clearly marked unconfirmed details for players today.",
    "answer": "sephiria costumes can be answered only at a high level from the supplied Sephiria research; keyword-specific names, rankings, routes, values, or instructions are unconfirmed."
  },
  {
    "keyword": "sephiria mods",
    "slug": "sephiria-mods",
    "category": "mods",
    "title": "sephiria mods | Sephiria Wiki: Facts & Guide",
    "description": "Find sephiria mods answers in this Sephiria Wiki page using confirmed research, official links, and clearly marked unconfirmed details for players today.",
    "answer": "sephiria mods can be answered only at a high level from the supplied Sephiria research; keyword-specific names, rankings, routes, values, or instructions are unconfirmed."
  },
  {
    "keyword": "sephiria switch",
    "slug": "sephiria-switch",
    "category": "platforms",
    "title": "sephiria switch | Sephiria Wiki: Facts & Guide",
    "description": "Find sephiria switch answers in this Sephiria Wiki page using confirmed research, official links, and clearly marked unconfirmed details for players today.",
    "answer": "Switch availability is unconfirmed. The supplied research confirms Steam, Windows and macOS, but does not confirm a Nintendo Switch release."
  },
  {
    "keyword": "sephiria reddit",
    "slug": "sephiria-reddit",
    "category": "community",
    "title": "sephiria reddit | Sephiria Wiki: Facts & Guide",
    "description": "Find sephiria reddit answers in this Sephiria Wiki page using confirmed research, official links, and clearly marked unconfirmed details for players today.",
    "answer": "sephiria reddit can be answered only at a high level from the supplied Sephiria research; keyword-specific names, rankings, routes, values, or instructions are unconfirmed."
  },
  {
    "keyword": "sephiria review",
    "slug": "sephiria-review",
    "category": "review",
    "title": "sephiria review | Sephiria Wiki: Facts & Guide",
    "description": "Find sephiria review answers in this Sephiria Wiki page using confirmed research, official links, and clearly marked unconfirmed details for players today.",
    "answer": "The supplied brief records 93% Positive Recent Reviews, but this dynamic value should be rechecked on Steam."
  },
  {
    "keyword": "sephiria 1.0",
    "slug": "sephiria-1-0",
    "category": "updates",
    "title": "sephiria 1.0 | Sephiria Wiki: Facts & Guide",
    "description": "Find sephiria 1.0 answers in this Sephiria Wiki page using confirmed research, official links, and clearly marked unconfirmed details for players today.",
    "answer": "The supplied brief records Full Release: Jul 31, 2026, with Latest Update: Aug 7, 2026; a full 1.0 changelog is unconfirmed."
  }
]


export function isKeywordIndexable(slug: string) {
  return !lowValueKeywordSlugs.has(slug)
}

export function getKeywordPage(slug: string) {
  return keywordPages.find((page) => page.slug === slug)
}

export function keywordMetadata(page: KeywordPage): Metadata {
  return {
    title: page.title,
    description: page.description,
    keywords: [page.keyword, 'Sephiria', 'wiki'],
    alternates: { canonical: `/guides/${page.slug}`, languages: { en: `/guides/${page.slug}`, 'x-default': `/guides/${page.slug}` } },
    robots: isKeywordIndexable(page.slug) ? { index: true, follow: true } : { index: false, follow: true },
  }
}