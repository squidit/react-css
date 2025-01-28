import React from 'react'
import SqAverageEngagementChart, { Props } from '../average-engagement-chart.component'

const SqAverageEngagementChartExample = (props: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '600px',
      }}
    >
      <SqAverageEngagementChart {...props} />
    </div>
  )
}

export default SqAverageEngagementChartExample
