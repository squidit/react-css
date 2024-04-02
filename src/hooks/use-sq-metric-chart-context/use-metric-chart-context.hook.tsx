import { createContext, useContext } from 'react'
import { MetricsDetails } from '@/interfaces'

export interface MetricChartProps {
  metric: MetricsDetails
  percentage?: boolean
}

interface Props extends React.PropsWithChildren {
  value: MetricChartContext
}

export interface MetricChartContext {
  state: MetricChartProps
  setState: (newState: MetricChartProps) => void
}

const MetricChartContext = createContext<MetricChartContext | undefined>(undefined)

export const MetricChartProvider = ({ children, value }: Props) => {
  return <MetricChartContext.Provider value={value}>{children}</MetricChartContext.Provider>
}

const useMetricChartContext = () => {
  const context = useContext(MetricChartContext)
  if (!context) {
    throw new Error('useMetricChartContext must be used within a MetricChartProvider')
  }
  return context
}

export default useMetricChartContext
