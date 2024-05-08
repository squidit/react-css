import React from 'react'
import { SqButtonCopyText } from '../buttons/sq-button-copy-text'

import './sq-card-to-copy.component.scoped.scss'

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  content?: any
}

export default ({ title, content, className, style }: Props) => {
  return (
    <div className={`card-to-copy ${className}`} style={style}>
      <h6 className="title m-0">{title}</h6>
      <div className="content-to-copy">
        <SqButtonCopyText content={content} backgroundColor="transparent" textColor="var(--gray)" noMargin />
      </div>
    </div>
  )
}
