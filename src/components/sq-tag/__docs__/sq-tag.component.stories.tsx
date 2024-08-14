import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import SqTagExample from './sq-tag.component.example'

const meta: Meta<typeof SqTagExample> = {
  title: 'Components/SqTag',
  parameters: {
    docs: {
      description: {
        component: 'A simple Tag component',
      },
    },
  },
  component: SqTagExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqTagExample>

export const Default: Story = {
  args: {
    labels: ['Label 1'],
    icon: <i className="fa-regular fa-camera-retro" />,
    title: 'This is a tag',
  },
}
