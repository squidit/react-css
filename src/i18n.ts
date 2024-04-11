import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

export const defaultNS = 'globals'
export const resources = {
  en: {},
  pt: {},
  es: {},
} as const

i18n
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    defaultNS,
    ns: [],
    load: 'all',
    supportedLngs: ['en', 'pt', 'es'],
    lng: navigator.language.split('-')[0] || 'en',
    debug: false,
    cache: { enable: false },
    interpolation: { escapeValue: false },
    fallbackLng: 'en',
    resources,
  })

export default i18n
