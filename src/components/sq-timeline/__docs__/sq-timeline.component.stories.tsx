import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import SqTimelineExample from './sq-timeline.component.example'
import Timeline from '../sq-timeline.component'

const meta: Meta<typeof SqTimelineExample> = {
  title: 'Components/SqTimeline',
  parameters: {
    docs: {
      description: {
        component: 'A simple Timeline component',
      },
    },
  },
  component: SqTimelineExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqTimelineExample>

export const Default: Story = {
  args: {
    children: [
      <Timeline.Item key="1" title="Create a services site">
        <p>2015-09-01</p>
      </Timeline.Item>,
      <Timeline.Item key="2" title="Solve initial network problems">
        <p>2015-09-01</p>
      </Timeline.Item>,
      <Timeline.Item key="3" title="Technical testing">
        <p>2015-09-01</p>
      </Timeline.Item>,
    ],
  },
}
