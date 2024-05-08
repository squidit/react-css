import { Meta, StoryObj } from '@storybook/react'
import SqTipExample from './sq-tip.component.example'

const meta: Meta<typeof SqTipExample> = {
  title: 'Components/SqTip',
  parameters: {
    docs: {
      description: {
        component: 'A simple Tip component',
      },
    },
  },
  component: SqTipExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqTipExample>

export const Default: Story = {
  args: {
    message: 'This is a tip',
  },
}
