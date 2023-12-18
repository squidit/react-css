import React from 'react'
import CollapseComponent, { CollapseProps } from '../collapse.component'

const Collapse = ({ ...props }: CollapseProps) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <CollapseComponent {...props} />
    </div>
  )
}

export default Collapse
