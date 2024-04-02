import { Meta, StoryObj } from '@storybook/react'
import SqMetricChartExample from './sq-metric-chart.component.example'

const meta: Meta<typeof SqMetricChartExample> = {
  title: 'Components/SqMetricChart',
  parameters: {
    docs: {
      description: {
        component: 'A simple MetricChart component',
      },
    },
  },
  component: SqMetricChartExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqMetricChartExample>

export const Default: Story = {}
