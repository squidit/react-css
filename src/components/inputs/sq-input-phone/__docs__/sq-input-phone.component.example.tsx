import React from 'react'
import SqInputPhone, { Props } from '../sq-input-phone.component'

const SqInputPhoneExample = (props: Props) => {
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
      <SqInputPhone {...props} value={value} onChange={setValue} />
    </div>
  )
}

export default SqInputPhoneExample
