import SqVerticalBarChartExample from './sq-vertical-bar-chart.component.example'
import { Meta, StoryObj } from '@storybook/react'

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
    height: '100px',
    backgroundColor: 'blue',
    label: '1',
    tooltip: 'Tooltip',
    size: 'lg',
  },
}
