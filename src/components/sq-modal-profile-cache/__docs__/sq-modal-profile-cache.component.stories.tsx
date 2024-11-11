import { Meta, StoryObj } from '@storybook/react'
import SqModalProfileCacheExample from './sq-modal-profile-cache.component.example'

const meta: Meta<typeof SqModalProfileCacheExample> = {
  title: 'Components/SqModalProfileCache',
  parameters: {
    docs: {
      description: {
        component:
          'The SqModalProfileCache component is a modal used to display and update cache values for different social network fields. It includes a profile card and a form for updating cache values. The modal also handles state changes and resizing events.',
      },
    },
  },
  component: SqModalProfileCacheExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqModalProfileCacheExample>

export const Default: Story = {
  args: {
    labelPin: 'Pin',
    percentage: false,
    pinValue: 50,
    total: 100,
    value: 75,
  },
  argTypes: {
    colorBar: {
      control: {
        type: 'color',
      },
    },
  },
}
