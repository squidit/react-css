import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

interface Translations {
  en: {
    [key: string]: any
  }
  pt: {
    [key: string]: any
  }
  es: {
    [key: string]: any
  }
}

interface AllComponentsTranslations {
  [key: string]: Translations
}

import ptGlobals from '@assets/locales/pt.json'
import enGlobals from '@assets/locales/en.json'
import esGlobals from '@assets/locales/es.json'
import ptSqMetricChart from '@components/sq-metric-chart/locales/pt.json'
import enSqMetricChart from '@components/sq-metric-chart/locales/en.json'
import esSqMetricChart from '@components/sq-metric-chart/locales/es.json'

const componentsThatUseGlobals = ['sqInput']

const getResources = () => ({
  en: {
    globals: enGlobals,
    sqMetricChart: enSqMetricChart,
  },
  pt: {
    globals: ptGlobals,
    sqMetricChart: ptSqMetricChart,
  },
  es: {
    globals: esGlobals,
    sqMetricChart: esSqMetricChart,
  },
})

export const defaultNS = 'globals'
export let resources: Translations = getResources()

export const setAllComponentsTranslations = (allComponentsTranslations: AllComponentsTranslations[]) => {
  if (allComponentsTranslations?.length) {
    allComponentsTranslations.forEach((componentTranslations) => {
      Object.keys(componentTranslations).forEach((componentName) => {
        setComponentTranslations(componentName, componentTranslations[componentName])
      })
    })
  } else {
    resources = getResources()
  }
}

export const setComponentTranslations = (componentName: string, translations?: Translations) => {
  componentName?.[0]?.toLocaleLowerCase()

  if (translations) {
    resources.en[componentsThatUseGlobals?.includes(componentName) ? 'globals' : componentName] = translations.en
    resources.pt[componentsThatUseGlobals?.includes(componentName) ? 'globals' : componentName] = translations.pt
    resources.es[componentsThatUseGlobals?.includes(componentName) ? 'globals' : componentName] = translations.es
  } else {
    resources = getResources()
  }
}

i18n
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    defaultNS,
    ns: ['globals', 'sqMetricChart'],
    load: 'all',
    supportedLngs: ['en', 'pt', 'es'],
    debug: false,
    lng: navigator.language?.split('-')[0] || 'en',
    cache: { enable: false },
    interpolation: { escapeValue: false },
    fallbackLng: 'en',
    resources: resources as any,
  })

export default i18n
