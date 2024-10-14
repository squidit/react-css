'use client'

import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { SqNumbersHelper } from '@/src/helpers'
import SqVerticalBarChart from '../sq-vertical-bar-chart/sq-vertical-bar-chart.component'

import './sq-group-vertical-bar-chart.component.scoped.scss'
import { useTranslation } from 'react-i18next'

export interface InfluencerChartMetric {
  label: string
  value: number[]
  total: number
  star?: number
}

interface Value {
  value: number
  label: string
}

interface Data {
  label: string
  value: Value[]
  total?: number
  star?: number
}

export interface Props {
  dataSet: InfluencerChartMetric[]
  legends?: string[]
  dataLength?: number
  colors?: string[]
  starTip?: string
  showLabel?: boolean
}

export default ({
  dataSet = [],
  legends = ['female', 'male', 'unisex'],
  dataLength = 8,
  colors = ['lilac', 'gold-light', 'purple-light'],
  showLabel = true,
}: Props) => {
  const sqNumbersHelper = useMemo(() => new SqNumbersHelper(), [])
  const { t } = useTranslation('sqGroupVerticalBarChart')

  const [data, setData] = useState<Data[]>([])

  const groupsIntoTrio = useCallback((list) => {
    const trio = []
    for (let i = 0; i < list.length; i += 3) {
      trio.push(list.slice(i, i + 3))
    }
    return trio
  }, [])

  const dataInTrio = useMemo(() => {
    return groupsIntoTrio(data)
  }, [data, groupsIntoTrio])

  const getDataValues = useCallback(() => {
    return dataSet.map((data) => data.value)
  }, [dataSet])

  const calcHeight = useCallback(
    (value: number) => {
      const valueVerified = value || 0
      const values = getDataValues()
        .reduce((acc, actual) => {
          acc.push(...actual)
          return acc
        }, [])
        .map((item: number | string) => Number(item || 0))
      const biggestValue = Math.max(...values)
      const transformedValue = valueVerified === biggestValue ? 100 : (100 * (value * 100)) / (biggestValue * 100)
      return `${transformedValue}px`
    },
    [getDataValues],
  )

  const initGraph = () => {
    const data = dataSet.reduce((acc, actual) => {
      acc.push({
        label: actual.label,
        star: actual.star,
        value: Array.from(actual?.value)?.map((value: number, index: number) => ({
          label: legends[index],
          value: value || 0,
        })),
      })

      return acc
    }, [])

    setData(data)
  }

  const mountTooltip = useCallback(
    (items: Value[]) => {
      let tip = ''
      for (const item of items) {
        tip += `<p><strong>${t(item?.label)}:</strong> ${sqNumbersHelper?.formatPercent(item?.value)}</p>`
      }
      return tip
    },
    [sqNumbersHelper, t],
  )

  useEffect(() => {
    initGraph()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="vertical-chart">
      {showLabel && (
        <div className="vertical-chart-subtitles">
          {dataSet?.map((item, i) => (
            <p className="text-center" key={i}>
              <span style={{ backgroundColor: colors?.[i] }}></span>
              <strong>
                {item?.label} <br />
                {sqNumbersHelper?.formatPercent(item?.value?.[i])}
              </strong>
            </p>
          ))}
        </div>
      )}
      <div className="vertical-chart-container justify-content-center">
        {dataInTrio?.map((group, index) => (
          <div className="chart-group display-flex justify-content-space-around" key={index}>
            {group?.map((item, i) => (
              <div className="chart" key={i}>
                <div className="chart-wrapper" data-tooltip={mountTooltip(item?.value)}>
                  <div className="chart-content">
                    <div className="chart-bar">
                      {item?.value?.map((obj, i) => (
                        <SqVerticalBarChart key={i} height={calcHeight(obj?.value)} backgroundColor={colors?.[i]} />
                      ))}
                    </div>
                  </div>
                  <p>
                    <strong>{item?.label}</strong>
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
