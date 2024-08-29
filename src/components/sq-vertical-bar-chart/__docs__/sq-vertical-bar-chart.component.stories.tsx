import { Meta, StoryObj } from '@storybook/react'
import SqVerticalBarChartExample from './sq-vertical-bar-chart.component.example'

const meta: Meta<typeof SqVerticalBarChartExample> = {
  title: 'Components/SqVerticalBarChart',
  parameters: {
    docs: {
      description: {
        component: 'A simple VerticalBarChart component',
      },
    },
  },
  component: SqVerticalBarChartExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqVerticalBarChartExample>

export const Default: Story = {
  args: {
    dataSet: [
      {
        label: '13-17',
        value: [0.1, 0.2, 0.3],
        total: 1,
      },
      {
        label: '12-24',
        value: [0.1, 0.2, 0.3],
        total: 3,
      },
      {
        label: '25-34',
        value: [0.1, 0.2, 0.3],
        total: 2,
      },
    ],

    showLabel: false,
    colors: [
      window.getComputedStyle(document.documentElement).getPropertyValue('--purple-70'),
      window.getComputedStyle(document.documentElement).getPropertyValue('--blue-60'),
      window.getComputedStyle(document.documentElement).getPropertyValue('--cian'),
    ],
  },
}
