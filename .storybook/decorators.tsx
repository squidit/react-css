import React, { Suspense, useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../src/i18n'
import onThemeChange from './theme-observable'

export const NdsStyles = (Story, { globals }) => {
  const { locale } = globals

  useEffect(() => {
    i18n.changeLanguage(locale)
  }, [locale])

  const setThemeForComponents = (theme = 'dark') => {
    const html = document.getElementsByTagName('html')[0]
    html.classList.remove('light', 'dark')
    html.classList.add(theme)

    const docsStoryElements = document.querySelectorAll('.docs-story')
    if (docsStoryElements?.length) {
      docsStoryElements.forEach((docsStoryElement) => {
        docsStoryElement.setAttribute('style', `background-color: var(--background_secondary) !important`)
      })
    }
  }

  useEffect(() => {
    setThemeForComponents(globals?.themeForComponents)
  }, [globals?.themeForComponents])

  return (
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <div>
          <style>
            {`
          :root {
            --nds-primary-color: 26, 67, 56;
            --nds-secondary-color: 0, 101, 83;
          };
        `}
          </style>
          <Story />
        </div>
      </I18nextProvider>
    </Suspense>
  )
}
