'use client'

import { useEffect, useState } from 'react'
import SqColorIconHelper from '@/src/helpers/sq-color-icon/sq-color-icon.helper'
import { SqButton } from '../sq-button'

import './sq-button-social-network.component.scoped.scss'

export interface Props extends React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  disabled?: boolean
  loading?: boolean
  onClick?: (event: any) => any
  onHover?: (hover: boolean) => any
  size?: 'sm' | 'md' | 'lg' | 'xl'
  socialNetwork?: 'instagram' | 'facebook' | 'youtube' | 'twitter' | 'tiktok'
  width?: string
}

export default ({
  className = '',
  disabled = false,
  loading = false,
  onClick,
  onHover,
  size = 'md',
  socialNetwork = 'instagram',
  id,
  width,
}: Props) => {
  const [state, setState] = useState<{
    name: string
    color: string
    icon: string
  }>({
    name: 'Instagram',
    color: 'var(--instagram)',
    icon: 'instagram',
  })
  const [hover, setHover] = useState(false)
  const colorIconHelper = new SqColorIconHelper()

  useEffect(() => {
    switch (socialNetwork) {
      case 'facebook':
        setState({
          name: 'Facebook',
          color: 'facebook',
          icon: 'facebook',
        })
        break
      case 'youtube':
        setState({
          name: 'Youtube',
          color: 'youtube',
          icon: 'youtube',
        })
        break
      case 'twitter':
        setState({
          name: 'Twitter',
          color: 'x',
          icon: 'twitter',
        })
        break
      case 'tiktok':
        setState({
          name: 'TikTok',
          color: 'tiktok',
          icon: 'tiktok',
        })
        break
      default:
        setState({
          name: 'Instagram',
          color: 'instagram',
          icon: 'instagram',
        })
        break
    }
  }, [socialNetwork])

  const callHover = (hover: boolean) => {
    setHover(hover)
    if (onHover && typeof onHover === 'function') {
      onHover(hover)
    }
  }

  return (
    <SqButton
      disabled={disabled}
      loading={loading}
      onClick={onClick}
      onHover={callHover}
      size={size}
      className={`${className} button-social-network `}
      id={id}
      color={state.color}
      width={width}
    >
      <div className="display-flex justify-content-center">
        <i className={`fa-brands fa-${colorIconHelper.setIcon(state?.icon)} mr-3`} style={{ fontSize: '22px', color: 'inherit' }}></i>
        <span style={{ color: 'inherit', fontWeight: 'bold' }} dangerouslySetInnerHTML={{ __html: state.name }} />
      </div>
    </SqButton>
  )
}
