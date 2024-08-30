import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { SqNumbersHelper } from '@/src/helpers'

import './sq-vertical-bar-chart.component.scoped.scss'

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
  starTip,
  showLabel = true,
}: Props) => {
  const sqNumbersHelper = useMemo(() => new SqNumbersHelper(), [])

  const [data, setData] = useState<Data[]>([])
  const [average, setAverage] = useState<Value[]>([])

  const verifyIfHexBackgroundColor = useCallback((color: string) => {
    return color?.includes('#') ? color : null
  }, [])

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
    const average = getDataValues()
      .reduce((acc, actual) => Array.from(actual)?.map((value: number, index: number) => (acc[index] || 0) + (value || 0)), [])
      .map((value, index) => ({
        value,
        label: legends[index],
      }))

    setAverage(average)

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
      let tip
      for (const item of items) {
        tip += `<p><strong>${item?.label}:</strong> ${sqNumbersHelper?.formatPercent(item?.value)}</p>`
      }
      return tip
    },
    [sqNumbersHelper],
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
      <div className="vertical-chart-container">
        {data?.slice(0, dataLength)?.map((item, index) => (
          <div className="chart" key={index}>
            <div className="chart-wrapper">
              <div className="chart-content">
                <div className="chart-bar" data-tooltip={mountTooltip(item?.value)}>
                  {item?.value?.map((obj, i) => (
                    <div
                      className={`chart-bar-line background-${colors?.[index]}`}
                      key={i}
                      style={{ height: calcHeight(obj?.value), backgroundColor: verifyIfHexBackgroundColor(colors[i]) }}
                    ></div>
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
    </div>
  )
}
