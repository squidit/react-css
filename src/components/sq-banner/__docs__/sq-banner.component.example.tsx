import React from 'react'
import SqBannerExample, { Props } from '../banner.component'

const SqBanner = ({ children, ...props }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <SqBannerExample {...props}>{children}</SqBannerExample>
    </div>
  )
}

export default SqBanner
