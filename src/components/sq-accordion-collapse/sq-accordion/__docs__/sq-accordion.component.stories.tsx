import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import SqCollapse from '../../sq-collapse/sq-collapse.component'

import SqAccordionExample from './sq-accordion.component.example'

const meta: Meta<typeof SqAccordionExample> = {
  title: 'Components/SqAccordion',
  component: SqAccordionExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqAccordionExample>

export const Default: Story = {
  args: {
    children: [
      <SqCollapse open={false} title="Title 1" backgroundColor="var(--primary_color)">
        <div>Content HTML</div>
      </SqCollapse>,
      <SqCollapse open={false} title={<span>Title 2</span>} backgroundColor="var(--lilac)">
        <div>Content HTML</div>
      </SqCollapse>,
      <SqCollapse open={false} title="Title 3" backgroundColor="var(--aqua)">
        <div>Content HTML</div>
      </SqCollapse>,
    ],
    onlyOne: false,
  },
}
