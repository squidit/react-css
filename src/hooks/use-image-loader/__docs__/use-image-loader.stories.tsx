import React from 'react'
import useImageLoader from '../use-image-loader.hook'
import Loader from '../../../components/loader/Loader.component'

export const Overview = () => {
  const [ref, loading, onLoad] = useImageLoader()

  if (loading) {
    return <Loader />
  }

  return <img src="https://storage.googleapis.com/web-hub/icons/600X600.png" alt="Squid" ref={ref} onLoad={onLoad} />
}

export default { title: 'Hooks/useImageLoader', tags: ['autodocs'] }
