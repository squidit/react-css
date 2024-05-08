import React from 'react'
import SqInputMedia, { Props } from '../sq-input-media.component'

const SqInputMediaExample = (props: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <SqInputMedia {...props} />
    </div>
  )
}

export default SqInputMediaExample
