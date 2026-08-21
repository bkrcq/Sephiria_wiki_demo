import { LegalPage } from '../../legal-page'
import { isLocale, type Locale } from '@/lib/locales'
import { notFound } from 'next/navigation'
import { pageMetadata } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  return pageMetadata({ title: 'Sephiria Wiki Terms of Service', description: 'Read the Sephiria Wiki terms of service for this independent fan resource, including content scope, unofficial status, and external links.', path: '/terms', locale, index: false })
}
export default async function Page({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale)) notFound(); return <LegalPage locale={locale as Locale} kind="terms" /> }
