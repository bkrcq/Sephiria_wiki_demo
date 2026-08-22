import { GrimoirePage } from '../../../grimoire-page'
import { isLocale, type Locale } from '@/lib/locales'
import { notFound } from 'next/navigation'
import { pageMetadata } from '@/lib/seo'

export function generateStaticParams() { return ['ko', 'ja', 'ru'].map(locale => ({ locale })) }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  return pageMetadata({
    title: 'Sephiria Grimoire: Build Planner Facts',
    description: 'Review Sephiria Grimoire build-planning context from supplied research, with confirmed system scale, official links, and unknown item details marked unconfirmed.',
    path: '/weapons/grimoire',
    locale,
    index: false,
  })
}
export default async function Page({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale)) notFound(); return <GrimoirePage locale={locale as Locale} /> }
