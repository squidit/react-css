import { create } from '@storybook/theming'

export default create({
  base: 'dark',

  brandTitle: 'Squid',
  brandUrl: '/',
  brandImage: 'https://github.com/user-attachments/assets/cbcdd227-7e27-4948-8693-4f0aae155a69',
  brandTarget: '_self',

  colorPrimary: '#ffffff',
  colorSecondary: '#cb05fa',

  // UI
  appBg: '#282828',
  appContentBg: '#282828',
  // appBorderColor: '#585C6D',
  appBorderRadius: 4,

  // Text colors
  textColor: '#f7f7f7',
  textInverseColor: '#f7f7f7',

  // Toolbar default and active colors
  barTextColor: '#f7f7f7',
  barSelectedColor: '#f7f7f7',
  barHoverColor: '#f7f7f7',
  barBg: '#282828',

  // Form colors
  inputBg: '#282828',
  // inputBorder: '#10162F',
  inputTextColor: '#f7f7f7',
  inputBorderRadius: 2,
})
