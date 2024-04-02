import { Meta, StoryObj } from '@storybook/react'
import SqBorderWithIconExample from './sq-border-with-icon.component.example'

const meta: Meta<typeof SqBorderWithIconExample> = {
  title: 'Components/SqBorderWithIcon',
  parameters: {
    docs: {
      description: {
        component: 'A simple BorderWithIcon component',
      },
    },
  },
  component: SqBorderWithIconExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqBorderWithIconExample>

export const Default: Story = {}
