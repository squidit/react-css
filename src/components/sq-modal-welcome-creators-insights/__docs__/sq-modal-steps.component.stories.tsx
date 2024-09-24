import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import SqModalExample from './sq-modal-steps.component.example'
import { fn } from '@storybook/test'

const meta: Meta<typeof SqModalExample> = {
  title: 'Components/SqModalWelcomeCreatorsInsights',
  component: SqModalExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqModalExample>

export const Default: Story = {
  args: {
    // onOpenChange: fn(),
    // buttonClose: false,
    // pages: [
    //   <div key="1">
    //     <button>prev</button>
    //     <button>next</button>
    //   </div>,
    //   <div key="2">Page 2</div>,
    //   <div key="3">Page 3</div>,
    // ],
  },
}
