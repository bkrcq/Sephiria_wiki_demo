import type { Locale } from './locales'

export type CodeRow = { code: string; reward: string }

export const theme = {
  nav: '174 68% 48%',
  navLight: '169 78% 66%',
  navDark: '174 62% 36%',
  navLightTheme: '174 58% 48%',
  accent: '30 92% 58%',
  background: '218 34% 9%',
  surface: '216 28% 13%',
}

export const officialLinks = {
  website: 'https://teamhoray.com/games/sephiria',
  steam: 'https://store.steampowered.com/app/2436940/Sephiria/',
  discord: 'https://steamcommunity.com/app/2436940/discussions/0/4337609830360193739/',
  youtube: 'https://www.youtube.com/@horay5115',
  trailer: 'https://www.youtube.com/watch?v=uK0Yjz3Q3Sc',
  community: 'https://steamcommunity.com/app/2436940/',
  reddit: 'https://www.reddit.com/r/sephiria/',
}

export const codeRows: CodeRow[] = [
  { code: '暂无', reward: 'No official redemption-code system has been announced' },
  { code: '暂无', reward: 'Check official Steam announcements for future promotions' },
]

export type Copy = {
  siteTitle: string
  siteSubtitle: string
  nav: { home: string; weapons: string; builds: string; artifacts: string; bosses: string; coop: string; guides: string }
  utility: { update: string; roadmap: string; codes: string; community: string; faq: string }
  steam: string
  languageLabel: string
  home: {
    eyebrow: string
    title: string
    description: string
    heroStats: { value: string; label: string }[]
    primaryCta: string
    secondaryCta: string
    tertiaryCta: string
    videoLabel: string
    startEyebrow: string
    startTitle: string
    cards: { number: string; title: string; description: string; href: string }[]
    aboutTitle: string
    paragraphs: string[]
    statsTitle: string
    quickStats: { label: string; value: string }[]
    aboutCta: string
    codeEyebrow: string
    codeTitle: string
    codeDescription: string
    finalTitle: string
    finalDescription: string
    finalPrimary: string
    finalSecondary: string
  }
  weapons: {
    eyebrow: string
    title: string
    description: string
    introTitle: string
    intro: string
    familiesTitle: string
    familyRows: { weapon: string; bestOn: string; notes: string }[]
    swapTitle: string
    swap: string
    jumpTitle: string
    bestTitle: string
    bestItems: string[]
    detailTitle: string
    detailIntro: string
    detailRows: { tier: string; weapon: string; family: string; rarity: string; level: string; className: string; source: string }[]
  }
  grimoire: {
    eyebrow: string
    title: string
    description: string
    paragraphs: string[]
    sections: { title: string; body: string }[]
    relatedTitle: string
    related: string[]
  }
  footer: {
    aboutTitle: string
    about: string
    description: string
    guides: string
    resources: string
    community: string
    officialDiscord: string
    officialYoutube: string
    officialWebsite: string
    privacy: string
    terms: string
    copyright: string
    buy: string
  }
}

