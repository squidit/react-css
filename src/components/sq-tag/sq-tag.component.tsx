import React from 'react'

import './sq-tag.component.scoped.scss'

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  icon?: any
  labels?: any
  separator?: boolean
  title?: string
  subtag?: any
  wrapperStyle?: any
}

export default ({ icon, labels, separator = false, className = '', style, title = '', subtag, wrapperStyle }: Props) => {
  let labelsBlock = null
  if (labels) {
    labelsBlock = Array.isArray(labels) ? (
      labels?.map((label, index) => (
        <>
          <div key={`${label?.toString()}-${index}`} className="label-text">
            <span>{label}</span>
          </div>
          {separator && index !== labels.length - 1 ? <span>-</span> : null}
        </>
      ))
    ) : (
      <span>{labels}</span>
    )
  }

  return (
    <div className="tag-wrapper" style={wrapperStyle}>
      <div
        className={`tag ${className}`}
        style={{
          width: 'fit-content',
          ...style,
        }}
        title={title}
        key={title}
      >
        {icon ? icon : null}
        {labelsBlock}
      </div>
      {subtag ? <div className="sub-tag">{subtag}</div> : null}
    </div>
  )
}
