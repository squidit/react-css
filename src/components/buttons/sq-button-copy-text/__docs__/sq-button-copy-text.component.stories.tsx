import { Meta, StoryObj } from '@storybook/react'
import SqButtonCopyTextExample from './sq-button-copy-text.component.example'

const meta: Meta<typeof SqButtonCopyTextExample> = {
  title: 'Components/Buttons/SqButtonCopyText',
  parameters: {
    docs: {
      description: {
        component: 'A simple ButtonCopyText component',
      },
    },
  },
  component: SqButtonCopyTextExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqButtonCopyTextExample>

export const Default: Story = {
  args: {
    content: 'Copy me',
  },
}
