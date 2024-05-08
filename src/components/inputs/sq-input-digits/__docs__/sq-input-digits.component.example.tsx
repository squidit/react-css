import React from 'react'
import SqInputDigits, { Props } from '../sq-input-digits.component'

const SqInputDigitsExample = (props: Props) => {
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
      <SqInputDigits {...props} value={value} onChange={setValue} />
    </div>
  )
}

export default SqInputDigitsExample
