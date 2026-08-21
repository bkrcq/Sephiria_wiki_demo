import Link from 'next/link'
import { localePath, type Locale } from '@/lib/locales'

export function Breadcrumbs({ locale, items }: { locale: Locale; items: { label: string; href?: string }[] }) {
  return <nav className="breadcrumbs" aria-label="Breadcrumb">
    <ol>{items.map((item, index) => <li key={`${item.label}-${index}`}>
      {item.href ? <Link href={localePath(locale, item.href)}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
    </li>)}</ol>
  </nav>
}
