import React from 'react'
import SqMetricChartExample, { Props } from '../sq-metric-chart.component'
import { MetricChartProvider } from '../../../hooks/use-sq-metric-chart-context/use-metric-chart-context.hook'

const SqMetricChart = ({ ...props }: Props) => {
  return (
    <MetricChartProvider
      value={{
        state: { metric: { user: 50, influencersAverage: 70, position: { ranking: 2, total: 100 }, first: 100 } },
        setState: () => null,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <SqMetricChartExample {...props} />
      </div>
    </MetricChartProvider>
  )
}

export default SqMetricChart
