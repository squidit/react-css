import { Meta, StoryObj } from '@storybook/react'
import SqBannerExample from './sq-banner.component.example'

const meta: Meta<typeof SqBannerExample> = {
  title: 'Components/SqBanner',
  parameters: {
    docs: {
      description: {
        component: 'A simple Banner component',
      },
    },
  },
  component: SqBannerExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqBannerExample>

export const Default: Story = {
  args: {
    children: 'This is a banner',
  },
}
