import { Meta, StoryObj } from '@storybook/react'
import SqBarChartExample from './sq-bar-chart.component.example'

const meta: Meta<typeof SqBarChartExample> = {
  title: 'Components/SqBarChart',
  parameters: {
    docs: {
      description: {
        component: 'A simple BarChart component',
      },
    },
  },
  component: SqBarChartExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqBarChartExample>

export const Default: Story = {
  args: {
    labelPin: 'Pin',
    percentage: false,
    pinValue: 50,
    total: 100,
    value: 75,
  },
  argTypes: {
    colorBar: {
      control: {
        type: 'color',
      },
    },
  },
}
