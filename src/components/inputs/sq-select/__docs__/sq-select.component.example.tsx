import React from 'react'
import SqSelect, { Props } from '../sq-select.component'

const SqSelectExample = ({ children, ...props }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <SqSelect {...props}>{children}</SqSelect>
    </div>
  )
}

export default SqSelectExample
