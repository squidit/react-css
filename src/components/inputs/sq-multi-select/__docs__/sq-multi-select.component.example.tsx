import React from 'react'
import SqMultiSelect, { Props } from '../sq-multi-select.component'

const SqMultiSelectExample = (props: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '500px',
      }}
    >
      <SqMultiSelect {...props} />
    </div>
  )
}

export default SqMultiSelectExample
