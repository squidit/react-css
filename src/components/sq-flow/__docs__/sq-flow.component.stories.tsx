import React from 'react'

import { Meta, StoryObj } from '@storybook/react'
import SqFlowExample from './sq-flow.component.example'

const meta: Meta<typeof SqFlowExample> = {
  title: 'Components/SqFlow',
  component: SqFlowExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqFlowExample>

export const Default: Story = {
  args: {
    activeColor: 'var(--primary_color)',
    active: 1,
    steps: [{ status: 'Step 1' }, { status: 'Step 2' }, { status: 'Step 3' }],
  },
}
