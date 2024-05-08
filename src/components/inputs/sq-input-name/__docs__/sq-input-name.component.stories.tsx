import { Meta, StoryObj } from '@storybook/react'
import SqInputNameExample from './sq-input-name.component.example'

const meta: Meta<typeof SqInputNameExample> = {
  title: 'Components/Inputs/SqInputName',
  parameters: {
    docs: {
      description: {
        component: 'A simple InputName component',
      },
    },
  },
  component: SqInputNameExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqInputNameExample>

export const Default: Story = {
  args: {
    label: 'Type a Name',
    onTimeout: undefined,
    required: true,
  },
}
