export default class StringsHelper {
  capitalizeFirstLetter(string: string) {
    return string?.charAt(0)?.toUpperCase() + string?.slice(1)
  }

  stringToRegexWithScapedSpecialChars(string: string) {
    return new RegExp(string?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i')
  }
}
