import { LegalPage } from '../legal-page'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Sephiria Wiki Privacy Policy',
  description: 'Read the Sephiria Wiki privacy policy for this independent fan resource, including information about external official links and website use.',
  path: '/privacy',
  index: true,
})

export default function Page() { return <LegalPage locale="en" kind="privacy" /> }
