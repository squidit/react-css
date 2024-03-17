import type { Meta, StoryObj } from '@storybook/react'
import SqLoaderExample from './sq-loader.component.example'

/** This component is a loader */
const meta: Meta<typeof SqLoaderExample> = {
  title: 'Components/SqLoader',
  component: SqLoaderExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqLoaderExample>

export const Default: Story = {}
