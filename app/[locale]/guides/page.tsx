import { KeywordGuideIndex } from '@/app/keyword-guide-index'
import { isLocale } from '@/lib/locales'
import { notFound } from 'next/navigation'
export default async function Page({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale)) notFound(); return <KeywordGuideIndex locale={locale} /> }
