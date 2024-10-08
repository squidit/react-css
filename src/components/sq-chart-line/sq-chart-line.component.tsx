import React, { HTMLAttributes, useEffect, useRef, useState } from 'react'
import {
  ArcElement,
  BubbleController,
  CategoryScale,
  Chart,
  ChartData,
  ChartOptions,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js'

import './sq-chart-line.component.scoped.scss'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  data: ChartData
  options?: ChartOptions
}

Chart.register(ArcElement, LineController, Legend, Tooltip, PointElement, BubbleController, CategoryScale, LinearScale, LineElement)

export default function SqChartLine({ className = '', style = {}, id = '', data, options }: Props) {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const [chart, setChart] = useState<Chart | null>(null)
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(() => {
    if (chartRef.current) {
      const addGradient = (ctx) => {
        const gradient = ctx.createLinearGradient(0, 0, 0, 220)
        gradient.addColorStop(0, 'rgba(54, 162, 235)')
        gradient.addColorStop(1, 'rgba(54, 162, 235, 0)')
        return gradient
      }
      const adjustRadiusBasedOnData = (ctx) => {
        const v = ctx.parsed.y
        return v === Math.max(...ctx.chart.data.datasets[0].data) ? 5 : 0
      }
      if (chart) {
        chart.destroy()
      }
      const ctx = chartRef.current.getContext('2d')
      const chartLine = Chart.getChart(chartRef.current)
      if (chartLine) {
        chartLine.destroy()
      }
      if (ctx) {
        setChart(
          new Chart(ctx, {
            type: 'line',
            data,
            options: {
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    display: false,
                  },
                  border: {
                    display: false,
                  },
                },
                y: {
                  display: false,
                  grid: {
                    display: false,
                  },
                  beginAtZero: true,
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                  borderColor: 'rgba(54, 162, 235)',
                  fill: true,
                  backgroundColor: addGradient(ctx),
                },
                point: {
                  radius: adjustRadiusBasedOnData,
                  hoverRadius: 10,
                  hoverBorderWidth: 2,
                  borderWidth: 3,
                  backgroundColor: 'white',
                  borderColor: 'rgba(54, 162, 235)',
                },
              },
              responsive: true,
              ...options,
            },
          }),
        )
      }
    }
    return () => {
      if (chart) {
        chart.destroy()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, width, height])

  useEffect(() => {
    const updateHeight = () => {
      setHeight(window?.innerHeight)
    }
    const updateWidth = () => {
      setWidth(window?.innerWidth)
    }
    const beforePrintHandler = () => {
      for (const id in Chart.instances) {
        Chart.instances[id].resize(600, 600)
      }
    }
    const afterPrintHandler = () => {
      for (const id in Chart.instances) {
        Chart.instances[id].resize()
      }
    }
    window.addEventListener('resize', updateHeight)
    window.addEventListener('resize', updateWidth)
    window.addEventListener('beforeprint', beforePrintHandler)
    window.addEventListener('afterprint', afterPrintHandler)
    return () => {
      window.removeEventListener('resize', updateHeight)
      window.removeEventListener('resize', updateWidth)
      window.removeEventListener('beforeprint', beforePrintHandler)
      window.removeEventListener('afterprint', afterPrintHandler)
    }
  })

  return (
    <div className={`chart-line ${className}`} style={style} id={id}>
      <canvas ref={chartRef} />
    </div>
  )
}
