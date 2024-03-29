import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  typescript: {
    reactDocgen: 'react-docgen',
  },
  stories: ['../src/**/*.stories.tsx', '../src/**/*.mdx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-styling-webpack',
    '@storybook/addon-docs',
    '@storybook/addon-actions',
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
