import React from 'react'
import SqCallout, { Props } from '../sq-callout.component'

const SqCalloutExample = ({ children, ...props }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <SqCallout {...props}>{children}</SqCallout>
    </div>
  )
}

export default SqCalloutExample
