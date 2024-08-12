'use client'

import MetricChartHeader from './components/header-graphic/header-graphic.component'
import SqBarChart from '../sq-bar-chart/sq-bar-chart.component'
import { useSqMetricChartContext } from '@hooks/use-sq-metric-chart-context'

import './sq-metric-chart.component.scoped.scss'
import { useTranslation } from 'react-i18next'

const MetricChart = () => {
  const { state } = useSqMetricChartContext()
  const { metric } = state
  const { t } = useTranslation('sqMetricChart')
  return (
    <div className="metric-chart">
      <MetricChartHeader />
      <SqBarChart
        value={metric?.user}
        pinValue={metric?.influencersAverage}
        percentage={state?.percentage ?? false}
        total={metric?.first}
        labelPin={t('average')}
      />
    </div>
  )
}

export default MetricChart
