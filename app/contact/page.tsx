import { TrustPage } from '../trust-page'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Contact Sephiria Wiki',
  description: 'Contact Sephiria Wiki to report a correction or suggest a source, and find the official TEAM HORAY channels for Sephiria game support.',
  path: '/contact',
  keywords: ['Sephiria Wiki contact', 'Sephiria corrections', 'Sephiria support'],
})

export default function Page() {
  return <TrustPage kind="contact" />
}
