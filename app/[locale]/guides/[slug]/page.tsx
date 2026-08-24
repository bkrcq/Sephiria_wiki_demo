import { getKeywordPage } from '@/lib/keyword-pages'
import { isLocale } from '@/lib/locales'
import { notFound, permanentRedirect } from 'next/navigation'

// Keyword articles are maintained in English until complete localized editions exist.
// Existing locale URLs permanently consolidate to their English canonical equivalent.
export function generateStaticParams() {
  return []
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  if (!isLocale(locale) || !getKeywordPage(slug)) return {}

  return { robots: { index: false, follow: true } }
}

export default async function Page({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  if (!isLocale(locale) || !getKeywordPage(slug)) notFound()

  permanentRedirect(`/guides/${slug}`)
}
