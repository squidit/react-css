import { addons } from '@storybook/manager-api'
import { themes } from '@storybook/theming'
import squidThemeDark from './themes/squid-theme-dark'
import '@squidit/css/dist/js/squid'

addons.setConfig({
  theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? { ...themes.dark, ...squidThemeDark } : { ...themes.light },
})
