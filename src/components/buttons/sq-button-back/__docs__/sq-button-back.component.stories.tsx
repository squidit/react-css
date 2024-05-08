import { Meta, StoryObj } from '@storybook/react'
import SqButtonBackExample from './sq-button-back.component.example'

const meta: Meta<typeof SqButtonBackExample> = {
  title: 'Components/Buttons/SqButtonBack',
  parameters: {
    docs: {
      description: {
        component: 'A simple ButtonBack component',
      },
    },
  },
  component: SqButtonBackExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqButtonBackExample>

export const Default: Story = {
  args: {
    children: 'Click me',
  },
}
