import React, { useState } from 'react'
import SqInputBirthdaySimple from '../sq-input-birthday-simple.component'
import { Props } from '../../sq-input/sq-input.component'

const SqInputBirthdaySimpleExample = (props: Props) => {
  const [date, setDate] = useState('')

  return (
    <div className="display-flex justify-content-center align-items-center black">
      <SqInputBirthdaySimple {...props} value={date} onChange={(date) => setDate(date)} />
    </div>
  )
}

export default SqInputBirthdaySimpleExample
