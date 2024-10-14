import { Meta, StoryObj } from '@storybook/react'
import SqBarChartPercentExample from './sq-bar-chart-percent.component.example'

const meta: Meta<typeof SqBarChartPercentExample> = {
  title: 'Components/SqBarChartPercent',
  parameters: {
    docs: {
      description: {
        component: 'A simple BarChartPercent component',
      },
    },
  },
  component: SqBarChartPercentExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqBarChartPercentExample>

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
