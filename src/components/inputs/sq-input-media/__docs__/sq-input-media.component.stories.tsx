import { Meta, StoryObj } from '@storybook/react'
import SqInputMediaExample from './sq-input-media.component.example'

const meta: Meta<typeof SqInputMediaExample> = {
  title: 'Components/Inputs/SqInputMedia',
  parameters: {
    docs: {
      description: {
        component: 'A simple InputMedia component',
      },
    },
  },
  component: SqInputMediaExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqInputMediaExample>

export const Default: Story = {}
