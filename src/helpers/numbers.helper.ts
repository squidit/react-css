export default class NumbersHelper {
  thousandTransform(value: number, args = 0) {
    const suffixes = ['k', 'M', 'G', 'T', 'P', 'E']
    if (Number.isNaN(value) || value === null || (!value && value !== 0)) {
      return '∞'
    }

    if (value < 1000) {
      return value
    }

    const exp = Math.floor(Math.log(value) / Math.log(1000))
    return (value / Math.pow(1000, exp)).toFixed(args) + suffixes[exp - 1]
  }

  fileSize(size: number) {
    if (size === 0) {
      return '0 Bytes'
    }

    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    const i = Math.floor(Math.log(size) / Math.log(k))
    return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  formatPercent = (number = 0, lang = 'pt'): string => {
    const formattedNumber = (number * 100).toFixed(1)
    return `${parseFloat(formattedNumber).toLocaleString(lang)}%`
  }

  formatStandardNumber = ({ lang = 'en', number = 0 }) => {
    return Intl.NumberFormat(lang, { notation: 'standard' }).format(number)
  }

  formatCompactNumber = ({ lang = 'en', number = 0 }) => {
    return Intl.NumberFormat(lang, { notation: 'compact' }).format(number)
  }

  percentageDifference = (initialValue: number, finalValue: number, lang = 'pt'): string => {
    const percentage = Math.abs(((finalValue - initialValue) / initialValue) * 100)
    return `${percentage.toLocaleString(lang, { maximumFractionDigits: 1 })}%`
  }

  convertMoneyValue = (number: number, lang = 'pt', currency = 'BRL') => {
    const formattedNumber = new Intl.NumberFormat(lang, {
      style: 'currency',
      currency,
      maximumFractionDigits: 2,
    }).format(number)

    if (formattedNumber?.includes('NaN')) {
      return number
    }
    return formattedNumber
  }
}
