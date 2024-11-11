import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import SqModalFooterExample from './sq-modal-footer.component.example'

const meta: Meta<typeof SqModalFooterExample> = {
  title: 'Components/SqModalFooter',
  component: SqModalFooterExample,
  parameters: {
    docs: {
      description: {
        component:
          'The SqModalFooter component is a footer for modals that includes buttons for canceling and submitting changes. It handles the state of the buttons based on whether values have been filled and changed.',
      },
    },
  },
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
