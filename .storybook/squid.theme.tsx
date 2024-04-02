import { create } from '@storybook/theming/create'

export default create({
  base: 'light',

  brandTitle: 'Squid',
  brandUrl: '/',
  brandImage: 'https://squidit.com.br/wp-content/themes/squid/assets/img/logo.svg',
  brandTarget: '_self',

  colorPrimary: '#ffffff',
  colorSecondary: '#b61658',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  // appBorderColor: '#585C6D',
  appBorderRadius: 4,

  // Text colors
  textColor: '#10162F',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#585C6D',
  barHoverColor: '#585C6D',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  // inputBorder: '#10162F',
  inputTextColor: '#10162F',
  inputBorderRadius: 2,
})
