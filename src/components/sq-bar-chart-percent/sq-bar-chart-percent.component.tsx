'use client'

import SqNumbersHelper from '@helpers/sq-numbers/sq-numbers.helper'
import { useEffect, useMemo, useState } from 'react'

import './sq-bar-chart-percent.component.scoped.scss'
import onLangChange, { Language } from '@/src/observables/on-lang-change.observable'

export interface Props {
  value: number
  total: number
  percentage: boolean
  colorBar?: string
  label?: string
  emoji?: string
}

const BarChartPercent = ({ value, total, percentage = false, label = '', colorBar = 'var(--primary_color)', emoji = '' }: Props) => {
  const totalBar = useMemo(() => total || (percentage ? 1 : 100), [percentage, total])
  const numbersHelper = useMemo(() => new SqNumbersHelper(), [])
  const [lang, setLang] = useState<Language>('en')
  const { formatPercent } = numbersHelper

  const definePercentage = (value: number, maxValue: number): string => {
    return `${((value * 100) / maxValue).toFixed(0)}%`
  }

  const maxNumber = totalBar
  const widthUserBar = definePercentage(value, maxNumber)

  useEffect(() => {
    const onLangChangeSubscription = onLangChange?.subscribe((lang) => {
      setLang(lang)
    })

    return () => {
      onLangChangeSubscription?.unsubscribe()
    }
  }, [])

  return (
    <div>
      <div className="display-flex justify-content-space-between my-2">
        <div className="display-flex align-items-center">
          {emoji && <span className="category-emoji mr-3">{emoji}</span>}
          <div className="text-bold">{label}</div>
        </div>
        <div className="text-bold">
          {percentage ? formatPercent(value / 100) : numbersHelper?.formatStandardNumber({ lang, number: value })}
        </div>
      </div>
      <div className="bar-chart">
        <div className="value-bar" style={{ width: widthUserBar, backgroundColor: colorBar }}></div>
      </div>
    </div>
  )
}

export default BarChartPercent
