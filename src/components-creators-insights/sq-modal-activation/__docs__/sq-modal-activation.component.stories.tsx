import { Meta, StoryObj } from '@storybook/react'
import SqModalActivationExample from './sq-modal-activation.component.example'

const meta: Meta<typeof SqModalActivationExample> = {
  title: 'Creators Insights/Components/SqModalActivation',
  component: SqModalActivationExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqModalActivationExample>

export const Default: Story = {
  args: {},
}
