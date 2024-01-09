import { Meta, StoryObj } from '@storybook/react'
import StepsExample from './Steps.example'

const meta: Meta<typeof StepsExample> = {
  title: 'Components/Steps',
  component: StepsExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof StepsExample>

export const Default: Story = {
  args: {
    steps: [
      {
        status: 'completed',
      },
      {
        status: 'active',
      },
      {
        status: 'inactive',
      },
    ],
    active: 0,
    color: 'var(--pink)',
    onClick: () => {},
  },
  argTypes: {
    color: {
      description: 'Color of the steps',
      control: {
        type: 'color',
      },
    },
    onClick: {
      description: 'Action when the steps is clicked',
      action: 'clicked',
    },
    active: {
      description: 'Active step',
      control: {
        type: 'number',
      },
    },
    steps: {
      description: 'Steps',
      control: {
        type: 'object',
      },
    },
  },
}
