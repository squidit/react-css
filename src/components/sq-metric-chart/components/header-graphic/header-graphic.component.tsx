import { useMemo } from 'react'
import SqNumbersHelper from '@/helpers/sq-numbers/sq-numbers.helper'
import { useSqMetricChartContext } from '@/hooks'

import './header-graphic.component.scoped.scss'

const HeaderGraphic = () => {
  const numbersHelper = useMemo(() => new SqNumbersHelper(), [])
  const { formatStandardNumber, formatCompactNumber, formatPercent } = numbersHelper
  const { state } = useSqMetricChartContext()
  const { metric, percentage } = state

  return (
    <div className="header-graphic">
      <span className="user-metric">
        {percentage ? formatPercent(metric?.user) : formatStandardNumber({ lang: 'en', number: metric?.user })}
      </span>
      {metric?.first && (
        <span className="first-place">
          #1 - <strong>{percentage ? formatPercent(metric?.first) : formatCompactNumber({ lang: 'en', number: metric?.first })}</strong>
        </span>
      )}
    </div>
  )
}

export default HeaderGraphic
