import React from 'react'
import Loader from '../Loader.component'

export default () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Loader />
    </div>
  )
}
