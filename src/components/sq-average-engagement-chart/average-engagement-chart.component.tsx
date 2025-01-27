import React, { useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import './average-engagement-chart.component.scoped.scss'
import SqObjectHelper from '@/src/helpers/sq-object/sq-object.helper'
import { SqNumbersHelper } from '@/src/helpers'
import i18n from '@/src/i18n'

interface Day {
  value: number
  percentage: number
}

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  dataSet: number[][]
  color?: string
}

const MIN_OPACITY = 0.2

export default function AverageEngagementChart({ dataSet, color = 'blue', className = '', ...props }: Props) {
  const tableElement = React.useRef<HTMLTableElement>(null)

  const sqNumberHelper = useMemo(() => new SqNumbersHelper(), [])

  /* Local variables */
  const timestamp = `random-id-${(1 + Date.now() + Math.random()).toString().replace('.', '')}`
  const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
  const hours = ['00h', '03h', '06h', '09h', '12h', '15h', '18h', '21h']

  const [data, setData] = useState<Day[][]>([])

  const { t } = useTranslation('averageEngagementChart')

  const setOpacity = useCallback(
    (value: number) => {
      const dataFlatted: number[] = dataSet?.flatMap((week) => week)
      const biggestValue: number = Math.max(...dataFlatted)

      if (value < MIN_OPACITY || value === null) {
        return MIN_OPACITY
      }

      if (value === biggestValue) {
        return 1
      }

      const percentageValue: number = (value * 100) / biggestValue / 100

      return percentageValue * (1 - MIN_OPACITY) + MIN_OPACITY
    },
    [dataSet],
  )

  useEffect(() => {
    const processDataSet = () => {
      const dataMapped = dataSet.map(
        (week) =>
          week?.map((value) => ({
            value: value,
            percentage: setOpacity(value),
          })),
      )

      setData(dataMapped)
    }

    processDataSet()
  }, [dataSet, setOpacity])

  useEffect(() => {
    const table = tableElement?.current
    if (!table) return

    const rows = table.rows

    if (table.tHead) {
      table.tHead.remove()
    }

    // add a label to all rows
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i]
      const label = weekdays[i]
      const labelCell = row.insertCell(0)
      labelCell.innerHTML = t(label)
    }

    // check if table has tfoot and remove it
    if (table.tFoot) {
      table.tFoot.remove()
    }

    // add a tfoot with the hours skipping the first cell
    const tfoot = table.createTFoot()
    const tfootRow = tfoot.insertRow()
    tfootRow.insertCell()
    for (const element of hours) {
      const cell = tfootRow.insertCell()
      cell.innerHTML = element
    }
  }, [data, t, weekdays, hours])

  return (
    <div className={`engagement-chart ${className}`} {...props}>
      <table border={0} cellSpacing="0" cellPadding="0" style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td>
              <table className="engagement-chart-values" ref={tableElement} id={timestamp} key={timestamp}>
                <tbody>
                  {data?.map((week, index) => (
                    <tr key={index}>
                      {week?.map((obj, i) => (
                        <td key={i}>
                          <div
                            className={`element-value background-${color}`}
                            style={{ opacity: obj?.percentage }}
                            data-tooltip={`${t('averageEngagement')}: ${sqNumberHelper?.formatStandardNumber({
                              lang: i18n?.language,
                              number: obj?.value,
                            })}`}
                          ></div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
