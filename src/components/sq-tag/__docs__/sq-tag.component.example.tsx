import React from 'react'
import SqTag, { Props } from '../sq-tag.component'

const SqTagExample = (props: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <SqTag {...props} />
    </div>
  )
}

export default SqTagExample
