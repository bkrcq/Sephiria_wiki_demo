# Sephiria Wiki Replica Implementation Plan

> **For agentic workers:** Implement this plan task-by-task and verify each step.

**Goal:** Build a multilingual Next.js + MDX Sephiria fan wiki that mirrors the supplied Farever-inspired layout while containing only the researched Sephiria information.

**Architecture:** Use the Next.js App Router with English at the root and `ko`, `ja`, and `ru` locale prefixes. Keep all UI structure in reusable React components, keep researched copy in locale-specific MDX files, and centralize SEO, links, theme HSL values, navigation, footer, and sidebar code data in typed content configuration.

**Tech Stack:** Next.js, React, TypeScript, MDX via `@next/mdx`, CSS modules/global CSS, Google-font-free system fallbacks for offline build reliability.

---

### Task 1: Scaffold the Next.js application

**Files:**
- Create: `package.json`, `tsconfig.json`, `next-env.d.ts`, `next.config.mjs`
- Create: `app/layout.tsx`, `app/globals.css`

- [ ] Add scripts for `dev`, `build`, `start`, and `lint`.
- [ ] Configure `.mdx` page imports through `@next/mdx`.
- [ ] Add global dark wiki tokens using the researched HSL values: background `218 34% 9%`, surface `216 28% 13%`, nav `174 68% 48%`, nav-light `169 78% 66%`, accent `30 92% 58%`.

### Task 2: Add centralized Sephiria content and locale routing

**Files:**
- Create: `lib/content.ts`
- Create: `lib/locales.ts`
- Create: `content/en/home.mdx`, `content/en/weapons.mdx`, `content/en/grimoire.mdx`
- Create: `content/ko/home.mdx`, `content/ko/weapons.mdx`, `content/ko/grimoire.mdx`
- Create: `content/ja/home.mdx`, `content/ja/weapons.mdx`, `content/ja/grimoire.mdx`
- Create: `content/ru/home.mdx`, `content/ru/weapons.mdx`, `content/ru/grimoire.mdx`

- [ ] Define locale metadata, localized navigation labels, SEO title/description/keywords, official links, and the two researched `暂无` redemption-code rows.
- [ ] Keep factual copy limited to `Sephiria网站开发信息.md`; mark unsupported article details as “待确认”.
- [ ] Use MDX sections for page bodies so content is editable without changing UI components.

### Task 3: Implement shared chrome and page templates

**Files:**
- Create: `components/wiki-header.tsx`, `components/wiki-footer.tsx`, `components/wiki-shell.tsx`
- Create: `components/hero-mark.tsx`, `components/section-heading.tsx`, `components/mdx-components.tsx`

- [ ] Reproduce the target’s two-row desktop header, gold pill Steam CTA, thin dividers, and compact utility navigation.
- [ ] Reproduce centered serif display headings with gold-to-teal gradient text and the target’s wide editorial content column.
- [ ] Add responsive mobile navigation with a compact wrapping layout rather than introducing a new visual language.
- [ ] Add footer columns for guides/resources/community/languages and ensure all branding says Sephiria only.

### Task 4: Implement the three required routes

**Files:**
- Create: `app/page.tsx`
- Create: `app/[locale]/page.tsx`
- Create: `app/weapons/page.tsx`, `app/weapons/grimoire/page.tsx`
- Create: `app/[locale]/weapons/page.tsx`, `app/[locale]/weapons/grimoire/page.tsx`
- Create: `app/not-found.tsx`

- [ ] Render the root English home page and locale-prefixed home pages.
- [ ] Render the English and localized weapons navigation/list page.
- [ ] Render the English and localized grimoire detail page.
- [ ] Add per-route metadata based on locale and page content.
- [ ] Ensure all links retain the active locale prefix.

### Task 5: Verify content replacement and production build

**Files:**
- Modify: any implementation files needed after checks.

- [ ] Run a repository search proving the old game name is absent from app/content source.
- [ ] Run TypeScript/lint checks and a production build.
- [ ] Start the local server and smoke-test `/`, `/weapons`, `/weapons/grimoire`, `/ko/`, `/ja/weapons`, and `/ru/weapons/grimoire`.
- [ ] Capture a local screenshot if browser tooling is available and adjust only clear layout regressions.
