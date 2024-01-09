import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import TabsExample from './Tabs.example'
import Tab from '../../tab/tab.component'

const meta: Meta<typeof TabsExample> = {
  title: 'Components/Tabs',
  component: TabsExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TabsExample>

export const Default: Story = {
  args: {
    children: [<Tab title="title 1">Content 1</Tab>, <Tab title="title 2">Content 2</Tab>],
    noContent: false,
    height: 'initial',
    maxWidth: 'initial',
    margin: '0',
    boxShadow: false,
    selectStyle: false,
    lineStyle: false,
    tabsCenter: false,
    tabsWidth: false,
    defaultActiveIndex: 0,
    onChange: () => {},
  },
  argTypes: {
    children: {
      description: 'Children of the tab',
      control: {
        type: 'object',
      },
    },
    noContent: {
      description: 'Hide the tab content and shows only the header',
      control: {
        type: 'boolean',
      },
    },
    height: {
      description: 'Height on tabs container',
      control: {
        type: 'text',
      },
    },
    maxWidth: {
      description: 'Max width on tabs container',
      control: {
        type: 'text',
      },
    },
    margin: {
      description: 'Margin on tabs container',
      control: {
        type: 'text',
      },
    },
    boxShadow: {
      description: 'Add `box-shadow` to tabs container',
      control: {
        type: 'boolean',
      },
    },
    selectStyle: {
      description: 'Select style from styleguide',
      control: {
        type: 'boolean',
      },
    },
    lineStyle: {
      description: 'Line style from styleguide',
      control: {
        type: 'boolean',
      },
    },
    tabsCenter: {
      description: 'Center the tabs',
      control: {
        type: 'boolean',
      },
    },
    tabsWidth: {
      description: 'Change the flex to do tabs growing',
      control: {
        type: 'text',
      },
    },
    defaultActiveIndex: {
      description: 'Default index to start tabs',
      control: {
        type: 'number',
      },
    },
    onChange: {
      description: 'Action when the tabs is changed',
      action: 'changed',
    },
  },
}
