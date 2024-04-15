import type { Parameters } from '@storybook/react'
import DocumentationTemplate from './documentation.template.mdx'
import { NdsStyles } from './decorators'
import i18n from '../src/i18n'

import '../src/styles.scss'

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', title: 'English' },
        { value: 'pt', title: 'Português' },
        { value: 'es', title: 'Español' },
      ],
      showName: true,
    },
  },
  theme: 'light',
}

export const parameters: Parameters = {
  i18n,
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
