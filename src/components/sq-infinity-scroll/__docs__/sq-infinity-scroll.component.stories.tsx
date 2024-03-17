import { Meta, StoryObj } from '@storybook/react'
import SqInfinityScrollExample from './sq-infinity-scroll.component.example'

const meta: Meta<typeof SqInfinityScrollExample> = {
  title: 'Components/SqInfinityScroll',
  component: SqInfinityScrollExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqInfinityScrollExample>

export const Default: Story = {}
