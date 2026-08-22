import HomePage from './home-page'
import { seoByLocale } from '@/lib/content'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({ ...seoByLocale.en, path: '/', locale: 'en' })

export default function Page() { return <HomePage /> }
