import React, { CSSProperties, PropsWithChildren, useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './sq-button-copy-text.component.scoped.scss'
import SqToastHelper from '@/src/helpers/sq-toast/sq-toast.helper'

export interface Props extends PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  color?: string
  backgroundColor?: string
  noMargin?: boolean
  size?: 'sm' | 'lg' | 'xl' | '2xl' | ''
  content: any
  textColor?: string
  maxWidth?: string
}

export default ({
  content,
  textColor,
  maxWidth,
  className = '',
  color = 'var(--primary_color)',
  backgroundColor = 'var(primary_color)',
  noMargin = false,
  size = 'lg',
  style,
}: Props) => {
  const toast = useMemo(() => new SqToastHelper().toast, [])
  const [isCopied, setIsCopied] = useState(false)

  const [t] = useTranslation('sqButtonCopyText')

  const handleClick = useCallback(async () => {
    if (typeof content === 'object') {
      await navigator.clipboard.writeText(content?.props?.children)
    } else {
      await navigator.clipboard.writeText(content)
    }
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 3000)
    toast.success(t('urlCopied'), {
      closeButton: true,
      className: 'full text-bold',
      position: `${window.innerWidth > 991 ? 'top' : 'bottom'} center`,
      notOverClick: true,
      immediately: true,
    })
  }, [content, t, toast])

  const customStyle: CSSProperties = {
    maxWidth,
    backgroundColor,
    borderTopColor: backgroundColor,
    ...style,
  }

  if (noMargin) {
    customStyle.padding = 0
  }

  return (
    <div className={`button-copy-text ${className}`} style={{ ...customStyle }}>
      <span className="button-copy" style={{ backgroundColor, color: textColor }}>
        {content}
      </span>
      <button onClick={handleClick} className="icon-card" style={{ backgroundColor }}>
        {isCopied ? <i className="far fa-check green"></i> : <i className={'far fa-copy'} style={{ color }}></i>}
      </button>
    </div>
  )
}
