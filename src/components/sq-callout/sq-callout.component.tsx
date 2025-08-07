'use client'

import React, { PropsWithChildren } from 'react'

import './sq-callout.component.scoped.scss'

export interface Props extends PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  title?: string
  icon?: string | null
  colorIcon?: string
  backgroundColor?: string
  textColor?: string
  type?: 'warning' | 'danger' | 'info' | 'success' | null
  smallIconStyle?: boolean
  titleFontSize?: string
  iconFontSize?: string
  bottomChildren?: React.ReactNode | undefined
}

interface TypesCallout {
  warning: CalloutStyle
  danger: CalloutStyle
  info: CalloutStyle
  success: CalloutStyle
}

interface CalloutStyle {
  backgroundColor?: string
  textColor?: string
  icon?: string
  colorIcon?: string
}

export default ({
  children,
  title,
  icon = null,
  colorIcon = 'var(--gold)',
  backgroundColor = 'var(--background)',
  textColor = 'var(--text_color)',
  type = null,
  className = '',
  smallIconStyle = false,
  titleFontSize = '1rem',
  iconFontSize = '32px',
  bottomChildren,
  style,
}: Props) => {
  const templates: TypesCallout = {
    danger: {
      backgroundColor: 'var(--red_light)',
      textColor: 'var(--red_dark)',
      icon: 'fa-solid fa-triangle-exclamation',
      colorIcon: 'var(--red_dark)',
    },
    info: {
      backgroundColor: 'var(--blue_light)',
      textColor: 'var(--blue_dark)',
      icon: 'fa-regular fa-circle-info',
      colorIcon: 'var(--blue_dark)',
    },
    success: {
      backgroundColor: 'var(--green_light)',
      textColor: 'var(--green_dark)',
      icon: 'fa-regular fa-circle-check',
      colorIcon: 'var(--green_dark)',
    },
    warning: {
      backgroundColor: 'var(--background)',
      textColor: 'var(--text_color)',
      icon: 'fa-regular fa-diamond-exclamation',
      colorIcon: 'var(--gold)',
    },
  }

  return (
    <section
      className={`callout-container ${className}`}
      style={{
        backgroundColor: type ? templates?.[type]?.backgroundColor || backgroundColor : backgroundColor,
        color: type ? templates[type]?.textColor || textColor : textColor,
        ...style,
      }}
    >
      <div className="callout-content">
        <div className="callout-info">
          <div className="labels">
            <h6 className="title text-bold mb-1" style={{ fontSize: titleFontSize }}>
              {smallIconStyle ? (
                <i
                  className={`mr-2 ${(type && templates[type]?.icon) || icon}`}
                  style={{ color: (type && templates[type]?.colorIcon) || colorIcon, fontSize: titleFontSize }}
                ></i>
              ) : null}
              {title}
            </h6>
            <div className="description display-flex">
              {icon && !smallIconStyle ? (
                <i
                  className={`m-1 mr-3 ${(type && templates[type]?.icon) || icon} icon-description display-flex align-items-center`}
                  style={{ color: (type && templates[type]?.colorIcon) || colorIcon, fontSize: iconFontSize }}
                ></i>
              ) : null}
              {children}
            </div>
          </div>
        </div>

        {bottomChildren ? <div>{bottomChildren}</div> : null}
      </div>
    </section>
  )
}
