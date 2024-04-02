import React, { PropsWithChildren } from 'react'

import './sq-border-with-icon.scoped.scss'

export interface Props extends PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  iconColor?: string
  title?: string
}

export default ({ children, className = '', iconColor = 'var(--primary_color)', title = '' }: Props) => {
  return (
    <section className={`border-with-icon ${className}`}>
      <h4>
        <i className="fa-solid fa-bookmark bookmark" style={{ color: iconColor }}></i>
        {title}
      </h4>
      <div className="inside-border">{children}</div>
    </section>
  )
}
