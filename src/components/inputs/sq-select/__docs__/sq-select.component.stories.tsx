import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import SqSelectExample from './sq-select.component.example'

const meta: Meta<typeof SqSelectExample> = {
  title: 'Components/Inputs/SqSelect',
  parameters: {
    docs: {
      description: {
        component: 'A simple Select component',
      },
    },
  },
  component: SqSelectExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqSelectExample>

export const Default: Story = {
  args: {
    label: 'Select',
    placeholder: 'Select an option',
    children: (
      <>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </>
    ),
  },
}
