import React from 'react'

import './sq-vertical-bar-chart.component.scoped.scss'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  height: string
  backgroundColor: string
  label?: string
  tooltip?: React.ReactNode
}

export default ({ height, backgroundColor, label, tooltip = null }: Props) => {
  return (
    <div data-tooltip={tooltip}>
      <div className={`chart-bar-line background-${backgroundColor}`} style={{ height, backgroundColor }}></div>
      {label && <div className="chart-bar-label text-center">{label}</div>}
    </div>
  )
}
