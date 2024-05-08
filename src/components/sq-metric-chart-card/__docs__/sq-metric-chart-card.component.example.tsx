import React from 'react'
import SqMetricChartCardExample, { Props } from '../sq-metric-chart-card.component'

const SqMetricChartCard = ({ ...props }: Props) => {
  return (
    <div>
      <SqMetricChartCardExample {...props} />
    </div>
  )
}

export default SqMetricChartCard
