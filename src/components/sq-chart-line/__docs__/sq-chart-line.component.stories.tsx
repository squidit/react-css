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
  { count: 450, date: '2024-02-02T00:00:00.000Z', total: 1000 },
  { count: 500, date: '2024-02-03T00:00:00.000Z', total: 1500 },
  { count: 200, date: '2024-02-04T00:00:00.000Z', total: 1700 },
  {
    count: 700,
    date: '2024-02-05T00:00:00.000Z',
    total: 2400,
  },
  { count: 300, date: '2024-02-06T00:00:00.000Z', total: 2700 },
  { count: 600, date: '2024-02-07T00:00:00.000Z', total: 3300 },
  { count: 900, date: '2024-02-08T00:00:00.000Z', total: 4200 },
  { count: 100, date: '2024-02-09T00:00:00.000Z', total: 4300 },
  { count: 800, date: '2024-02-10T00:00:00.000Z', total: 5100 },
  { count: 400, date: '2024-02-11T00:00:00.000Z', total: 5500 },
  { count: 1000, date: '2024-02-12T00:00:00.000Z', total: 6500 },
  { count: 300, date: '2024-02-13T00:00:00.000Z', total: 6800 },
  { count: 600, date: '2024-02-14T00:00:00.000Z', total: 7400 },
  { count: 200, date: '2024-02-15T00:00:00.000Z', total: 7600 },
  { count: 500, date: '2024-02-16T00:00:00.000Z', total: 8100 },
  { count: 700, date: '2024-02-17T00:00:00.000Z', total: 8800 },
  { count: 800, date: '2024-02-18T00:00:00.000Z', total: 9600 },
  { count: 1000, date: '2024-02-19T00:00:00.000Z', total: 10600 },
]

export const Default: Story = {
  args: {
    data: {
      labels: datasets?.map((d) => new Intl.DateTimeFormat('en-us').format(new Date(d.date))),
      datasets: [
        {
          label: 'Engajamento Diário',
          data: datasets?.map((d) => d.count),
        },
      ],
    },
  },
}
