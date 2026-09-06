import type { Metadata, Viewport } from 'next'
import './globals.css'
import { seoByLocale } from '@/lib/content'
import { JsonLd } from '@/components/json-ld'
import { SITE_URL } from '@/lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: seoByLocale.en.title, template: '%s' },
  description: seoByLocale.en.description,
  keywords: seoByLocale.en.keywords,
  applicationName: 'Sephiria Wiki',
  authors: [{ name: 'Sephiria Wiki Editorial Team' }],
  creator: 'Sephiria Wiki Editorial Team',
  publisher: 'Sephiria Wiki',
  category: 'video game guide',
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: seoByLocale.en.title,
    description: seoByLocale.en.description,
    siteName: 'Sephiria Wiki',
    locale: 'en_US',
  },
  twitter: { card: 'summary', title: seoByLocale.en.title, description: seoByLocale.en.description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
}

export const viewport: Viewport = { themeColor: '#101a2b', colorScheme: 'dark' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        name: 'Sephiria Wiki',
        url: SITE_URL,
        description: seoByLocale.en.description,
        inLanguage: 'en',
        about: { '@id': `${SITE_URL}/#game` },
      },
      {
        '@type': 'VideoGame',
        '@id': `${SITE_URL}/#game`,
        name: 'Sephiria',
        url: 'https://store.steampowered.com/app/2436940/Sephiria/',
        gamePlatform: ['Steam', 'Windows', 'macOS'],
        developer: { '@type': 'Organization', name: 'TEAM HORAY', url: 'https://teamhoray.com/games/sephiria' },
        isPartOf: { '@id': `${SITE_URL}/#website` },
      },
    ],
  }
  return <html lang="en"><body><JsonLd data={websiteSchema} />{children}</body></html>
}
