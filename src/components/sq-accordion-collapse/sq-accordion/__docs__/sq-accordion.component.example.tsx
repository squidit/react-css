import React from 'react'
import SqAccordionComponent, { Props } from '../sq-accordion.component'
import SqCollapse from '../../sq-collapse/sq-collapse.component'

const SqAccordion = ({ ...props }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        color: 'black',
      }}
    >
      <SqAccordionComponent {...props} openFirst onlyOne containerCollapseClass="container-collapse background">
        <SqCollapse open={false} title="Title 1" backgroundColor="var(--pink)">
          <div className="white">Content HTML</div>
        </SqCollapse>
        <SqCollapse open={false} title={<span>Title 2</span>} backgroundColor="var(--lilac)">
          <div className="white">Content HTML</div>
        </SqCollapse>
        <SqCollapse open={false} title="Title 3" backgroundColor="var(--aqua)">
          <div className="white">Content HTML</div>
        </SqCollapse>
      </SqAccordionComponent>
    </div>
  )
}

export default SqAccordion
