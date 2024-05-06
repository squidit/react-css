import { Meta, StoryObj } from '@storybook/react'
import SqCalloutExample from './sq-callout.component.example'

const meta: Meta<typeof SqCalloutExample> = {
  title: 'Components/SqCallout',
  parameters: {
    docs: {
      description: {
        component: 'A simple Callout component',
      },
    },
  },
  component: SqCalloutExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqCalloutExample>

export const Default: Story = {
  args: {
    children: 'Content',
    type: 'warning',
    smallIconStyle: true,
    title: 'Title',
    style: {
      width: '300px',
    },
  },
}
