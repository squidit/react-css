import React from 'react'
import SqCircleCompletation, { Props } from '../sq-circle-completation.component'

const SqCircleCompletationExample = (props: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <SqCircleCompletation {...props} />
    </div>
  )
}

export default SqCircleCompletationExample
