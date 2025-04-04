'use client'

import React, { useEffect, useRef, useState } from 'react'

import './sq-menu-options.component.scoped.scss'

export interface Props extends React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  placement?: 'left' | 'right'
  icon?: string
  menuArray?: { label: string; icon?: string; iconText?: string; action: () => void }[]
  styleButton?: React.CSSProperties
  classButton?: string
  disabled?: boolean
}

export default ({
  className = '',
  children,
  placement = 'left',
  menuArray = [],
  icon = 'ellipsis-vertical',
  styleButton,
  classButton = '',
  disabled = false,
}: Props) => {
  const [open, setOpen] = useState(false)
  const menuButtonRef = useRef<any>(null)
  const menuRef = useRef(null)

  const handleClick = (e: any, action: any) => {
    e.preventDefault()
    if (action && typeof action === 'function') {
      action()
    }
  }

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (menuButtonRef?.current && !menuButtonRef.current.contains(event?.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  if (!children && !menuArray?.length) {
    return null
  }

  let content = children
  if (menuArray?.length) {
    content = (
      <ul className="menu-array">
        {menuArray?.map(({ label, icon, action, iconText }) => (
          <li key={label}>
            <button type="button" onClick={(e) => handleClick(e, action)}>
              <span className="text" dangerouslySetInnerHTML={{ __html: label }} />
              {iconText ? <span className="icon-option" dangerouslySetInnerHTML={{ __html: iconText || '' }} /> : null}
              {icon ? (
                <span className="icon-option">
                  <i className={`${icon}`}></i>
                </span>
              ) : null}
            </button>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div className={`wrapper-menu ${className}`}>
      <button
        onClick={() => setOpen(!open)}
        className={`button-to-open ${classButton} ${disabled ? 'disabled' : ''}`}
        type="button"
        ref={menuButtonRef}
        style={styleButton}
        disabled={disabled}
      >
        <i className={`fa-regular fa-${icon}`}></i>
      </button>
      <div className={`menu-box box ${placement} ${open ? 'open' : null} scrollbar`} ref={menuRef}>
        {content}
      </div>
    </div>
  )
}
