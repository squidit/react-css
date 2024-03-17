import { Meta, StoryObj } from '@storybook/react'
import SqCollapseExample from './sq-collapse.component.example'
import React from 'react'

const meta: Meta<typeof SqCollapseExample> = {
  title: 'Components/SqCollapse',
  component: SqCollapseExample,
  tags: ['autodocs'],
  parameters: { actions: { argTypesRegex: '^on.*' } },
}

export default meta
type Story = StoryObj<typeof SqCollapseExample>

export const Default: Story = {}
