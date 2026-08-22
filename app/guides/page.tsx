import { KeywordGuideIndex } from '@/app/keyword-guide-index'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Sephiria Guides: Verified Facts by Search Topic',
  description: 'Browse Sephiria guides built from supplied research, with one page per search topic, official source links, direct answers, and clearly marked unconfirmed details.',
  path: '/guides',
  keywords: ['Sephiria guides', 'Sephiria wiki', 'Sephiria facts'],
})

export default function Page() { return <KeywordGuideIndex locale="en" /> }
