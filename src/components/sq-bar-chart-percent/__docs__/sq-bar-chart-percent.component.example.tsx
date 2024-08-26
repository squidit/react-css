import React from 'react'
import SqBarChartPercent, { Props } from '../sq-bar-chart-percent.component'

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
      <SqBarChartPercent {...props} />
    </div>
  )
}

export default SqBarChart
