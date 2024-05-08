import { Meta, StoryObj } from '@storybook/react'
import SqOverlayExample from './sq-overlay.component.example'

const meta: Meta<typeof SqOverlayExample> = {
  title: 'Components/SqOverlay',
  parameters: {
    docs: {
      description: {
        component: 'A simple Overlay component',
      },
    },
  },
  component: SqOverlayExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqOverlayExample>

export const Default: Story = {
  args: {
    header: 'Overlay header',
    children: 'Overlay content',
    footer: 'Overlay footer',
  },
}
