import React from 'react'
import SqChartDoughnut, { Props } from '../sq-chart-doughnut.component'

const SqChartDoughnutExample = (props: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '200px',
        margin: '0 auto',
      }}
    >
      <SqChartDoughnut {...props} />
    </div>
  )
}

export default SqChartDoughnutExample
