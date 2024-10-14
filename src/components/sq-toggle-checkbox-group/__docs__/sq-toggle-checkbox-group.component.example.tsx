import React from 'react'
import SqToggleCheckboxGroup, { ToggleCheckboxGroupProps } from '../sq-toggle-checkbox-group.component'

const SqToggleCheckboxGroupExample = (props: ToggleCheckboxGroupProps) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '300px',
        height: '100%',
        margin: '0 auto',
      }}
    >
      <SqToggleCheckboxGroup {...props} />
    </div>
  )
}

export default SqToggleCheckboxGroupExample
