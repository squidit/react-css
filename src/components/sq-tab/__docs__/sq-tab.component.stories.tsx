import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import SqTabExample from './sq-tab.component.example'

const meta: Meta<typeof SqTabExample> = {
  title: 'Components/SqTab',
  component: SqTabExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqTabExample>

export const Default: Story = {}
