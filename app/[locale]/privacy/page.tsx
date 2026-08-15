import { LegalPage } from '../../legal-page'
import { isLocale, type Locale } from '@/lib/locales'
import { notFound } from 'next/navigation'
export default async function Page({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale)) notFound(); return <LegalPage locale={locale as Locale} kind="privacy" /> }
