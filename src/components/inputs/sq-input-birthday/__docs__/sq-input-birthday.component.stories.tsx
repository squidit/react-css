import { Meta, StoryObj } from '@storybook/react'
import SqInputBirthdayExample from './sq-input-birthday.component.example'

const meta: Meta<typeof SqInputBirthdayExample> = {
  title: 'Components/Inputs/SqInputBirthday',
  parameters: {
    docs: {
      description: {
        component: 'A simple InputBirthday component',
      },
    },
  },
  component: SqInputBirthdayExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqInputBirthdayExample>

export const Default: Story = {
  args: {
    label: 'Birthday',
    placeholder: 'MM/DD/YYYY',
    type: 'date',
  },
}
