import { Meta, StoryObj } from '@storybook/react'
import SqInputExample from './sq-input.component.example'

const meta: Meta<typeof SqInputExample> = {
  title: 'Components/Inputs/SqInput',
  component: SqInputExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqInputExample>

export const Default: Story = {}
