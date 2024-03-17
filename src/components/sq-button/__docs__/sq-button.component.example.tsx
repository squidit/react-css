import React from 'react'
import SqButtonExample, { Props } from '../sq-button.component'

const SqButton = ({ ...props }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <SqButtonExample {...props} color="var(--primary_color)">
        Click me!
      </SqButtonExample>
    </div>
  )
}

export default SqButton
