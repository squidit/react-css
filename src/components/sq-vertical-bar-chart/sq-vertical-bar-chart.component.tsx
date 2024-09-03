import React from 'react'

import './sq-vertical-bar-chart.component.scoped.scss'

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  height: string
  backgroundColor: string
  label?: React.ReactNode
  tooltip?: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
}

export default ({ height, backgroundColor, label, tooltip = null, size = 'md' }: Props) => {
  return (
    <div
      className="vertical-bar-chart display-flex align-items-center"
      data-tooltip={tooltip}
      data-tooltip-position="center top"
      style={{ pointerEvents: tooltip ? 'auto' : 'none' }}
    >
      <div className={`chart-bar-line background-${backgroundColor} ${size}`} style={{ height, backgroundColor }}></div>
      {label && <div className="chart-bar-label text-center small">{label}</div>}
    </div>
  )
}
