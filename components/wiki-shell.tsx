import type { ReactNode } from 'react'
import { WikiFooter, WikiHeader } from './wiki-chrome'
import type { Copy } from '@/lib/content'
import type { Locale } from '@/lib/locales'

const contentLanguage: Record<Locale, string> = { en: 'en', ko: 'ko', ja: 'ja', ru: 'ru' }

export function WikiShell({ children, locale, copy }: { children: ReactNode; locale: Locale; copy: Copy }) {
  return <div className="wiki-shell" lang={contentLanguage[locale]} data-locale={locale}><WikiHeader locale={locale} copy={copy} /><main>{children}</main><WikiFooter locale={locale} copy={copy} /></div>
}

export function SectionHeading({ children }: { children: ReactNode }) { return <div className="section-heading"><span>{children}</span></div> }
