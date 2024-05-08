import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import SqTinyCalendarExample from './sq-tiny-calendar.component.example'
import SqTinyCalendar from '../sq-tiny-calendar.component'

const meta: Meta<typeof SqTinyCalendarExample> = {
  title: 'Components/SqTinyCalendar',
  parameters: {
    docs: {
      description: {
        component: 'A simple TinyCalendar component',
      },
    },
  },
  component: SqTinyCalendarExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqTinyCalendarExample>

export const Default: Story = {
  args: {
    dateString: new Date().toISOString(),
    children: (
      <div>
        <SqTinyCalendar.Day />
        <SqTinyCalendar.Month className="text-big" />
        <SqTinyCalendar.Year />
      </div>
    ),
  },
}
