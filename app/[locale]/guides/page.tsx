import type { Metadata } from 'next'
import { KeywordGuideIndex } from '@/app/keyword-guide-index'
import { isLocale } from '@/lib/locales'
import { notFound } from 'next/navigation'
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { const { locale } = await params; if (!isLocale(locale)) return {}; return { title: 'Sephiria Guides', robots: { index: false, follow: true }, alternates: { canonical: '/guides' } } }
export default async function Page({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale)) notFound(); return <KeywordGuideIndex locale={locale} /> }
