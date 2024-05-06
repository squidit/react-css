import React from 'react'
import SqButtonSocialNetworkComponent, { Props } from '../sq-button-social-network.component.tsx'

const SqButtonSocialNetworkExample = (props: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <SqButtonSocialNetworkComponent {...props} />
    </div>
  )
}

export default SqButtonSocialNetworkExample
