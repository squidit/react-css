import React from 'react'
import SqTabsExample, { Props } from '../sq-tabs.component'
import SqTab from '../../sq-tab/sq-tab.component'

const Tabs = ({ ...props }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '200px',
      }}
    >
      <SqTabsExample {...props}>
        <SqTab title="tab 1">content 1</SqTab>
        <SqTab title="tab 2">content 2</SqTab>
      </SqTabsExample>
    </div>
  )
}

export default Tabs
