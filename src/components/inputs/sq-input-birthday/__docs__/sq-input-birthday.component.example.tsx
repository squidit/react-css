import React from 'react'
import SqInputBirthday, { DateProps as Props } from '../sq-input-birthday.component'

const SqInputBirthdayExample = (props: Props) => {
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
      <SqInputBirthday {...props} value={value} onChange={setValue} />
    </div>
  )
}

export default SqInputBirthdayExample
