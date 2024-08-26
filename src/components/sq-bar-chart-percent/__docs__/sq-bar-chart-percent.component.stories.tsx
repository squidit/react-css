import { Meta, StoryObj } from '@storybook/react'
import SqBarChartExample from './sq-bar-chart-percent.component.example'

const meta: Meta<typeof SqBarChartExample> = {
  title: 'Components/SqBarChartPercent',
  parameters: {
    docs: {
      description: {
        component: 'A simple BarChartPercent component',
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
    percentage: true,
    colorBar: 'var(--primary_color)',
    label: 'Example',
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
