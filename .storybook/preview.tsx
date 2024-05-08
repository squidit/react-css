import type { Parameters } from '@storybook/react'
import DocumentationTemplate from './documentation.template.mdx'
import { NdsStyles } from './decorators'
import i18n from '../src/i18n'
import { themes } from '@storybook/theming'

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
  themeForComponents: {
    name: 'Theme',
    description: 'Theme for components',
    defaultValue: window?.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
    },
  },
}

export const parameters: Parameters = {
  i18n,
  viewMode: 'docs',
  previewTabs: {
    'storybook/docs/panel': { index: -1 },
  },
  actions: {
    // argTypesRegex: '^on.*',
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
    theme: window?.matchMedia('(prefers-color-scheme: dark)').matches ? themes.dark : themes.light,
  },
  options: {
    storySort: {
      order: ['Getting Started', 'Components', 'Hooks'],
    },
  },
}

export const decorators = [NdsStyles]
