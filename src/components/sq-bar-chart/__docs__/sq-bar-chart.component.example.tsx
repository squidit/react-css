import React from 'react'
import SqBarChartExample, { Props } from '../sq-bar-chart.component'

const SqBarChart = ({ ...props }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <SqBarChartExample {...props} />
    </div>
  )
}

export default SqBarChart
