import React, { Suspense, useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../src/i18n'

export const NdsStyles = (Story, { globals }) => {
  const { locale } = globals
  const { theme } = globals || {}

  useEffect(() => {
    i18n.changeLanguage(locale)
  }, [locale])

  useEffect(() => {
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(theme || 'light')
  }, [theme])

  return (
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <div style={{ margin: '3em' }} className={`${globals.theme}`}>
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
