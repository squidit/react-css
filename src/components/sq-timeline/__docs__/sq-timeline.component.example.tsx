import React from 'react'
import SqTimeline, { Props } from '../sq-timeline.component'

const SqTimelineExample = ({ children, ...props }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <SqTimeline {...props}>{children}</SqTimeline>
    </div>
  )
}

export default SqTimelineExample
