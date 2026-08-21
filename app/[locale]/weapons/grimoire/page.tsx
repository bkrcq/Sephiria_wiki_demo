import type { Metadata } from 'next'
import { GrimoirePage } from '../../../grimoire-page'
import { isLocale, type Locale } from '@/lib/locales'
import { notFound } from 'next/navigation'
export function generateStaticParams() { return ['ko', 'ja', 'ru'].map(locale => ({ locale })) }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { const { locale } = await params; if (!isLocale(locale)) return {}; return { title: 'Sephiria Build Planning', robots: { index: false, follow: true }, alternates: { canonical: '/weapons/grimoire' } } }
export default async function Page({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale)) notFound(); return <GrimoirePage locale={locale as Locale} /> }
