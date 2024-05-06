import React from 'react'
import CollapseComponent, { CollapseProps } from '../sq-collapse.component'

const Collapse = ({ children, ...props }: CollapseProps) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <CollapseComponent {...props}>{children}</CollapseComponent>
    </div>
  )
}

export default Collapse
