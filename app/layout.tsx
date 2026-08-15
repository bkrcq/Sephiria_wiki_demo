import type { Metadata } from 'next'
import './globals.css'
import { seoByLocale } from '@/lib/content'

export const metadata: Metadata = {
  title: seoByLocale.en.title,
  description: seoByLocale.en.description,
  keywords: seoByLocale.en.keywords,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
