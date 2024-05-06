import React from 'react'
import SqButtonCopyText, { Props } from '../sq-button-copy-text.component'

const ButtonCoptTextExample = (props: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <SqButtonCopyText {...props} />
    </div>
  )
}

export default ButtonCoptTextExample
