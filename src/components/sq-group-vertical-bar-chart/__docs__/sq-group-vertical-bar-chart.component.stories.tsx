import { Meta, StoryObj } from '@storybook/react'
import SqGroupVerticalBarChartExample from './sq-group-vertical-bar-chart.component.example'

const meta: Meta<typeof SqGroupVerticalBarChartExample> = {
  title: 'Components/SqGroupVerticalBarChart',
  parameters: {
    docs: {
      description: {
        component: 'A simple GroupVerticalBarChart component',
      },
    },
  },
  component: SqGroupVerticalBarChartExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqGroupVerticalBarChartExample>

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
      {
        label: '35-44',
        value: [0.1, 0.2, 0.3],
        total: 4,
      },
      {
        label: '45-54',
        value: [0.1, 0.2, 0.3],
        total: 5,
      },
      {
        label: '55-64',
        value: [0.1, 0.2, 0.3],
        total: 6,
      },
    ],

    showLabel: false,
    colors: [
      window.getComputedStyle(document.documentElement).getPropertyValue('--lilac-70'),
      window.getComputedStyle(document.documentElement).getPropertyValue('--blue-60'),
      window.getComputedStyle(document.documentElement).getPropertyValue('--cian'),
    ],
  },
}
