import { Meta, StoryObj } from '@storybook/react'
import SqMenuOptionsExample from './sq-menu-options.component.example'

const meta: Meta<typeof SqMenuOptionsExample> = {
  title: 'Components/SqMenuOptions',
  parameters: {
    docs: {
      description: {
        component: 'A simple MenuOptions component',
      },
    },
  },
  component: SqMenuOptionsExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqMenuOptionsExample>

export const Default: Story = {
  args: {
    menuArray: [
      {
        label: 'Option 1',
        icon: 'chart-line',
        // eslint-disable-next-line no-console
        action: () => console.log('Option 1'),
      },
      {
        label: 'Option 2',
        icon: 'chart-pie',
        // eslint-disable-next-line no-console
        action: () => console.log('Option 2'),
      },
      {
        label: 'Option 3',
        icon: 'chart-bar',
        // eslint-disable-next-line no-console
        action: () => console.log('Option 3'),
      },
    ],
  },
}
