import { Meta, StoryObj } from '@storybook/react'
import AccordionExample from './Accordion.example'

const meta: Meta<typeof AccordionExample> = {
  title: 'Components/Accordion',
  component: AccordionExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AccordionExample>

export const Default: Story = {
  args: {
    openFirst: true,
    onlyOne: true,
    containerCollapseClass: 'container-collapse',
  },
  argTypes: {
    openFirst: {
      description: 'Open first collapse',
      control: {
        type: 'boolean',
      },
    },
    onlyOne: {
      description: 'Only one collapse open',
      control: {
        type: 'boolean',
      },
    },
    containerCollapseClass: {
      description: 'Class name for container collapse',
      control: {
        type: 'text',
      },
    },
  },
}
