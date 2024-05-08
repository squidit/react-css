import { Meta, StoryObj } from '@storybook/react'
import SqInputPasswordExample from './sq-input-password.component.example'

const meta: Meta<typeof SqInputPasswordExample> = {
  title: 'Components/Inputs/SqInputPassword',
  parameters: {
    docs: {
      description: {
        component: 'A simple InputPassword component',
      },
    },
  },
  component: SqInputPasswordExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqInputPasswordExample>

export const Default: Story = {
  args: {
    label: 'Type a password',
    showValidation: true,
    required: true,
  },
}
