import { KeywordArticlePage } from '@/app/keyword-article-page'
import { getKeywordPage, keywordMetadata, keywordPages } from '@/lib/keyword-pages'
import { notFound } from 'next/navigation'

export function generateStaticParams() { return keywordPages.map((page) => ({ slug: page.slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const page = getKeywordPage(slug); return page ? keywordMetadata(page) : {} }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const page = getKeywordPage(slug); if (!page) notFound(); return <KeywordArticlePage locale="en" page={page} /> }
