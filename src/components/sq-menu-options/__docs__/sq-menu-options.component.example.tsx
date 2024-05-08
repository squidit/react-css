import React from 'react'
import SqMenuOptions, { Props } from '../sq-menu-options.component'

const SqMenuOptionsExample = (props: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '300px',
      }}
    >
      <SqMenuOptions {...props} />
    </div>
  )
}

export default SqMenuOptionsExample
