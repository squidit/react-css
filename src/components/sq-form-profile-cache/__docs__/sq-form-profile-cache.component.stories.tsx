import { Meta, StoryObj } from '@storybook/react'
import SqFormProfileCacheExample from './sq-form-profile-cache.component.example'

const meta: Meta<typeof SqFormProfileCacheExample> = {
  title: 'Components/SqFormProfileCache',
  parameters: {
    docs: {
      description: {
        component: 'A simple BarChart component',
      },
    },
  },
  component: SqFormProfileCacheExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqFormProfileCacheExample>

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