const english: Copy = {
  siteTitle: 'Sephiria', siteSubtitle: 'The Tower · Wiki',
  nav: { home: 'Home', weapons: 'Weapons', builds: 'Builds', artifacts: 'Artifacts', bosses: 'Bosses', coop: 'Co-op', guides: 'Guides' },
  utility: { update: 'Latest Update', roadmap: 'Roadmap', codes: 'Codes', community: 'Community', faq: 'FAQ' }, steam: 'Play on Steam', languageLabel: 'Languages',
  home: {
    eyebrow: 'Fan-Made Community Wiki', title: 'Master Every Run in Sephiria', description: 'Climb a collapsing tower as a rabbit hero in a fast-paced top-down action roguelite. Combine weapons, artifacts, tablets, and animal synergies to create powerful builds, defeat bosses, and survive alone or with up to four players.', heroStats: [{ value: 'Jul 31', label: 'Full release · 2026' }, { value: 'Aug 21', label: 'Last verified · 2026' }, { value: '4', label: 'Online co-op players' }, { value: '300', label: 'Confirmed artifacts' }, { value: '200+', label: 'Weapon upgrades' }], primaryCta: 'Start Beginner Guide', secondaryCta: 'Explore Weapon Builds', tertiaryCta: 'Read Patch Notes', videoLabel: 'Official media',
    startEyebrow: 'Start Here', startTitle: 'Your Sephiria Journey', cards: [
      { number: '1', title: 'Beginner Guide', description: 'Learn the essential controls, room priorities, early upgrades, healing options, and survival habits needed for your first successful tower runs.', href: '/weapons' },
      { number: '2', title: 'Best Early-Game Builds', description: 'Discover reliable weapon, artifact, and tablet combinations that become effective quickly and help new players clear the opening chapters.', href: '/weapons/grimoire' },
      { number: '3', title: 'Weapons & Upgrade Paths', description: 'Compare six weapon branches and more than 200 upgrades, then plan a route that matches your preferred range, speed, and damage style.', href: '/weapons' },
      { number: '4', title: 'Bosses, Co-op & Hard Mode', description: 'Study boss patterns, coordinate four-player teams, unlock advanced systems, and prepare optimized builds for the 60-level Hard Mode.', href: '/weapons/grimoire' },
    ],
    aboutTitle: 'What is Sephiria?', paragraphs: ['Sephiria is a top-down action roguelite and action RPG developed by TEAM HORAY for Steam. Players control a rabbit adventurer climbing a dangerous tower, fighting monsters in real time while managing weapons, artifacts, tablets, and inventory space.', 'Every run is shaped by random discoveries and build synergies. Whether you are learning your first weapon branch, combining hundreds of artifacts, challenging chapter bosses, or coordinating an online co-op team, Sephiria rewards experimentation and increasingly precise combat.'], statsTitle: 'Quick Facts', quickStats: [{ label: 'Developer', value: 'TEAM HORAY' }, { label: 'Platform', value: 'Steam, Windows and macOS' }, { label: 'Genre', value: 'Top-down Action Roguelite' }, { label: 'Chapters', value: '6' }, { label: 'Artifacts', value: '300' }, { label: 'Tablets', value: '70' }, { label: 'Weapon Upgrades', value: '200+' }, { label: 'Online Co-op', value: 'Up to 4 Players' }, { label: 'Hard Mode', value: '60 Levels' }], aboutCta: 'Explore All Guides',
    codeEyebrow: 'Community Notes', codeTitle: 'Sephiria Codes', codeDescription: 'No official redemption-code system has been announced. We will update this panel only when a real code is confirmed.', finalTitle: 'Ready to Master Sephiria?', finalDescription: 'From your first climb through the tower to optimized artifact synergies, four-player co-op, and the deepest Hard Mode floors, our community wiki helps you plan stronger builds and understand every run.', finalPrimary: 'Read the Beginner Guide', finalSecondary: 'Play on Steam',
  },
  weapons: { eyebrow: 'Builds', title: 'Sephiria Weapons & Upgrade Paths', description: 'Six weapon branches, 200+ upgrades, and a build system designed around experimentation.', introTitle: 'How weapon builds work', intro: 'The exact weapon skill breakdown isunconfirmed. This page records the researched scope without inventing weapon names, stats, or tier values.', familiesTitle: 'Weapon branches', familyRows: [{ weapon: 'Six weapon branches', bestOn: 'unconfirmed', notes: 'The research confirms six branches and 200+ weapon upgrades; individual branch names areunconfirmed.' }, { weapon: 'Weapon upgrades', bestOn: 'All runs', notes: 'Plan routes around range, speed, damage style, and artifact/tablet synergies.' }, { weapon: 'Build combinations', bestOn: 'Solo or co-op', notes: 'Use verified artifacts, tablets, and animal synergies as they are documented.' }], swapTitle: 'Upgrade planning', swap: 'Compare six weapon branches and more than 200 upgrades, then plan a route that matches your preferred range, speed, and damage style.', jumpTitle: 'Jump to a section', bestTitle: 'What is confirmed', bestItems: ['Six weapon branches', '200+ weapon upgrades', 'Weapon, artifact, tablet, and animal synergies', 'Detailed item names and tier data: unconfirmed'], detailTitle: 'Weapon data table', detailIntro: 'The research file does not provide a verified weapon-by-weapon list. Unknown cells are intentionally marked unconfirmed.', detailRows: [{ tier: 'unconfirmed', weapon: 'unconfirmed', family: 'unconfirmed', rarity: 'unconfirmed', level: 'unconfirmed', className: 'unconfirmed', source: 'Official source required' }, { tier: 'unconfirmed', weapon: 'unconfirmed', family: 'unconfirmed', rarity: 'unconfirmed', level: 'unconfirmed', className: 'unconfirmed', source: 'Official source required' }] },
  grimoire: { eyebrow: 'Builds', title: 'Sephiria Build Planner — Grimoire', description: 'A research-grounded starting point for weapon, artifact, and tablet combinations.', paragraphs: ['The supplied research confirms that Sephiria revolves around weapons, artifacts, tablets, animal synergies, and run-by-run experimentation.', 'Specific Grimoire names, skill values, artifact effects, tablet effects, and recommended meta combinations areunconfirmed. This article deliberately avoids fabricated build numbers or item names.'], sections: [{ title: 'Start with a clear run goal', body: 'Choose whether the run is focused on learning, clearing chapters, boss practice, co-op coordination, or Hard Mode preparation. The exact recommended route isunconfirmed.' }, { title: 'Track synergies', body: 'Record weapon branches, artifacts, tablets, and animal synergies together so future build notes remain reproducible.' }, { title: 'Co-op planning', body: 'Online co-op supports up to four players. Party roles and exact co-op builds areunconfirmed.' }, { title: 'Hard Mode', body: 'Hard Mode is documented as 60 levels. Enemy scaling, unlock requirements, and best builds areunconfirmed.' }], relatedTitle: 'Related', related: ['Weapons & Upgrade Paths', 'Beginner Guide', 'Bosses & Co-op', 'Patch Notes'] },
  footer: { aboutTitle: 'Sephiria Wiki', about: 'Sephiria Wiki is an independent fan-made guide site covering weapons, upgrades, artifacts, tablets, bosses, co-op strategies, unlocks, and patch information. It helps new and experienced players build stronger runs without being affiliated with TEAM HORAY or Valve.', description: 'Top-down action roguelite on Steam with 6 chapters, 300 artifacts, 200+ weapon upgrades, and four-player co-op.', guides: 'Guides', resources: 'Resources', community: 'Official Links', officialDiscord: 'Official Discord', officialYoutube: 'Official YouTube', officialWebsite: 'Official Website', privacy: 'Privacy Policy', terms: 'Terms of Service', copyright: '© 2026 sephiria.wiki · Fan site, not affiliated with TEAM HORAY or Valve.', buy: 'Buy on Steam →' }
}

