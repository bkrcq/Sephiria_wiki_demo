import type { ComponentProps, ElementType } from 'react'

type MDXComponents = Record<string, ElementType>

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    table: (props: ComponentProps<'table'>) => <table className="data-table" {...props} />,
    ...components,
  }
}
