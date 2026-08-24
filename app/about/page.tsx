import { TrustPage } from '../trust-page'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'About Sephiria Wiki',
  description: 'Learn how Sephiria Wiki maintains independent, source-led game guides and labels unconfirmed information.',
  path: '/about',
  keywords: ['Sephiria Wiki', 'Sephiria guide sources', 'independent Sephiria wiki'],
})

export default function Page() {
  return <TrustPage kind="about" />
}
