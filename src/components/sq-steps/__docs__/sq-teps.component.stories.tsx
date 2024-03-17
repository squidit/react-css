import { Meta, StoryObj } from '@storybook/react'
import SqStepsExample from './sq-teps.component.example'

const meta: Meta<typeof SqStepsExample> = {
  title: 'Components/SqSteps',
  component: SqStepsExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqStepsExample>

export const Default: Story = {}
