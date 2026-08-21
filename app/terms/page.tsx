import type { Metadata } from 'next'
import { LegalPage } from '../legal-page'
export const metadata: Metadata = { title: 'Terms of Service', robots: { index: false, follow: true }, alternates: { canonical: '/terms' } }
export default function Page() { return <LegalPage locale="en" kind="terms" /> }
