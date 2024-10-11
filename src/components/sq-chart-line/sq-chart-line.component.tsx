'use client'

import React, { HTMLAttributes, useEffect, useRef, useState } from 'react'
import {
  CategoryScale,
  Chart,
  ChartData,
  ChartOptions,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Tooltip,
  Filler,
} from 'chart.js'

import './sq-chart-line.component.scoped.scss'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  data: ChartData
  options?: ChartOptions
}

Chart.register(LineController, Tooltip, PointElement, CategoryScale, LinearScale, LineElement, Filler)

export default function SqChartLine({ className = '', style = {}, id = '', data, options }: Readonly<Props>) {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const [chart, setChart] = useState<Chart | null>(null)
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(() => {
    if (chartRef.current) {
      const addGradient = (ctx) => {
        const gradient = ctx.createLinearGradient(0, 0, 0, 220)
        gradient.addColorStop(0, getComputedStyle(document.documentElement).getPropertyValue('--blue-50'))
        gradient.addColorStop(1, getComputedStyle(document.documentElement).getPropertyValue('--color_bg_box_neutral_primary'))
        return gradient
      }
      const adjustRadiusBasedOnData = (ctx) => {
        const v = ctx.parsed.y
        return v === Math.max(...ctx.chart.data.datasets[0].data) ? 5 : width < 991 ? 0 : 2
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
            data: {
              ...data,
              datasets: [
                ...data.datasets.map((dataset) => ({
                  ...dataset,
                  fill: true,
                  backgroundColor: addGradient(ctx),
                  borderColor: getComputedStyle(document.documentElement).getPropertyValue('--blue-55'),
                  tension: 0.4,
                  borderWidth: 2,
                  pointBackgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--background_secondary'),
                })),
              ],
            },
            options: {
              plugins: {
                legend: {
                  display: false,
                },
                filler: {
                  propagate: false,
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
                  max: Math.max(...(data.datasets[0].data as number[])) + Math.max(...(data.datasets[0].data as number[])) * 0.1,
                  min: Math.min(...(data.datasets[0].data as number[])) - Math.min(...(data.datasets[0].data as number[])) * 0.2,
                  display: false,
                  grid: {
                    display: false,
                  },
                  beginAtZero: true,
                },
              },
              elements: {
                point: {
                  radius: adjustRadiusBasedOnData,
                  hoverRadius: 10,
                  hoverBorderWidth: 2,
                  borderWidth: 3,
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
