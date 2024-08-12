'use client'

import MetricChartCardHeader from './components/metric-chart-card-header/metric-chart-card-header.component'
import MetricChartDescription from './components/metric-chart-description/metric-chart-description.component'
import { MetricsDetails } from '@interfaces/sq-metrics.interface'
import { MetricChartProvider } from '@hooks/use-sq-metric-chart-context'
import useSqMetricChart from '@hooks/use-sq-metric-chart/use-sq-metric-chart.hook'

import './sq-metric-chart-card.component.scoped.scss'
import { SqMetricChart } from '../sq-metric-chart'

export interface Props {
  title: any
  metric: MetricsDetails
  percentage?: boolean
  className?: string
  type?: string
}

const MetricChartCard = ({ title, metric, percentage = false, className = '', type = '' }: Props) => {
  const { state, setState } = useSqMetricChart({ metric, percentage })
  return (
    <MetricChartProvider value={{ state, setState }}>
      <div className={`metric-chart-card ${className}`}>
        <MetricChartCardHeader>{title}</MetricChartCardHeader>
        <SqMetricChart />
        {metric?.first && metric?.influencersAverage && metric?.position ? <MetricChartDescription title={title} type={type} /> : null}
      </div>
    </MetricChartProvider>
  )
}

export default MetricChartCard
