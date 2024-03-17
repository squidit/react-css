import React from 'react'
import SqLoaderComponent, { SqLoaderProps } from '../sq-loader.component'

const Loader = ({ ...props }: SqLoaderProps) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <SqLoaderComponent {...props} />
    </div>
  )
}

export default Loader
