import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import SqChartDoughnutExample from './sq-chart-doughnut.component.example'

const meta: Meta<typeof SqChartDoughnutExample> = {
  title: 'Components/SqChartDoughnut',
  parameters: {
    docs: {
      description: {
        component: 'A simple ChartDoughnut component',
      },
    },
  },
  component: SqChartDoughnutExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqChartDoughnutExample>

export const Default: Story = {
  args: {
    data: {
      labels: ['Purple', 'Blue', 'Green'],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3],
          backgroundColor: ['purple', 'blue', 'green'],
          borderColor: ['purple', 'blue', 'green'],
          borderWidth: 1,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          position: 'right',

          labels: {
            usePointStyle: true,
            pointStyle: 'rectRounded',
          },

          title: {
            display: true,

            padding: {
              left: 1200,
            },
          },
        },
      },

      scales: {},
    },
  },
}
