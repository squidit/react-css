'use client'

import { useLayoutEffect, useMemo, useRef } from 'react'
import SqNumbersHelper from '@helpers/sq-numbers/sq-numbers.helper'
import useRect from '@hooks/use-sq-rect/use-sq-rect.hook'
import i18n from '@src/i18n'

import './sq-bar-chart.component.scoped.scss'

export interface Props {
  value: number
  pinValue?: number
  total: number
  labelPin?: any
  percentage: boolean
  colorBar?: string
}

const BarChart = ({ value, pinValue = value, total, percentage = false, labelPin = null, colorBar = 'var(--primary_color)' }: Props) => {
  const totalBar = useMemo(() => total || (percentage ? 1 : 100), [percentage, total])
  const numbersHelper = useMemo(() => new SqNumbersHelper(), [])
  const { formatCompactNumber, formatPercent } = numbersHelper
  const refLabelPin = useRef<HTMLDivElement>(null)
  const refValueBar = useRef<HTMLDivElement>(null)

  const contentRectLabelPin = useRect(refLabelPin)
  const contentRectMetricChartBody = useRect(refValueBar)

  const definePercentage = (value: number, maxValue: number): string => {
    return ((value * 100) / maxValue).toFixed(0)
  }

  const maxNumber = totalBar
  const widthUserBar = definePercentage(value, maxNumber)
  const widthInfluencerAverageBar = definePercentage(pinValue, maxNumber)

  useLayoutEffect(() => {
    const { left: leftDescription, width: widthDescription } = contentRectLabelPin
    const { left: leftMetricChart, width: widthMetricChart } = contentRectMetricChartBody

    if (refLabelPin.current && leftDescription < leftMetricChart && widthMetricChart <= widthDescription) {
      refLabelPin.current.style.transform = `translate(-${widthMetricChart}px, -50%)`
    }
  })

  return (
    <div className="bar-chart">
      <div className="value-bar" style={{ width: `${parseInt(widthUserBar)}%`, backgroundColor: colorBar }}></div>
      <div className="pin-bar-chart" style={{ width: `${parseInt(widthInfluencerAverageBar)}%` }} ref={refValueBar}>
        <div className="pin-container">
          <div className="pin-bar-chart-content">
            <div className="pin">
              <div className="description-pin" ref={refLabelPin}>
                {labelPin}
                <span className="text-bold">
                  {percentage ? formatPercent(pinValue) : formatCompactNumber({ lang: i18n?.language, number: pinValue })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BarChart
