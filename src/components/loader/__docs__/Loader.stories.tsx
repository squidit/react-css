import type { Meta, StoryObj } from '@storybook/react'
import LoaderExample from './Loader.example'

/** This component is a loader */
const meta: Meta<typeof LoaderExample> = {
  title: 'Components/Loader',
  component: LoaderExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LoaderExample>

export const Default: Story = {
  args: {
    color: '#E94589',
    customSize: '50px',
    size: 'small',
    borderSize: '4px',
  },
}
