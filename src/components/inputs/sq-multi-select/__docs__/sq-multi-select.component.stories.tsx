import { Meta, StoryObj } from '@storybook/react'
import SqMultiSelectExample from './sq-multi-select.component.example'

const meta: Meta<typeof SqMultiSelectExample> = {
  title: 'Components/Inputs/SqMultiSelect',
  parameters: {
    docs: {
      description: {
        component: 'A simple MultiSelect component',
      },
    },
  },
  component: SqMultiSelectExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqMultiSelectExample>

export const Default: Story = {
  args: {
    label: 'Select',
    options: [
      { id: 1, label: 'Option 1' },
      { id: 2, label: 'Option 2' },
      { id: 3, label: 'Option 3' },
    ],
  },
}
