import React from 'react'
import './user-position.component.scoped.scss'
import { useSqMetricChartContext } from '@/hooks'

const UserPosition = () => {
  const { state } = useSqMetricChartContext()
  const { metric } = state
  return (
    metric?.position && (
      <div className="user-position">
        <span className="ranking">{`${metric?.position?.ranking >= 0 ? '#' + metric?.position?.ranking : '-'}`}</span>
        <span className="total">{`/${metric?.position?.total}`}</span>
      </div>
    )
  )
}

export default UserPosition
