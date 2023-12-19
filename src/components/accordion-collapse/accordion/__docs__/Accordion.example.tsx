import React from 'react'
import AccordionComponent, { Props } from '../accordion.component'
import Collapse from '../../collapse/collapse.component'

const Accordion = ({ ...props }: Props) => {
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
      <AccordionComponent onlyOne={true}>
        <Collapse open={false} title="Title 1" backgroundColor="var(--pink)">
          Content HTML
        </Collapse>
        <Collapse open={false} title={<span>Title 2</span>} backgroundColor="var(--lilac)">
          Content HTML
        </Collapse>
        <Collapse open={false} title="Title 3" backgroundColor="var(--aqua)">
          Content HTML
        </Collapse>
      </AccordionComponent>
    </div>
  )
}

export default Accordion
