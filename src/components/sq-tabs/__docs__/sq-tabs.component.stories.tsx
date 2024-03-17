import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import SqTabsExample from './sq-tabs.component.example'
import SqTab from '../../sq-tab/sq-tab.component'

const meta: Meta<typeof SqTabsExample> = {
  title: 'Components/SqTabs',
  component: SqTabsExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqTabsExample>

export const Default: Story = {}
