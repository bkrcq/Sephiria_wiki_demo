import type { Metadata } from 'next'
import { KeywordArticlePage } from '@/app/keyword-article-page'
import { getKeywordPage, keywordPages } from '@/lib/keyword-pages'
import { isLocale, locales } from '@/lib/locales'
import { notFound } from 'next/navigation'

export function generateStaticParams() { return locales.filter((locale) => locale !== 'en').flatMap((locale) => keywordPages.map((page) => ({ locale, slug: page.slug }))) }
export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> { const { locale, slug } = await params; if (!isLocale(locale)) return {}; const page = getKeywordPage(slug); return page ? { title: page.title, description: page.description, robots: { index: false, follow: true }, alternates: { canonical: `/guides/${slug}` } } : {} }
export default async function Page({ params }: { params: Promise<{ locale: string; slug: string }> }) { const { locale, slug } = await params; if (!isLocale(locale)) notFound(); const page = getKeywordPage(slug); if (!page) notFound(); return <KeywordArticlePage locale={locale} page={page} /> }
