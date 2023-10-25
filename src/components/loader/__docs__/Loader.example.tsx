import React from 'react'
import Loader, { LoaderProps } from '../Loader.component'

export default ({ ...props }: LoaderProps) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Loader {...props} />
    </div>
  )
}
