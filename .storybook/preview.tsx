import type { Preview } from '@storybook/react'
import '../src/styles.scss'
import DocumentationTemplate from './documentation.template.mdx'

const preview: Preview = {
  parameters: {
    actions: {
      argTypesRegex: '^on[A-Z].*',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      page: DocumentationTemplate,
    },
  },
}

export default preview
