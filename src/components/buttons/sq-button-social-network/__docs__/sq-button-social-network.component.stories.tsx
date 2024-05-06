import { Meta, StoryObj } from '@storybook/react'
import SqButtonSocialNetworkExample from './sq-button-social-network.component.example'

const meta: Meta<typeof SqButtonSocialNetworkExample> = {
  title: 'Components/Buttons/SqButtonSocialNetwork',
  parameters: {
    docs: {
      description: {
        component: 'A simple Button component',
      },
    },
  },
  component: SqButtonSocialNetworkExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqButtonSocialNetworkExample>

export const Default: Story = {}
