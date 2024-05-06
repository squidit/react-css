import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import SqModalExample from './sq-modal.component.example'

const meta: Meta<typeof SqModalExample> = {
  title: 'Components/SqModal',
  component: SqModalExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqModalExample>

export const Default: Story = {
  args: {
    children: 'Content',
    header: 'Title',
  },
}
