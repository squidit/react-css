import { Meta, StoryObj } from '@storybook/react'
import SqSocialConnectExample from './sq-social-connect.component.example'

const meta: Meta<typeof SqSocialConnectExample> = {
  title: 'Components/SqSocialConnect',
  component: SqSocialConnectExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqSocialConnectExample>

export const Default: Story = {}
