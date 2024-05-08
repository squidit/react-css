import React from 'react'
import SqCardToCopyComponent, { Props } from '../sq-card-to-copy.component'

const SqCardToCopyExample = (props: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <SqCardToCopyComponent {...props} />
    </div>
  )
}

export default SqCardToCopyExample
