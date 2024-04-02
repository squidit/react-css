import useImageLoader from './use-sq-image-loader.hook'
import SqLoader from '../../components/sq-loader/sq-loader.component'

export const Overview = () => {
  const [ref, loading, onLoad] = useImageLoader()

  if (loading) {
    return <SqLoader />
  }

  return <img src="https://storage.googleapis.com/web-hub/icons/600X600.png" alt="Squid" ref={ref} onLoad={onLoad} />
}

export default { title: 'Hooks/useSqImageLoader', tags: ['autodocs'] }
