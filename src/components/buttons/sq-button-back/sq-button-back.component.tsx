import React, { PropsWithChildren, useState } from 'react'
import { useTranslation } from 'react-i18next'

import './sq-button-back.component.scoped.scss'
import { SqLoader } from '../../sq-loader'

export interface Props extends PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  disabled?: boolean
  customPadding?: string
  loading?: boolean
  width?: string
  onClick?: (event: any) => any
  onHover?: (hover: boolean) => any
  onReferrerFalseUrl?: string
  textLayout?: boolean
  circleLayout?: boolean
}

export default ({
  disabled = false,
  loading = false,
  className = '',
  width,
  customPadding,
  onClick,
  onHover,
  id,
  textLayout = false,
  circleLayout = false,
  onReferrerFalseUrl = '/',
}: Props) => {
  const timestamp = `random-id-${(1 + Date.now() + Math.random()).toString().replace('.', '')}`
  const { t } = useTranslation()
  const [hover, setHover] = useState<boolean>(false)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const urlReferrer = document.referrer
    if (!loading && !disabled) {
      if (onClick && typeof onClick === 'function') {
        onClick(event)
      } else if (urlReferrer.includes(window.location.origin)) {
        history.back()
      } else {
        history.pushState({}, '', onReferrerFalseUrl)
      }
    }
  }

  const hoverToggle = (hover = false) => {
    setHover(hover)
    if (onHover && typeof onHover === 'function') {
      onHover(hover)
    }
  }

  return (
    <button
      type="button"
      onClick={(event) => handleClick(event)}
      onMouseOver={() => hoverToggle(true)}
      onFocus={() => null}
      onMouseLeave={() => hoverToggle(false)}
      className={
        'button-back ' +
        `${disabled ? 'disabled ' : ''}` +
        `${loading ? 'loading ' : ''}` +
        `${className} ` +
        `${textLayout ? 'text-layout' : ''}` +
        `${circleLayout ? 'circle-layout' : ''}`
      }
      id={id ? id : timestamp}
      style={{
        padding: customPadding,
        width: width,
      }}
      disabled={disabled}
    >
      {!loading ? <i className={`fa-regular ${textLayout ? 'fa-chevron-left' : 'fa-arrow-left'}`}></i> : null}
      {textLayout ? t('back') : null}
      {loading ? <SqLoader size="small" color="gray" /> : null}
    </button>
  )
}
