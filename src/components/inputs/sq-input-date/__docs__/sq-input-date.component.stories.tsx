import { Meta, StoryObj } from '@storybook/react'
import SqInputDateExample from './sq-input-date.component.example'

const meta: Meta<typeof SqInputDateExample> = {
  title: 'Components/Inputs/SqInputDate',
  component: SqInputDateExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqInputDateExample>

export const Default: Story = {}
