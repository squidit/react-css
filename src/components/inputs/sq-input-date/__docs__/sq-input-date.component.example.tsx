import React, { useState } from 'react'
import SqInputDateComponent, { DateProps } from '../sq-input-date.component'
import { Props } from '../../sq-input/sq-input.component'

const SqInputDateExample = ({ ...props }: DateProps & Props) => {
  const [value, setValue] = useState('')

  return (
    <div className="display-flex justify-content-center align-items-center">
      {/* @ts-ignore */}
      <SqInputDateComponent {...props} value={value} onChange={setValue} />
    </div>
  )
}

export default SqInputDateExample
