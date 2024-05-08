import { Meta, StoryObj } from '@storybook/react'
import SqMetricChartCardExample from './sq-metric-chart-card.component.example'

const meta: Meta<typeof SqMetricChartCardExample> = {
  title: 'Components/SqMetricChartCard',
  parameters: {
    docs: {
      description: {
        component: 'A simple MetricChartCard component',
      },
    },
  },
  component: SqMetricChartCardExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqMetricChartCardExample>

export const Default: Story = {
  args: {
    title: 'Title',
    metric: {
      user: 50,
      first: 100,
      influencersAverage: 30,
      position: {
        ranking: 50,
        total: 100,
      },
    },
  },
}
