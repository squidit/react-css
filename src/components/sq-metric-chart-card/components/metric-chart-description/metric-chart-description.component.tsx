import { useSqMetricChartContext } from '@hooks/use-sq-metric-chart-context'
import SqNumbersHelper from '@helpers/sq-numbers/sq-numbers.helper'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

interface Props {
  title: string
  type: string
}

const MetricChartDescription = ({ title, type }: Props) => {
  const { t, i18n } = useTranslation('sqMetricChart')
  const numbersHelper = useMemo(() => new SqNumbersHelper(), [])
  const { formatCompactNumber, formatPercent, percentageDifference } = numbersHelper
  const { state } = useSqMetricChartContext()
  const { metric, percentage } = state
  return (
    <div className="metric-chart-description">
      <span
        dangerouslySetInnerHTML={{
          __html: t('description', {
            type: t(`metrics.${type}`),
            firstValue: percentage ? formatPercent(metric.first) : formatCompactNumber({ lang: i18n?.language, number: metric.first }),
            positionFirst: percentageDifference(metric.influencersAverage, metric.user),
            userPercentageDiff: metric.user >= metric.influencersAverage ? t('aboveAverage') : t('belowAverage'),
            userPosition: metric.position.ranking,
          }),
        }}
      />
    </div>
  )
}

export default MetricChartDescription
