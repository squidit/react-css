import { Meta, StoryObj } from '@storybook/react'
import SqInputDateSimple from './sq-input-date-simple.example'

const meta: Meta<typeof SqInputDateSimple> = {
  title: 'Components/Inputs/SqInputDateSimple',
  component: SqInputDateSimple,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqInputDateSimple>

export const Default: Story = {
  args: {
    label: 'Date',
    placeholder: 'Date',
  },
}
