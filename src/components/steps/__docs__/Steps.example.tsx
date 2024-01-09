import React from 'react'
import StepsExample, { Props } from '../steps.component'

const Steps = ({ ...props }: Props) => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <StepsExample {...props} style={{ width: '100%' }} />
    </div>
  )
}

export default Steps
