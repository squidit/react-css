import { Meta, StoryObj } from '@storybook/react'
import SqSelectorExample from './sq-selector.component.example'

const meta: Meta<typeof SqSelectorExample> = {
  title: 'Components/Inputs/SqSelector',
  parameters: {
    docs: {
      description: {
        component: 'A simple Selector component',
      },
    },
  },
  component: SqSelectorExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqSelectorExample>

export const Default: Story = {
  args: {
    rightLabel: 'Select',
  },
}
