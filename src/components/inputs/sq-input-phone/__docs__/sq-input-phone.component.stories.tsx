import { Meta, StoryObj } from '@storybook/react'
import SqInputPhoneExample from './sq-input-phone.component.example'

const meta: Meta<typeof SqInputPhoneExample> = {
  title: 'Components/Inputs/SqInputPhone',
  parameters: {
    docs: {
      description: {
        component: 'A simple InputPhone component',
      },
    },
  },
  component: SqInputPhoneExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqInputPhoneExample>

export const Default: Story = {
  args: {
    label: 'Type a phone',
    required: true,
  },
}
