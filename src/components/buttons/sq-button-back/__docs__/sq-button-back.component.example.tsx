import React from 'react'
import SqButtonBackComponent, { Props } from '../sq-button-back.component'

const SqButtonBackExample = ({ children, ...props }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <SqButtonBackComponent {...props} />
    </div>
  )
}

export default SqButtonBackExample
