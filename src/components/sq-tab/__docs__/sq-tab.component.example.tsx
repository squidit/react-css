import React from 'react'
import SqTabExample, { Props } from '../sq-tab.component'

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
      <SqTabExample {...props} title="title" content="content"></SqTabExample>
    </div>
  )
}

export default Tab
