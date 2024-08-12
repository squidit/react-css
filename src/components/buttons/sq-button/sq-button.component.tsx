'use client'

import React, { PropsWithChildren, useState } from 'react'
import SqColorsHelper from '@helpers/sq-colors/sq-colors.helper'
import { SqLoader } from '@components/sq-loader'

import './sq-button.component.scoped.scss'

export interface Props extends PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  disabled?: boolean
  inverted?: boolean
  invertedHover?: boolean
  rounded?: boolean
  color?: string
  borderStyle?: string
  borderColor?: string
  textColor?: string
  loaderColor?: string
  customPadding?: string
  loading?: boolean
  hideChildrenOnLoading?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
  width?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: (event: any) => any
  onHover?: (hover: boolean) => any
}

export default ({
  children,
  hideChildrenOnLoading,
  customPadding,
  width,
  borderStyle,
  id,
  size,
  onHover,
  onClick,
  loading = false,
  disabled = false,
  className = '',
  inverted,
  invertedHover,
  rounded,
  color = 'primary',
  textColor = '',
  borderColor = '',
  loaderColor = '',
  type = 'button',
  style,
}: Props) => {
  const [hover, setHover] = useState<boolean>(false)
  const colorsHelper = new SqColorsHelper()
  const timestamp = `random-id-${(1 + Date.now() + Math.random()).toString().replace('.', '')}`
  const presetColors = [
    'neutral',
    'purple',
    'pink',
    'red',
    'orange',
    'yellow',
    'green',
    'aqua',
    'blue',
    'lilac',
    'instagram',
    'youtube',
    'pinterest',
    'google',
    'whatsapp',
    'twitter',
    'linkedin',
    'facebook',
    'x',
    'tiktok',
    'twitch',
    'primary',
  ]

  const handleClick = (event: any) => {
    if (!loading && !disabled && onClick && typeof onClick === 'function') {
      onClick(event)
    }
  }

  const getHover = (color: string) => {
    return colorsHelper?.lightenDarkenColor(colorsHelper?.getCssVariableValue(color), -50)
  }

  const getHoverBg = () => {
    if (invertedHover) {
      return getHover(textColor)
    }
    return getHover(color)
  }

  const getHoverText = () => {
    if (invertedHover) {
      return getHover(color !== 'transparent' ? color : 'var(--white-html)')
    }
    return getHover(textColor !== 'transparent' ? textColor : 'var(--white-html)')
  }

  const hoverToggle = (hover = false) => {
    setHover(hover)
    if (onHover && typeof onHover === 'function') {
      onHover(hover)
    }
  }

  return (
    <button
      type={type}
      onClick={(event) => handleClick(event)}
      onMouseOver={() => hoverToggle(true)}
      onFocus={() => null}
      onMouseLeave={() => hoverToggle(false)}
      className={
        `button button-${color} ` +
        `${rounded ? 'rounded ' : ''}` +
        `${inverted ? 'inverted ' : ''}` +
        `${size ? `button-${size} ` : ''}` +
        `${disabled ? 'disabled ' : ''}` +
        `${loading ? 'loading ' : ''}` +
        `${className}`
      }
      id={id ? id : timestamp}
      style={{
        backgroundColor: !presetColors.includes(color) ? (hover ? getHoverBg() : color) : undefined,
        borderColor: !presetColors.includes(color) ? (hover ? getHover(borderColor || textColor) : borderColor || textColor) : undefined,
        borderStyle: borderStyle,
        color: !presetColors.includes(color) ? (hover ? getHoverText() : textColor) : undefined,
        padding: customPadding,
        width: width,
        ...style,
      }}
      disabled={disabled}
    >
      {hideChildrenOnLoading && loading ? null : children}
      {loading ? <SqLoader className="ml-3" size="small" color={loaderColor ? loaderColor : color} /> : null}
    </button>
  )
}
