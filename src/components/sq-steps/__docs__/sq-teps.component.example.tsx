import React from 'react'
import SqStepsExample, { Props } from '../sq-steps.component'

const Steps = ({ ...props }: Props) => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <SqStepsExample {...props} style={{ width: '100%' }} steps={[{ status: 'one' }, { status: 'two' }]} active={1} />
    </div>
  )
}

export default Steps
