import i18next from 'i18next'

export default class DataHelper {
  formatDate(date: string) {
    try {
      return new Date(date).toLocaleDateString('pt-br').split('/').reverse().join('-')
    } catch (e) {
      return ''
    }
  }

  formatPhoneNumber(phoneNumber: string): string | undefined {
    if (phoneNumber) {
      const brazilDDI = '+55'
      const ninePrefix = '9'
      const hasBrazilDDI = `+${phoneNumber}`.slice(0, 3) === brazilDDI
      const hasNineDigits = phoneNumber.slice(4).length === 9
      const hasNinePrefix = phoneNumber.slice(4, 5) === ninePrefix

      if (hasBrazilDDI) {
        if (hasNinePrefix && hasNineDigits) {
          return `${brazilDDI} (${phoneNumber.slice(2, 4)}) ${phoneNumber.slice(4, 9)}-${phoneNumber.slice(9, 14)}`
        } else {
          return `${brazilDDI} (${phoneNumber.slice(2, 4)}) ${phoneNumber.slice(4, 8)}-${phoneNumber.slice(8, 13)}`
        }
      } else {
        return phoneNumber
      }
    }
  }

  calcAge(year: number, month: number, day: number) {
    const date = new Date()

    const thisYear = date.getFullYear()
    const thisMont = date.getMonth() + 1
    const thisDay = date.getDate()

    year = +year
    month = +month
    day = +day

    let age = thisYear - year

    if (thisMont < month || (thisMont == month && thisDay < day)) {
      age--
    }

    return age < 0 ? 0 : age
  }

  formatTimeText(seconds: number, periodSeconds: number, period: string) {
    const interval = seconds / periodSeconds
    if (interval > 1) {
      const intervalRound = Math.floor(interval)
      return i18next.t(`globals:${period}`, { value: intervalRound, count: intervalRound })
    }
    return ''
  }

  formatTimeFormatAgo(date: string) {
    const today = new Date()
    const newDate = new Date(date)
    const seconds = (today.getTime() - newDate.getTime()) / 1000

    const periods = [
      {
        period: 'year',
        value: 31536000,
      },
      {
        period: 'month',
        value: 2592000,
      },
      {
        period: 'day',
        value: 86400,
      },
      {
        period: 'hour',
        value: 3600,
      },
    ]

    if (today.getDate() === newDate.getDate()) {
      return i18next.t('globals:today')
    }

    let timeText = ''
    periods.forEach((element) => {
      if (!timeText) {
        timeText = this.formatTimeText(seconds, element.value, element.period)
      }
    })
    return timeText
  }
}
