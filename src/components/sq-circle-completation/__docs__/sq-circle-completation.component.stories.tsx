import { Meta, StoryObj } from '@storybook/react'
import SqCircleCompletationExample from './sq-circle-completation.component.example'

const meta: Meta<typeof SqCircleCompletationExample> = {
  title: 'Components/SqCircleCompletation',
  parameters: {
    docs: {
      description: {
        component: 'A simple CircleCompletation component',
      },
    },
  },
  component: SqCircleCompletationExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqCircleCompletationExample>

export const Default: Story = {
  args: {
    value: 50,
    size: 'medium',
  },
}
