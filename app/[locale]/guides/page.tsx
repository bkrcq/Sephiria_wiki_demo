import { isLocale } from '@/lib/locales'
import { notFound, permanentRedirect } from 'next/navigation'

export function generateStaticParams() {
  return []
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) return {}

  return { robots: { index: false, follow: true } }
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  // The research library is maintained in English until complete localized guides exist.
  permanentRedirect('/guides')
}
