import { Meta, StoryObj } from '@storybook/react'
import SqInsufficientDataExample from './sq-insufficient-data.component.example'

const meta: Meta<typeof SqInsufficientDataExample> = {
  title: 'Creators Insights/Components/SqInsufficientData',
  component: SqInsufficientDataExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqInsufficientDataExample>

export const Default: Story = {
  args: {},
}
