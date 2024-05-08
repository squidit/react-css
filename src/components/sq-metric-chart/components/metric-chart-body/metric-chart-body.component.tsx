import { useLayoutEffect, useMemo, useRef } from 'react'
import SqNumbersHelper from '@helpers/sq-numbers/sq-numbers.helper'
import { useSqMetricChartContext } from '@hooks/use-sq-metric-chart-context'
import { useSqRect } from '@hooks/use-sq-rect'

import './metric-chart-body.component.scss'
import { useTranslation } from 'react-i18next'

const MetricChartBody = () => {
  const numbersHelper = useMemo(() => new SqNumbersHelper(), [])
  const { formatCompactNumber, formatPercent } = numbersHelper
  const refDescription = useRef<HTMLDivElement>(null)
  const refMetricChartBody = useRef<HTMLDivElement>(null)
  const { state } = useSqMetricChartContext()
  const { metric, percentage } = state

  const contentRectDescription = useSqRect(refDescription)
  const contentRectMetricChartBody = useSqRect(refMetricChartBody)

  const [t] = useTranslation('sqMetricChart')

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
                {t('average')}{' '}
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
