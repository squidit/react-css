import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  typescript: {
    reactDocgen: 'react-docgen',
  },
  stories: ['../src/**/*.stories.tsx', '../src/**/*.mdx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-styling-webpack',
    '@storybook/addon-actions',
    {
      name: '@storybook/addon-docs',
      options: { configureJSX: false },
    },
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      },
    },
    '@storybook/addon-mdx-gfm',
    '@chromatic-com/storybook'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Docs',
  },
}
export default config
