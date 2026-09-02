import createMDX from '@next/mdx'

const withMDX = createMDX({})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  outputFileTracingRoot: new URL('.', import.meta.url).pathname,
}

export default withMDX(nextConfig)
