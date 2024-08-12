'use client'

import { HTMLAttributes, createContext, useEffect, useState } from 'react'
import i18n from '@/src/i18n'

import './sq-tiny-calendar.component.scoped.scss'

export interface Props extends React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  dateString: string
}

const TinyCalendarContext = createContext<any>({})

const TinyCalendar = ({ children, className = '', id = '', dateString, ...props }: Props) => {
  const [dayWeek, setDayWeek] = useState('')
  const [day, setDay] = useState(0)
  const [month, setMonth] = useState('')
  const [year, setYear] = useState(0)

  useEffect(() => {
    const dateInUTC = new Date(dateString).toLocaleDateString('en', { timeZone: 'UTC' })
    const dateObj = new Date(dateInUTC)

    const month = dateObj.toLocaleString(i18n?.language, { month: 'short' })
    const weekday = dateObj.toLocaleString(i18n?.language, { weekday: 'short' })
    setDay(dateObj.getDate())
    setMonth(month.replace('.', ''))
    setDayWeek(weekday.replace('.', ''))
    setYear(dateObj.getFullYear())
  }, [dateString])

  return (
    <TinyCalendarContext.Provider value={{ day, dayWeek, month, year, lang: i18n?.language }}>
      <div className={`tiny-calendar ${className} display-flex justify-content-flex-start`} id={id}>
        <div className="card-tiny-calendar" {...props}>
          <span>{children}</span>
        </div>
      </div>
    </TinyCalendarContext.Provider>
  )
}

type ChildProps = HTMLAttributes<HTMLDivElement>

const Day = ({ ...props }: ChildProps) => (
  <TinyCalendarContext.Consumer>{({ day }) => <div {...props}>{day}</div>}</TinyCalendarContext.Consumer>
)
const DayWeek = ({ ...props }: ChildProps) => (
  <TinyCalendarContext.Consumer>{({ dayWeek }) => <div {...props}>{dayWeek}</div>}</TinyCalendarContext.Consumer>
)
const Month = ({ ...props }: ChildProps) => (
  <TinyCalendarContext.Consumer>{({ month }) => <div {...props}>{month}</div>}</TinyCalendarContext.Consumer>
)
const Year = ({ ...props }: ChildProps) => (
  <TinyCalendarContext.Consumer>{({ year }) => <div {...props}>{year}</div>}</TinyCalendarContext.Consumer>
)

TinyCalendar.Day = Day
TinyCalendar.DayWeek = DayWeek
TinyCalendar.Month = Month
TinyCalendar.Year = Year

export default TinyCalendar
