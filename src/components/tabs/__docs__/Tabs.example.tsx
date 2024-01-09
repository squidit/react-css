import React from 'react'
import TabsExample, { Props } from '../tabs.component'

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
      <TabsExample {...props}>{props.children}</TabsExample>
    </div>
  )
}

export default Tabs
