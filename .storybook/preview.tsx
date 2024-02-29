import type { Parameters } from '@storybook/react'
import '../src/styles.scss'
import DocumentationTemplate from './documentation.template.mdx'
import { NdsStyles } from './decorators'

export const parameters: Parameters = {
  viewMode: 'docs',
  previewTabs: {
    'storybook/docs/panel': { index: -1 },
  },
  actions: {
    argTypesRegex: '^on.*',
  },
  controls: {
    sort: 'requiredFirst',
    exclude: /children/,
    matchers: {
      color: /(background|color)$/i,
    },
  },
  docs: {
    page: DocumentationTemplate,
  },
  options: {
    storySort: {
      order: ['Getting Started', 'Components', 'Hooks'],
    },
  },
}

export const decorators = [NdsStyles]
