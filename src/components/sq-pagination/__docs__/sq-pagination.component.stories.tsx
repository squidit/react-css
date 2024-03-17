import { Meta, StoryObj } from '@storybook/react'
import SqPaginationExample from './sq-pagination.component.example'

const meta: Meta<typeof SqPaginationExample> = {
  title: 'Components/SqPagination',
  component: SqPaginationExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqPaginationExample>

export const Default: Story = {}
