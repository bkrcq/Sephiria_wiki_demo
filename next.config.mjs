import createMDX from '@next/mdx'

const withMDX = createMDX({})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  outputFileTracingRoot: new URL('.', import.meta.url).pathname,
  async redirects() {
    // 2026-10-21 AdSense recovery: B-class keyword guides merged into their
    // static canonical pages (see adsense-content-audit-2026-10-20).
    const merges = [
      ['sephiria-weapons', '/weapons'],
      ['sephira-weapons', '/weapons'],
      ['sephiria-grimoire', '/weapons/grimoire'],
      ['sephiria-coop', '/coop'],
      ['sephiria-artifact', '/artifacts'],
      ['sephiria-secrets', '/guides/sephiria-secret-rooms'],
      ['sephiria-wiki', '/'],
    ]
    return merges.flatMap(([slug, destination]) => [
      { source: `/guides/${slug}`, destination, permanent: true },
      {
        source: `/:locale(ko|ja|ru)/guides/${slug}`,
        destination: slug === 'sephiria-weapons' || slug === 'sephira-weapons'
          ? '/:locale/weapons'
          : slug === 'sephiria-grimoire'
            ? '/:locale/weapons/grimoire'
            : slug === 'sephiria-wiki'
              ? '/:locale'
              : destination,
        permanent: true,
      },
    ])
  },
}

export default withMDX(nextConfig)
