import { useState } from 'react'
import SqMetricsDetails from '@interfaces/sq-metrics.interface'

export interface MetricChartProps {
  metric: SqMetricsDetails
  percentage?: boolean
}

export default ({ metric, percentage = true }: MetricChartProps) => {
  const [state, setState] = useState<MetricChartProps>({
    metric,
    percentage,
  })

  return {
    state,
    setState,
  }
}
