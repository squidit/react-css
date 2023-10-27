import React from 'react'
import LoaderComponent, { LoaderProps } from '../Loader.component'

const Loader = ({ ...props }: LoaderProps) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <LoaderComponent {...props} />
    </div>
  )
}

export default Loader
