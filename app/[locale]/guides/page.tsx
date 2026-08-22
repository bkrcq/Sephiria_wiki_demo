import { KeywordGuideIndex } from '@/app/keyword-guide-index'
import { isLocale } from '@/lib/locales'
import { notFound } from 'next/navigation'
import { pageMetadata } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  return pageMetadata({
    title: 'Sephiria Guides: Verified Facts by Search Topic',
    description: 'Browse Sephiria guides built from supplied research, with one page per search topic, official source links, direct answers, and clearly marked unconfirmed details.',
    path: '/guides',
    locale,
    index: false,
  })
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale)) notFound(); return <KeywordGuideIndex locale={locale} /> }
