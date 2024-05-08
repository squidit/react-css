import React from 'react'
import SqTinyCalendar, { Props } from '../sq-tiny-calendar.component'

const SqTinyCalendarExample = (props: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <SqTinyCalendar {...props} />
    </div>
  )
}

export default SqTinyCalendarExample
