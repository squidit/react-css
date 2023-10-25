import type { Meta, StoryObj } from '@storybook/react';
import LoaderExample from "./Loader.example";

const meta: Meta<typeof LoaderExample> = {
  title: 'Components/Loader',
  component: LoaderExample,
}

export default meta
type Story = StoryObj<typeof LoaderExample>

export const Primary: Story = {
  args: {
    color: 'yellow',
    customSize: '100px',
    size: 'small',
    borderSize: '10px',
  },
}

export const Secondary: Story = {
  args: {
    color: 'red',
    customSize: '200px',
    size: 'bigger',
    borderSize: '20px',
  },
}