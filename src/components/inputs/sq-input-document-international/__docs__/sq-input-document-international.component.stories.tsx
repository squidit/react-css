import { Meta, StoryObj } from '@storybook/react'
import SqInputDocumentInternationalExample from './sq-input-document-international.component.example'

const meta: Meta<typeof SqInputDocumentInternationalExample> = {
  title: 'Components/Inputs/SqInputDocumentInternational',
  parameters: {
    docs: {
      description: {
        component: 'A simple InputDocumentInternational component',
      },
    },
  },
  component: SqInputDocumentInternationalExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqInputDocumentInternationalExample>

export const Default: Story = {
  args: {
    label: 'Type a International Document',
    onTimeout: undefined,
    required: true,
  },
}
