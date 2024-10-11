import React from 'react'
import SqChartLine, { Props } from '../sq-chart-line.component'

const SqChartLineExample = (props: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        margin: '0 auto',
      }}
    >
      <SqChartLine {...props} />
    </div>
  )
}

export default SqChartLineExample
