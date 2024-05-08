import { Meta, StoryObj } from '@storybook/react'
import SqCardToCopyExample from './sq-card-to-copy.component.example'

const meta: Meta<typeof SqCardToCopyExample> = {
  title: 'Components/SqCardToCopy',
  parameters: {
    docs: {
      description: {
        component: 'A simple CardToCopy component',
      },
    },
  },
  component: SqCardToCopyExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqCardToCopyExample>

export const Default: Story = {
  args: {
    title: 'Title',
    content: 'Content',
  },
}
