import MetricChartHeader from './components/header-graphic/header-graphic.component'
import SqBarChart from '../sq-bar-chart/sq-bar-chart.component'
import { useSqMetricChartContext } from '@/hooks'

import './sq-metric-chart.component.scoped.scss'

export interface Props {
  labelPin?: string
}

const MetricChart = ({ labelPin }: Props) => {
  const { state } = useSqMetricChartContext()
  const { metric } = state
  return (
    <div className="metric-chart">
      <MetricChartHeader />
      <SqBarChart
        value={metric?.user}
        pinValue={metric?.influencersAverage}
        percentage={state?.percentage ?? false}
        total={metric?.first}
        labelPin={labelPin}
      />
    </div>
  )
}

export default MetricChart
