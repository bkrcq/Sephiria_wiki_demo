import HomePage from '../home-page'
import { isLocale, type Locale } from '@/lib/locales'
import { notFound } from 'next/navigation'
import { seoByLocale } from '@/lib/content'
import { pageMetadata } from '@/lib/seo'

export function generateStaticParams() { return ['ko', 'ja', 'ru'].map(locale => ({ locale })) }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  return pageMetadata({ ...seoByLocale[locale], path: '/', locale, index: false })
}
export default async function Page({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale)) notFound(); return <HomePage locale={locale as Locale} /> }
