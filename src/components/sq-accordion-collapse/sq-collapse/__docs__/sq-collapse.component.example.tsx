import React from 'react'
import CollapseComponent, { CollapseProps } from '../sq-collapse.component'

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
      <CollapseComponent
        {...props}
        title="Title"
        open
        headerJustify="center"
        headerBorder=""
        loading={false}
        disabled={false}
        backgroundColor="var(--primary_color)"
        colorIcons="var(--neutral_primary)"
        colorBackgroundIcon="transparent"
        fontSizeIcon="0.9rem"
        heightIcon=""
        className=""
        style={{}}
        bodyBorder={false}
        noPadding={false}
        addMarginLoopCollapse
        onToggleAccordion={(value: any) => value}
        index={0}
      />
    </div>
  )
}

export default Collapse
