import { Meta, StoryObj } from '@storybook/react'
import SqInputDocumentCpfExample from './sq-input-document-cpf.component.example'

const meta: Meta<typeof SqInputDocumentCpfExample> = {
  title: 'Components/Inputs/SqInputDocumentCpf',
  parameters: {
    docs: {
      description: {
        component: 'A simple InputDocumentCpf component',
      },
    },
  },
  component: SqInputDocumentCpfExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqInputDocumentCpfExample>

export const Default: Story = {
  args: {
    label: 'Type a CPF',
    onTimeout: undefined,
    required: true,
  },
}
