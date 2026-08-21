import { LegalPage } from '../legal-page'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Sephiria Wiki Terms of Service',
  description: 'Read the Sephiria Wiki terms of service for this independent fan resource, including content scope, unofficial status, and external links.',
  path: '/terms',
  index: true,
})

export default function Page() { return <LegalPage locale="en" kind="terms" /> }
