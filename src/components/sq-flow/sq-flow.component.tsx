import React from 'react'

interface Steps {
  status: string
}

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  activeColor?: string
  active?: number
  steps?: Array<Steps>
}

export default ({ className = '', activeColor = 'var(--primary_color)', steps, active, ...rest }: Props) => {
  return (
    <div className={`flow ${className}`} {...rest} style={{}}>
      <ul>
        {steps?.map((step, index) => {
          return (
            <li
              key={index}
              className={`${index === active ? 'active' : ''}`}
              style={{ backgroundColor: active === index ? activeColor : '' }}
              data-tooltip-id="tooltip"
              data-tooltip-content={step?.status}
            ></li>
          )
        })}
      </ul>
    </div>
  )
}
