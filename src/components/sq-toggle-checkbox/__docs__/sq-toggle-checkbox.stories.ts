import type { Meta, StoryObj } from '@storybook/react'

import SqToggleCheckboxExample from './sq-toggle-checkbox.component.example'

const meta: Meta<typeof SqToggleCheckboxExample> = {
  title: 'Components/SqToggleCheckbox',
  parameters: {
    docs: {
      description: {
        component: 'A simple Toggle Checkbox component',
      },
    },
  },
  component: SqToggleCheckboxExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqToggleCheckboxExample>

export const Default: Story = {
  args: {
    type: 'checkbox',
    name: 'toggle-checkbox',
    id: 'toggle-checkbox',
    checked: false,
    disabled: false,
    readonly: false,
    required: true,
    colorBackground: 'var(--primary_color)',
    hideInput: false,
    block: true,
    toggle: true,
    direction: 'left',
    toggleSwitch: true,
    label: 'Toggle Checkbox',
  },
}
