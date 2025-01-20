import React, { useState } from 'react'
import SqInputDateSimple, { Props } from '../sq-input-date-simple.component'

const SqInputDateSimpleExample = (props: Props) => {
  const [date, setDate] = useState('')

  return (
    <div className="display-flex justify-content-center align-items-center black">
      <SqInputDateSimple {...props} value={date} onChange={(date) => setDate(date)} />
    </div>
  )
}

export default SqInputDateSimpleExample
