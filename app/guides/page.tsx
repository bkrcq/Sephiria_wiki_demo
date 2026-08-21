import type { Metadata } from 'next'
import { KeywordGuideIndex } from '@/app/keyword-guide-index'

export const metadata: Metadata = {
  title: 'Sephiria Guides: Verified Topics & Research Status',
  description: 'Browse Sephiria guide topics and see which weapon, build, co-op, update, and community details have verified sources.',
  alternates: { canonical: '/guides', languages: { en: '/guides', 'x-default': '/guides' } },
}
export default function Page() { return <KeywordGuideIndex locale="en" /> }
