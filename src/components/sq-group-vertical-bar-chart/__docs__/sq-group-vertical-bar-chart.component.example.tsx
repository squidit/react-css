import React from 'react'
import SqVerticalBarChart, { Props } from '../sq-group-vertical-bar-chart.component'

const SqVerticalBarChartExample = (props: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <SqVerticalBarChart {...props} />
    </div>
  )
}

export default SqVerticalBarChartExample
