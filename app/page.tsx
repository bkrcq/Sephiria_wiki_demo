import type { Metadata } from 'next'
import HomePage from './home-page'
import { seoByLocale } from '@/lib/content'

export const metadata: Metadata = {
  title: seoByLocale.en.title,
  description: seoByLocale.en.description,
  alternates: { canonical: '/' },
}

export default function Page() { return <HomePage /> }
