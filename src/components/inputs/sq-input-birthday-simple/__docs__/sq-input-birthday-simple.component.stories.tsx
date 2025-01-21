import { Meta, StoryObj } from '@storybook/react'
import SqInputBirthdaySimple from './sq-input-birthday-simple.example'

const meta: Meta<typeof SqInputBirthdaySimple> = {
  title: 'Components/Inputs/SqInputBirthdaySimple',
  component: SqInputBirthdaySimple,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqInputBirthdaySimple>

export const Default: Story = {
  args: {
    label: 'Date',
    placeholder: 'Date',
  },
}
