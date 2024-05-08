import React from 'react'
import SqSelect, { Props } from '../sq-select.component'

const SqSelectExample = ({ children, ...props }: Props) => {
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
      <SqSelect {...props} value={value} onChange={setValue}>
        {children}
      </SqSelect>
    </div>
  )
}

export default SqSelectExample
