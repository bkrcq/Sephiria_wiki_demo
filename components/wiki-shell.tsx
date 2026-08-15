import type { ReactNode } from 'react'
import { WikiFooter, WikiHeader } from './wiki-chrome'
import type { Copy } from '@/lib/content'
import type { Locale } from '@/lib/locales'

export function WikiShell({ children, locale, copy }: { children: ReactNode; locale: Locale; copy: Copy }) {
  return <div className="wiki-shell"><WikiHeader locale={locale} copy={copy} /><main>{children}</main><WikiFooter locale={locale} copy={copy} /></div>
}

export function SectionHeading({ children }: { children: ReactNode }) { return <div className="section-heading"><span>{children}</span></div> }
