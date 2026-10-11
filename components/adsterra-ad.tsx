'use client'

import { usePathname } from 'next/navigation'
import Script from 'next/script'

const NATIVE_SCRIPT_SRC = 'https://pl31324941.profitableratecpmnetwork.com/52f9be1f21c9db41a48ad6c68ac474fe/invoke.js'
const NATIVE_CONTAINER_ID = 'container-52f9be1f21c9db41a48ad6c68ac474fe'
const BANNER_KEY = 'b576e289f95a91d37fd8d2294e694d84'

function AdsterraNative() {
  return <div className="adsterra-slot adsterra-slot--native" aria-label="Advertisement">
    <Script id="sephiria-adsterra-native" src={NATIVE_SCRIPT_SRC} strategy="afterInteractive" async data-cfasync="false" />
    <div id={NATIVE_CONTAINER_ID} />
  </div>
}

function AdsterraBanner() {
  return <div className="adsterra-slot adsterra-slot--banner" aria-label="Advertisement">
    <Script id="sephiria-adsterra-banner-config" strategy="afterInteractive">
      {`atOptions = {
  'key' : '${BANNER_KEY}',
  'format' : 'iframe',
  'height' : 90,
  'width' : 728,
  'params' : {}
};`}
    </Script>
    <Script id="sephiria-adsterra-banner" src={`https://www.highrevenueformat.com/${BANNER_KEY}/invoke.js`} strategy="afterInteractive" />
  </div>
}

export function AdsterraSiteAds() {
  const pathname = usePathname()
  const normalizedPath = pathname?.replace(/\/$/, '') || ''
  const legalPath = normalizedPath === '/privacy' || normalizedPath === '/terms' || /^\/(ko|ja|ru)\/(privacy|terms)$/.test(normalizedPath)

  if (legalPath) return null

  return <aside className="adsterra-ads" aria-label="Advertisements"><AdsterraNative /><AdsterraBanner /></aside>
}
