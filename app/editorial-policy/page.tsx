import { TrustPage } from '../trust-page'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Sephiria Wiki Editorial Policy',
  description: 'Read Sephiria Wiki’s source hierarchy, verification standards, update policy, and approach to corrections.',
  path: '/editorial-policy',
  keywords: ['Sephiria Wiki editorial policy', 'Sephiria guide verification', 'Sephiria sources'],
})

export default function Page() {
  return <TrustPage kind="editorial-policy" />
}
