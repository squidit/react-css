import { Meta, StoryObj } from '@storybook/react'
import SqButtonExample from './sq-button.component.example'

const meta: Meta<typeof SqButtonExample> = {
  title: 'Components/Buttons/SqButton',
  parameters: {
    docs: {
      description: {
        component: 'A simple Button component',
      },
    },
  },
  component: SqButtonExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqButtonExample>

export const Default: Story = {
  args: {
    children: 'Click me',
    color: 'primary',
  },
}
