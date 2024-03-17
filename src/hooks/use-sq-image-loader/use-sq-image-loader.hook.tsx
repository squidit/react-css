import { useRef, useState } from 'react'

export default () => {
  const [loading, setLoading] = useState(true)
  const ref = useRef<HTMLImageElement>(null) as any

  const onLoad = () => {
    if (ref.current?.complete) {
      setLoading(false)
    }
  }

  return [ref, loading, onLoad]
}
