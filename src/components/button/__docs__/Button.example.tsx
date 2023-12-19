import React from 'react'
import ButtonExample, { Props } from '../button.component'

const Button = ({ ...props }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <ButtonExample {...props}>Click me!</ButtonExample>
    </div>
  )
}

export default Button
