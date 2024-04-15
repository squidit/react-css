import { addons } from '@storybook/manager-api'
import { themes } from '@storybook/theming'
import squidThemeDark from './themes/squid-theme-dark'

addons.setConfig({
  theme: { ...themes.dark, ...squidThemeDark },
})
