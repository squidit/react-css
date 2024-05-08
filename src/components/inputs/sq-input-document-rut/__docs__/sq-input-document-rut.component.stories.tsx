import { Meta, StoryObj } from '@storybook/react'
import SqInputDocumentRutExample from './sq-input-document-rut.component.example'

const meta: Meta<typeof SqInputDocumentRutExample> = {
  title: 'Components/Inputs/SqInputDocumentRut',
  parameters: {
    docs: {
      description: {
        component: 'A simple InputDocumentRut component',
      },
    },
  },
  component: SqInputDocumentRutExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqInputDocumentRutExample>

export const Default: Story = {
  args: {
    label: 'Type a RUT',
    onTimeout: undefined,
    required: true,
  },
}
