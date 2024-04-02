import React, { PropsWithChildren } from 'react'
import './banner.component.scoped.scss'

export interface Props extends PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  title: any
  backgroundColor?: string
  figure: any
  textColor: string
}

export default ({
  children,
  title,
  backgroundColor = 'var(--background)',
  figure,
  textColor = 'var(--text_color)',
  className = '',
  style,
}: Props) => {
  return (
    <section className={`banner-container ${className}`} style={{ backgroundColor, color: textColor, ...style }}>
      <div className="banner-figure">{figure}</div>

      <div className="content">
        <h5 className="title">{title}</h5>
        <div className="text">{children}</div>
      </div>
    </section>
  )
}
