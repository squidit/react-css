import React from 'react'
import SqAccordionComponent, { Props } from '../sq-accordion.component'
import SqCollapse from '../../sq-collapse/sq-collapse.component'

const SqAccordion = ({ children, ...props }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <SqAccordionComponent {...props}>{children}</SqAccordionComponent>
    </div>
  )
}

export default SqAccordion
