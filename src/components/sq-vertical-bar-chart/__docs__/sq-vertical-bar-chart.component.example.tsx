import React from 'react'
import SqVerticalBarChart, { Props } from '../sq-vertical-bar-chart.component'

const SqVerticalBarChartExample = (props: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <SqVerticalBarChart {...props} />
    </div>
  )
}

export default SqVerticalBarChartExample
