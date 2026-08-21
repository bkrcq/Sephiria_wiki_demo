import type { Metadata } from 'next'
import { LegalPage } from '../../legal-page'
import { isLocale, type Locale } from '@/lib/locales'
import { notFound } from 'next/navigation'
export async function generateMetadata(): Promise<Metadata> { return { title: 'Terms of Service', robots: { index: false, follow: true }, alternates: { canonical: '/terms' } } }
export default async function Page({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale)) notFound(); return <LegalPage locale={locale as Locale} kind="terms" /> }
