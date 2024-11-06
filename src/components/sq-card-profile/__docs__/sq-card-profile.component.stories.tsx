import { Meta, StoryObj } from '@storybook/react'
import SqCardProfileExample from './sq-card-profile.component.example'

const meta: Meta<typeof SqCardProfileExample> = {
  title: 'Components/SqCardProfile',
  parameters: {
    docs: {
      description: {
        component: 'A simple BarChart component',
      },
    },
  },
  component: SqCardProfileExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqCardProfileExample>

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