function localized(base: Copy, locale: Locale): Copy {
  if (locale === 'en') return base
  const labels: Record<Exclude<Locale, 'en'>, Partial<Copy>> = {
    ko: { siteSubtitle: '타워 · 공략 위키', nav: { home: '홈', weapons: '무기', builds: '빌드', artifacts: '유물', bosses: '보스', coop: '협동', guides: '공략' }, utility: { update: '최신 업데이트', roadmap: '로드맵', codes: '코드', community: '커뮤니티', faq: 'FAQ' }, steam: 'Steam에서 플레이', languageLabel: '언어' },
    ja: { siteSubtitle: 'タワー · 攻略Wiki', nav: { home: 'ホーム', weapons: '武器', builds: 'ビルド', artifacts: 'アーティファクト', bosses: 'ボス', coop: '協力', guides: '攻略' }, utility: { update: '最新アップデート', roadmap: 'ロードマップ', codes: 'コード', community: 'コミュニティ', faq: 'FAQ' }, steam: 'Steamでプレイ', languageLabel: '言語' },
    ru: { siteSubtitle: 'Башня · Вики', nav: { home: 'Главная', weapons: 'Оружие', builds: 'Билды', artifacts: 'Артефакты', bosses: 'Боссы', coop: 'Кооператив', guides: 'Гайды' }, utility: { update: 'Обновление', roadmap: 'Дорожная карта', codes: 'Коды', community: 'Сообщество', faq: 'FAQ' }, steam: 'Играть в Steam', languageLabel: 'Языки' },
  }
  return { ...base, ...labels[locale], nav: { ...base.nav, ...labels[locale].nav }, utility: { ...base.utility, ...labels[locale].utility } }
}

export const copyByLocale: Record<Locale, Copy> = { en: english, ko: localized(english, 'ko'), ja: localized(english, 'ja'), ru: localized(english, 'ru') }

export const seoByLocale: Record<Locale, { title: string; description: string; keywords: string }> = {
  en: { title: 'Sephiria Wiki — Weapons, Builds & Artifacts', description: 'Master Sephiria with beginner guides, weapon upgrades, artifact and tablet builds, boss strategies, co-op tips, unlocks, and current Steam updates.', keywords: 'Sephiria wiki, weapons, builds, artifacts, tablets, bosses, co-op, beginner guide' },
  ko: { title: '세피리아 공략 위키 — 무기, 빌드와 유물', description: '세피리아의 초보자 공략, 무기 업그레이드, 유물과 석판 빌드, 보스와 협동 플레이 정보를 확인하세요.', keywords: '세피리아 공략, 무기, 빌드, 유물, 석판, 보스, 협동' },
  ja: { title: 'セフィリア 攻略Wiki — 武器・ビルド・アーティファクト', description: 'セフィリアの初心者攻略、武器強化、アーティファクトと石板ビルド、ボス、協力プレイ情報をまとめています。', keywords: 'セフィリア 攻略, 武器, ビルド, アーティファクト, 石板, ボス, 協力' },
  ru: { title: 'Sephiria Wiki — оружие, билды и артефакты', description: 'Гайды по Sephiria: оружие, улучшения, артефакты, таблички, боссы, кооператив и обновления Steam.', keywords: 'Sephiria гайд, оружие, билды, артефакты, таблички, боссы, кооператив' },
}

export function getCopy(locale: Locale) { return copyByLocale[locale] }