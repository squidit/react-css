'use client'

import { useSqMetricChartContext } from '@hooks/use-sq-metric-chart-context'
import UserPosition from '@components/sq-metric-chart/components/user-position/user-position.component'

import './metric-chart-card-header.component.scoped.scss'

const MetricChartCardHeader = ({ children }: any) => {
  const { state } = useSqMetricChartContext()
  const { metric } = state
  return (
    <div className="metric-chart-card-header">
      <span className="title">{children}</span>
      {metric?.position && <UserPosition />}
    </div>
  )
}

export default MetricChartCardHeader
