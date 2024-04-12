import React from 'react'
import { Props } from '../../sq-input/sq-input.component'
import SqInputDateComponent, { DateProps } from '../sq-input-date.component'

const SqInputDateExample = ({ ...props }: Props & DateProps) => {
  return (
    <div className="display-flex justify-content-center align-items-center">
      <SqInputDateComponent {...props} />
    </div>
  )
}

export default SqInputDateExample
