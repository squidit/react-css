import useSqMetricChart, { MetricChartProps } from './use-sq-metric-chart.hook'
import { Meta, StoryObj } from '@storybook/react'
import { useEffect } from 'react'

const Overview = (props: MetricChartProps) => {
  const { state, setState } = useSqMetricChart(props)

  useEffect(() => {
    setState(props)
  }, [props, setState])

  return (
    <div>
      <pre>metric: {JSON.stringify(state.metric, null, 2)}</pre>
      <pre>percentage: {JSON.stringify(state.percentage, null, 2)}</pre>
    </div>
  )
}

const meta: Meta = {
  title: 'Hooks/useSqMetricChart',
  component: Overview,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta
type Story = StoryObj<typeof Overview>

export const Default: Story = {
  args: {
    metric: {
      user: 50,
      first: 100,
      influencersAverage: 30,
      position: {
        ranking: 50,
        total: 100,
      },
    },
    percentage: true,
  },
}
