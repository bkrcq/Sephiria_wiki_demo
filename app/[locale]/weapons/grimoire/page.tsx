import { GrimoirePage } from '../../../grimoire-page'
import { isLocale, type Locale } from '@/lib/locales'
import { notFound } from 'next/navigation'
export function generateStaticParams() { return ['ko', 'ja', 'ru'].map(locale => ({ locale })) }
export default async function Page({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale)) notFound(); return <GrimoirePage locale={locale as Locale} /> }




