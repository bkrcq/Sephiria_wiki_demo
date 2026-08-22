import { WeaponsPage } from '../../weapons-page'
import { isLocale, type Locale } from '@/lib/locales'
import { notFound } from 'next/navigation'
import { pageMetadata } from '@/lib/seo'

export function generateStaticParams() { return ['ko', 'ja', 'ru'].map(locale => ({ locale })) }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  return pageMetadata({
    title: 'Sephiria Weapons: Branches & Upgrade Facts',
    description: 'Explore Sephiria weapons through supplied research, including six confirmed weapon branches, 200+ upgrades, build context, and clearly marked unconfirmed details.',
    path: '/weapons',
    locale,
    index: false,
  })
}
export default async function Page({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale)) notFound(); return <WeaponsPage locale={locale as Locale} /> }
