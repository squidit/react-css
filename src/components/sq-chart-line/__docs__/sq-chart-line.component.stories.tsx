import { Meta, StoryObj } from '@storybook/react'
import SqChartLineExample from './sq-chart-line.component.example'

const meta: Meta<typeof SqChartLineExample> = {
  title: 'Components/SqChartLine',
  parameters: {
    docs: {
      description: {
        component: 'A simple ChartLine component',
      },
    },
  },
  component: SqChartLineExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqChartLineExample>

// array from dates in string format
const datasets = [
  { count: 0, date: '2024-02-05T00:00:00.000Z', total: 1390 },
  {
    count: 1,
    date: '2024-02-06T00:00:00.000Z',
    total: 1391,
  },
  {
    count: 2,
    date: '2024-02-07T00:00:00.000Z',
    total: 1393,
  },
  {
    count: 0,
    date: '2024-02-08T00:00:00.000Z',
    total: 1393,
  },
  {
    count: 1,
    date: '2024-02-09T00:00:00.000Z',
    total: 1394,
  },
]

export const Default: Story = {
  args: {
    data: {
      labels: datasets?.map((d) => new Intl.DateTimeFormat('en-us', { day: 'numeric' }).format(new Date(d.date))),
      datasets: [
        {
          label: 'Engajamento Diário',
          data: datasets?.map((d) => d.count),
        },
      ],
    },
  },
}
