import React from 'react'
import SqBorderWithIconExample, { Props } from '../sq-border-with-icon.component'

const SqBorderWithIcon = ({ ...props }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <SqBorderWithIconExample {...props} iconColor="var(--primary_color)">
        Click me!
      </SqBorderWithIconExample>
    </div>
  )
}

export default SqBorderWithIcon
