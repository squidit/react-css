import React from 'react'
import SqToggleCheckbox, { ToggleCheckboxProps } from '../sq-toggle-checkbox.component'

const SqToggleCheckboxExample = (props: ToggleCheckboxProps) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <SqToggleCheckbox {...props} />
    </div>
  )
}

export default SqToggleCheckboxExample
