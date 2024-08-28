import { ArcElement, BubbleController, Chart, ChartData, DoughnutController, Legend, PointElement, Tooltip, ChartOptions } from 'chart.js'
import { useEffect, useRef, useState } from 'react'

import './sq-chart-doughnut.component.scss'

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  data: ChartData
  options?: ChartOptions
  center?: React.ReactNode
}

Chart.register(ArcElement, DoughnutController, Legend, Tooltip, PointElement, BubbleController)
Chart.overrides.doughnut.cutout = '80%'

export default ({ className = '', style = {}, id = '', data, options, center }: Props) => {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const [chart, setChart] = useState<Chart | null>(null)
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(() => {
    if (chartRef.current) {
      if (chart) {
        chart.destroy()
      }
      const ctx = chartRef.current.getContext('2d')
      const chartDoughnut = Chart.getChart(chartRef.current)
      if (chartDoughnut) {
        chartDoughnut.destroy()
      }
      if (ctx) {
        setChart(
          new Chart(ctx, {
            type: 'doughnut',
            data,
            options: {
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
    <div className={`chart-doughnut ${className}`} style={style} id={id}>
      {center ? <span className="center-text">{center}</span> : null}
      <canvas ref={chartRef} />
    </div>
  )
}
