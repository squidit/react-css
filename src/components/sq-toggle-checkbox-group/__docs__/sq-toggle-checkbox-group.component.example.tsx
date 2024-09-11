import React from 'react'
import SqToggleCheckboxGroup, { ToggleCheckboxGroupProps } from '../sq-toggle-checkbox-group.component'

const SqToggleCheckboxGroupExample = (props: ToggleCheckboxGroupProps) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <SqToggleCheckboxGroup {...props} />
    </div>
  )
}

export default SqToggleCheckboxGroupExample
