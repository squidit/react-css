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
      <SqCollapse
        open={false}
        title={<span style={{ color: 'var(--background)' }}>Title 1</span>}
        backgroundColor="var(--primary_color)"
        colorIcons="var(--background)"
      >
        <div>Content HTML</div>
      </SqCollapse>,
      <SqCollapse
        open={false}
        title={<span style={{ color: 'var(--background)' }}>Title 2</span>}
        backgroundColor="var(--lilac)"
        colorIcons="var(--background)"
      >
        <div>Content HTML</div>
      </SqCollapse>,
      <SqCollapse
        open={false}
        title={<span style={{ color: 'var(--background)' }}>Title 3</span>}
        backgroundColor="var(--aqua)"
        colorIcons="var(--background)"
      >
        <div>Content HTML</div>
      </SqCollapse>,
    ],
    onlyOne: false,
  },
}
