import { Meta, StoryObj } from '@storybook/react'
import PaginationExample from './Pagination.example'

const meta: Meta<typeof PaginationExample> = {
  title: 'Components/Pagination',
  component: PaginationExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PaginationExample>

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 3,
    onPageChange: () => {},
    showPages: 4,
  },
  argTypes: {
    currentPage: {
      description: 'Current page',
      control: {
        type: 'number',
      },
      defaultValue: 1,
    },
    totalPages: {
      description: 'Total pages',
      control: {
        type: 'number',
      },
    },
    onPageChange: {
      description: 'Action when the page is changed',
      action: 'clicked',
    },
    showPages: {
      description: 'Number of pages to show',
      control: {
        type: 'number',
      },
    },
  },
}
