import { useLayoutEffect, useMemo, useRef } from 'react'
import SqNumbersHelper from '@/helpers/sq-numbers/sq-numbers.helper'
import { useSqMetricChartContext, useSqRect } from '@/hooks'

interface Props {
  labelAverage: string
}

import './metric-chart-body.component.scss'

const MetricChartBody = ({ labelAverage }: Props) => {
  const numbersHelper = useMemo(() => new SqNumbersHelper(), [])
  const { formatCompactNumber, formatPercent } = numbersHelper
  const refDescription = useRef<HTMLDivElement>(null)
  const refMetricChartBody = useRef<HTMLDivElement>(null)
  const { state } = useSqMetricChartContext()
  const { metric, percentage } = state

  const contentRectDescription = useSqRect(refDescription)
  const contentRectMetricChartBody = useSqRect(refMetricChartBody)

  const definePercentage = (value: number, maxValue: number): string => {
    return ((value * 100) / maxValue).toFixed(0)
  }

  const maxNumber = metric.first
  const widthUserBar = definePercentage(metric.user, maxNumber)
  const widthInfluencerAverageBar = definePercentage(metric.influencersAverage, maxNumber)

  useLayoutEffect(() => {
    const { left: leftDescription, width: widthDescription } = contentRectDescription
    const { left: leftMetricChart, width: widthMetricChart } = contentRectMetricChartBody

    if (refDescription?.current && leftDescription < leftMetricChart && widthMetricChart <= widthDescription) {
      refDescription.current.style.transform = `translate(-${widthMetricChart}px, -50%)`
    }
  })

  return (
    <div className="metric-chart-body">
      <div className="metric-user" style={{ width: `${parseInt(widthUserBar)}%` }}></div>
      <div className="metric-average" style={{ width: `${parseInt(widthInfluencerAverageBar)}%` }} ref={refMetricChartBody}>
        <div className="pin-metric-chart">
          <div className="pin-container">
            <div className="pin">
              <div className="description-average" ref={refDescription}>
                {labelAverage}{' '}
                <span className="text-bold">
                  {percentage
                    ? formatPercent(metric.influencersAverage)
                    : formatCompactNumber({ lang: 'en', number: metric.influencersAverage })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MetricChartBody
