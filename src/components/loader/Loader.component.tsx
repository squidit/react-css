import React from 'react'

export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string
  customSize?: string
  size?: 'small' | 'bigger' | 'big' | ''
  borderSize?: string
}

const Loader = ({ color = 'pink', customSize, size = '', borderSize, className = '', style }: LoaderProps) => {
  return (
    <div
      className={`loader ${size} ${className}`}
      role="status"
      style={{
        ...style,
        borderWidth: borderSize,
        height: customSize,
        width: customSize,
        borderColor: color,
        color,
      }}
    >
      <span className="visually-hidden">Loading</span>
    </div>
  )
}

export default Loader
