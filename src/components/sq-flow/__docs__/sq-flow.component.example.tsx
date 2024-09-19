import React from 'react'

import SqFlow, { Props } from '../sq-flow.component'

const Flow = (props: Props) => {
  return (
    <div
      style={{
        width: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        margin: '0 auto',
      }}
    >
      <SqFlow {...props} />
    </div>
  )
}

export default Flow
