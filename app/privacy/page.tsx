import type { Metadata } from 'next'
import { LegalPage } from '../legal-page'
export const metadata: Metadata = { title: 'Privacy Policy', robots: { index: false, follow: true }, alternates: { canonical: '/privacy' } }
export default function Page() { return <LegalPage locale="en" kind="privacy" /> }
