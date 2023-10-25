import React from 'react'

export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string
  customSize?: string
  size?: 'small' | 'bigger' | 'big' | ''
  borderSize?: string
}

export default ({ color = 'var(--primary_color)', customSize, size = '', borderSize, className = '', style }: LoaderProps) => {
  return (
    <div
      className={`loader ${size} ${className}`}
      role="status"
      style={{
        borderWidth: borderSize,
        height: customSize,
        width: customSize,
        borderColor: color,
        ...style,
      }}
    >
      <span className="visually-hidden">Loading</span>
    </div>
  )
}