import React from 'react'
import TabExample, { Props } from '../tab.component'

const Tab = ({ ...props }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <TabExample {...props}>{props.children}</TabExample>
    </div>
  )
}

export default Tab
