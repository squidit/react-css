import React from 'react'
import { Props } from '../../sq-input/sq-input.component'
import SqInputPassword, { PasswordProps } from '../sq-input-password.component'

const SqInputPasswordExample = (props: PasswordProps & Props) => {
  const [value, setValue] = React.useState('')
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      {/* @ts-ignore */}
      <SqInputPassword {...props} value={value} onChange={setValue} />
    </div>
  )
}

export default SqInputPasswordExample
