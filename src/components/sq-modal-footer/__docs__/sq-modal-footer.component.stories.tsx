import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import SqModalFooterExample from './sq-modal-footer.component.example'

const meta: Meta<typeof SqModalFooterExample> = {
  title: 'Components/SqModalFooter',
  component: SqModalFooterExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqModalFooterExample>

export const Default: Story = {
  args: {
    children: 'Content',
    header: 'Title',
    onOpenChange: fn(),
  },
}
