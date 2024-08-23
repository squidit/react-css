'use client'

import SqNumbersHelper from '@helpers/sq-numbers/sq-numbers.helper'
import { useMemo } from 'react'

import './sq-bar-chart-percent.component.scoped.scss'

export interface Props {
  value: number
  total: number
  percentage: boolean
  colorBar?: string
  label?: string
}

const BarChartPercent = ({ value, total, percentage = false, label = '', colorBar = 'var(--primary_color)' }: Props) => {
  const totalBar = useMemo(() => total || (percentage ? 1 : 100), [percentage, total])
  const numbersHelper = useMemo(() => new SqNumbersHelper(), [])
  const { formatPercent } = numbersHelper

  const definePercentage = (value: number, maxValue: number): string => {
    return `${((value * 100) / maxValue).toFixed(0)}%`
  }

  const maxNumber = totalBar
  const widthUserBar = definePercentage(value, maxNumber)

  return (
    <div>
      <div className="display-flex justify-content-space-between my-2">
        <div className="text-bold">{label}</div>
        <div className="text-bold">{percentage ? formatPercent(value / 100) : value}</div>
      </div>
      <div className="bar-chart">
        <div className="value-bar" style={{ width: widthUserBar, backgroundColor: colorBar }}></div>
      </div>
    </div>
  )
}

export default BarChartPercent
