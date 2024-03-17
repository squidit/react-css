import type { Parameters } from '@storybook/react'
import DocumentationTemplate from './documentation.template.mdx'
import { NdsStyles } from './decorators'

import '../src/styles.scss'

export const parameters: Parameters = {
  backgrounds: {
    default: 'dark',
    values: [
      { name: 'light', value: '#f5f5f5' },
      { name: 'dark', value: '#333333' },
    ],
  },
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
