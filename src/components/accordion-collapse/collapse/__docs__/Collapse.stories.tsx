import { Meta, StoryObj } from '@storybook/react'
import CollapseExample from './Collapse.example'
import React from 'react'

const meta: Meta<typeof CollapseExample> = {
  title: 'Components/Collapse',
  component: CollapseExample,
  tags: ['autodocs'],
  parameters: { actions: { argTypesRegex: '^on.*' } },
}

export default meta
type Story = StoryObj<typeof CollapseExample>

export const Default: Story = {
  args: {
    title: 'Title',
    open: false,
    headerJustify: 'center',
    headerBorder: '',
    loading: false,
    disabled: false,
    backgroundColor: 'var(--pink)',
    colorIcons: 'var(--neutral_primary)',
    colorBackgroundIcon: 'transparent',
    fontSizeIcon: '0.9rem',
    heightIcon: '',
    className: '',
    style: {},
    bodyBorder: false,
    noPadding: false,
    addMarginLoopCollapse: true,
    onToggleAccordion: (value: any) => value,
    index: 0,
  },
  argTypes: {
    title: {
      description: 'Title of the collapse',
      control: {
        type: 'text',
      },
    },
    open: {
      description: 'Body open',
      control: {
        type: 'boolean',
      },
    },
    loading: {
      description: 'Loading collapse',
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      description: 'Disable collapse',
      control: {
        type: 'boolean',
      },
    },
    headerJustify: {
      description: 'Justify title collapse',
      control: {
        type: 'select',
      },
      options: ['center', 'flex-start', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
    },
    headerBorder: {
      description: 'Style border header',
      control: {
        type: 'text',
      },
    },
    backgroundColor: {
      description: 'Background color header',
      control: {
        type: 'color',
      },
    },
    colorIcons: {
      description: 'Color icon arrow',
      control: {
        type: 'color',
      },
    },
    colorBackgroundIcon: {
      description: 'Background color icon arrow',
      control: {
        type: 'color',
      },
    },
    fontSizeIcon: {
      description: 'Font size icon arrow',
      control: {
        type: 'text',
      },
    },
    heightIcon: {
      description: 'Height icon arrow',
      control: {
        type: 'text',
      },
    },
    className: {
      description: 'Class name collapse',
      control: {
        type: 'text',
      },
    },
    bodyBorder: {
      description: 'Style border body',
      control: {
        type: 'text',
      },
    },
    noPadding: {
      description: 'No padding title',
      control: {
        type: 'boolean',
      },
    },
    addMarginLoopCollapse: {
      description: 'Add margin bottom',
      control: {
        type: 'boolean',
      },
    },
    onToggleAccordion: {
      action: 'onToggleAccordion',
    },
  },
}
