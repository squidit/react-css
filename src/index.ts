import onLangChange from './observables/on-lang-change.observable'
import i18n from './i18n'

export * from './components'
export * from './helpers'
export * from './hooks'
export * from './interfaces'
export * from './observables'
export { setComponentTranslations, setAllComponentsTranslations } from './i18n'

onLangChange.subscribe((lang) => {
  i18n.changeLanguage(lang)
})
