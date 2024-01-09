import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import TabExample from './Tab.example'

const meta: Meta<typeof TabExample> = {
  title: 'Components/Tab',
  component: TabExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TabExample>

export const Default: Story = {
  args: {
    children: <p className="red">content</p>,
    title: 'Tab',
    disabled: false,
    height: 'initial',
    className: '',
    active: false,
    onClick: () => {},
  },
  argTypes: {
    children: {
      description: 'Children of the tab',
      control: {
        type: 'object',
      },
    },
    title: {
      description: 'Title of the tab',
      control: {
        type: 'text',
      },
    },
    active: {
      description: 'Active tab',
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      description: 'Disabled tab',
      control: {
        type: 'boolean',
      },
    },
    height: {
      description: 'Height of the tab',
      control: {
        type: 'text',
      },
    },
    className: {
      description: 'Class name of the tab',
      control: {
        type: 'text',
      },
    },
  },
}
