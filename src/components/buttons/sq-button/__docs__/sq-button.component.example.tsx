import React from 'react'
import SqButtonExample, { Props } from '../sq-button.component'

const SqButton = ({ children, ...props }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <SqButtonExample {...props}>{children}</SqButtonExample>
    </div>
  )
}

export default SqButton
