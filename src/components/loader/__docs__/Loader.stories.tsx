import type { Meta, StoryObj } from '@storybook/react';
import LoaderExample from "./Loader.example";

const meta: Meta<typeof LoaderExample> = {
  title: 'Components/Loader',
  component: LoaderExample,
}

export default meta
type Story = StoryObj<typeof LoaderExample>

export const Default: Story = {
  args: {
    color: 'squid',
    customSize: '50px',
    size: 'small',
    borderSize: '4px',
  },
}