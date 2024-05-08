import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import SqInputDocumentCnpjExample from './sq-input-document-cnpj.component.example'

const meta: Meta<typeof SqInputDocumentCnpjExample> = {
  title: 'Components/Inputs/SqInputDocumentCnpj',
  parameters: {
    docs: {
      description: {
        component: 'A simple InputDocumentCnpj component',
      },
    },
  },
  component: SqInputDocumentCnpjExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqInputDocumentCnpjExample>

export const Default: Story = {
  args: {
    label: 'Type a CNPJ',
    onTimeout: undefined,
    required: true,
  },
}
