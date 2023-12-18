import React, { PropsWithChildren, useCallback, useEffect, useState } from 'react'
import './collapse.component.scoped.scss'
import { Loader } from '../..'

export interface CollapseProps extends PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  title: any
  open?: boolean
  headerJustify?: string
  headerBorder?: string
  loading?: boolean
  disabled?: boolean
  backgroundColor?: string
  colorIcons?: string
  colorBackgroundIcon?: string
  fontSizeIcon?: string
  heightIcon?: string
  className?: string
  style?: any
  bodyBorder?: boolean
  noPadding?: boolean
  addMarginLoopCollapse?: boolean
  onToggleAccordion?: (value: any) => any
  index?: number
}

const Collapse = ({
  title,
  children,
  open = false,
  className,
  style,
  headerJustify = 'center',
  headerBorder,
  backgroundColor = 'transparent',
  disabled,
  loading,
  colorIcons = 'var(--primary_color)',
  colorBackgroundIcon = 'transparent',
  fontSizeIcon = '0.9rem',
  heightIcon = '',
  bodyBorder,
  noPadding,
  addMarginLoopCollapse = true,
  index = 0,
  onToggleAccordion,
}: CollapseProps) => {
  const [opened, setOpened] = useState(open)

  const handleToggleCollapse = useCallback(() => {
    if (!disabled && !loading) {
      setOpened((o) => !o)
      if (onToggleAccordion && typeof onToggleAccordion === 'function') {
        onToggleAccordion(index)
      }
    }
  }, [index, onToggleAccordion, disabled, loading])

  useEffect(() => {
    setOpened(open)
  }, [open])

  return (
    <div
      className={`collapse wrapper-collapse
        ${className} ${opened ? 'active' : ''}
        ${disabled ? 'collapse-disabled' : ''}
        ${loading ? 'collapse-loading' : ''}
        ${addMarginLoopCollapse ? 'mb-2' : ''}`}
      style={style}
    >
      <header
        role="presentation"
        onClick={() => {
          handleToggleCollapse()
        }}
        className={`collapse-title
          display-flex justify-content-${headerJustify}
          ${noPadding ? 'no-padding' : ''}`}
        style={{
          backgroundColor: `${backgroundColor}`,
          border: `${headerBorder}`,
        }}
      >
        {title}
        <span
          className={'icon'}
          style={{
            color: colorIcons,
            backgroundColor: colorBackgroundIcon,
            fontSize: fontSizeIcon,
            height: heightIcon,
            lineHeight: heightIcon,
          }}
        >
          {loading ? <Loader /> : <i className="fa-solid fa-chevron-down"></i>}
        </span>
      </header>
      <div
        className={`collapse-body content
          ${opened && !disabled && !loading ? 'open' : ''}
          ${disabled ? 'collapse-disabled' : ''}
          ${loading ? 'collapse-loading' : ''}
          ${bodyBorder ? 'body-border' : ''}`}
      >
        {children}
      </div>
    </div>
  )
}
export default Collapse
