import { Meta, StoryObj } from '@storybook/react'
import ButtonExample from './Button.example'

const meta: Meta<typeof ButtonExample> = {
  title: 'Components/Button',
  parameters: {
    docs: {
      description: {
        component: 'A simple Button component',
      },
    },
  },
  component: ButtonExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ButtonExample>

export const Default: Story = {
  args: {
    color: 'pink',
    size: 'md',
    disabled: false,
    inverted: false,
    invertedHover: false,
    rounded: false,
    loading: false,
    hideChildrenOnLoading: false,
    id: 'random-id',
    width: '',
    customPadding: '',
    borderStyle: '',
    borderColor: '',
    textColor: '',
  },
  argTypes: {
    color: {
      description: 'Color of the button',
      control: {
        type: 'color',
      },
    },
    size: {
      description: 'Size of the button',
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg', 'xl'],
    },
    onClick: {
      description: 'Action when the button is clicked',
      action: 'clicked',
    },
    disabled: {
      description: 'Disable the button',
      control: {
        type: 'boolean',
      },
    },
    inverted: {
      description: 'Invert the button',
      control: {
        type: 'boolean',
      },
    },
    invertedHover: {
      description: 'Invert the button when hovered',
      control: {
        type: 'boolean',
      },
    },
    rounded: {
      description: 'Round the button',
      control: {
        type: 'boolean',
      },
    },
    loading: {
      description: 'Show the loader',
      control: {
        type: 'boolean',
      },
    },
    hideChildrenOnLoading: {
      description: 'Hide the children when loading',
      control: {
        type: 'boolean',
      },
    },
    id: {
      description: 'Id of the button',
      control: {
        type: 'text',
      },
    },
    width: {
      description: 'Width of the button',
      control: {
        type: 'text',
      },
    },
    customPadding: {
      description: 'Custom padding of the button',
      control: {
        type: 'text',
      },
    },
    borderStyle: {
      description: 'Border style of the button',
      control: {
        type: 'text',
      },
    },
    borderColor: {
      description: 'Border color of the button',
      control: {
        type: 'color',
      },
    },
    textColor: {
      description: 'Text color of the button',
      control: {
        type: 'color',
      },
    },
  },
}
