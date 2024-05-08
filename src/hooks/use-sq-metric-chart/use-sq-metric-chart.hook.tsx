import { useState } from 'react'
import { MetricsDetails } from '@interfaces/sq-metrics.interface'

export interface MetricChartProps {
  metric: MetricsDetails
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
