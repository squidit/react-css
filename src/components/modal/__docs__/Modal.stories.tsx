import { Meta, StoryObj } from '@storybook/react'
import ModalExample from './Modal.example'

const meta: Meta<typeof ModalExample> = {
  title: 'Components/Modal',
  component: ModalExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ModalExample>

export const Default: Story = {
  argTypes: {
    modalClass: {
      description: 'Class of the modal',
      control: {
        type: 'text',
      },
    },
    modalSize: {
      description: 'Modal size Squid/CSS',
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg', 'xl'],
    },
    buttonClose: {
      description: 'Show or hidden button close',
      control: {
        type: 'boolean',
      },
    },
    backdrop: {
      description: 'Enable click on backdrop to close modal',
      control: {
        type: 'select',
      },
      options: ['static', 'cliclable'],
    },
    open: {
      description: 'Open modal',
      control: {
        type: 'boolean',
      },
    },
    header: {
      description: 'HTML or JSX to header render',
      control: {
        type: 'text',
      },
    },
    footer: {
      description: 'HTML or JSX to footer render',
      control: {
        type: 'text',
      },
    },
    onCloseChange: {
      description: 'Action when the modal is closed',
      action: 'closed',
    },
    onOpenChange: {
      description: 'Action when the modal is opened',
      action: 'opened',
    },
    onLeftPress: {
      description: 'Action when the left button is pressed',
      action: 'pressed',
    },
    onRightPress: {
      description: 'Action when the right button is pressed',
      action: 'pressed',
    },
    forceMobileNoMargin: {
      description: 'Force mobile no margin',
      control: {
        type: 'boolean',
      },
    },
  },
}
