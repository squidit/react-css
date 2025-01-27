import { Meta, StoryObj } from '@storybook/react'
import SqAverageEngagementChartExample from './average-engagement-chart.component.example'

const meta: Meta<typeof SqAverageEngagementChartExample> = {
  title: 'Components/SqAverageEngagementChart',
  parameters: {
    docs: {
      description: {
        component: 'A simple Average Engagement Chart component',
      },
    },
  },
  component: SqAverageEngagementChartExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqAverageEngagementChartExample>

export const Default: Story = {
  args: {
    dataSet: [
      [1, 2, 3, 4, 5, 6, 7, 8],
      [8, 9, 10, 11, 12, 13, 14, 15],
      [15, 16, 17, 18, 19, 20, 21, 22],
      [22, 23, 24, 25, 26, 27, 28, 29],
      [29, 30, 31, 32, 33, 34, 35, 36],
      [36, 37, 38, 39, 40, 41, 42, 43],
      [43, 44, 45, 46, 47, 48, 49, 30],
    ],
  },
}
