import { Meta, StoryObj } from '@storybook/react'

import SqAccordionExample from './sq-accordion.component.example'

const meta: Meta<typeof SqAccordionExample> = {
  title: 'Components/SqAccordion',
  component: SqAccordionExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqAccordionExample>

export const Default: Story = {}
