import { Meta, StoryObj } from '@storybook/react'
import SqInputDigitsExample from './sq-input-digits.component.example'

const meta: Meta<typeof SqInputDigitsExample> = {
  title: 'Components/Inputs/SqInputDigits',
  parameters: {
    docs: {
      description: {
        component: 'A simple InputDigits component',
      },
    },
  },
  component: SqInputDigitsExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqInputDigitsExample>

export const Default: Story = {
  args: {
    label: 'Type a number',
    placeholder: '1234',
  },
}
