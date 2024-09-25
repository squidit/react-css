import type { Meta, StoryObj } from '@storybook/react'

import SqToggleCheckboxGroupExample from './sq-toggle-checkbox-group.component.example'

const meta: Meta<typeof SqToggleCheckboxGroupExample> = {
  title: 'Components/SqToggleCheckboxGroup',
  parameters: {
    docs: {
      description: {
        component: 'A simple Toggle Checkbox Group component',
      },
    },
  },
  component: SqToggleCheckboxGroupExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqToggleCheckboxGroupExample>

export const Default: Story = {
  args: {
    defaultValue: 'posts',
    contentList: [
      {
        label: 'Posts',
        value: 'posts',
        id: '1',
      },
      {
        label: 'Stories',
        value: 'stories',
        id: '2',
      },
    ],
    colorSelector: 'var(--primary_color)',
    name: 'toggle-checkbox-group',
  },
}
