import type { Metadata } from 'next'
import './globals.css'
import { seoByLocale } from '@/lib/content'
import { SITE_URL } from '@/app/seo'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: seoByLocale.en.title,
  description: seoByLocale.en.description,
  keywords: seoByLocale.en.keywords,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Sephiria Wiki',
    title: seoByLocale.en.title,
    description: seoByLocale.en.description,
  },
  twitter: {
    card: 'summary',
    title: seoByLocale.en.title,
    description: seoByLocale.en.description,
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
