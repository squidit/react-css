import { useCallback, useRef } from 'react'

const useThrottle = (callback: any, delay = 500) => {
  const lastCall = useRef(0)

  return useCallback(
    (...args: any) => {
      const now = Date.now()
      if (now - lastCall.current >= delay) {
        lastCall.current = now
        callback(...args)
      }
    },
    [callback, delay],
  )
}
export default useThrottle
