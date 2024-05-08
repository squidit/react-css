import React from 'react'
import SqTip, { Props } from '../sq-tip.component'

const SqTipExample = (props: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <SqTip {...props} />
    </div>
  )
}

export default SqTipExample
