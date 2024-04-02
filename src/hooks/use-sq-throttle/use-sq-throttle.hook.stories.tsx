import { useState } from 'react'
import useThrottle from './use-sq-throttle.hook'
import { SqButton } from '@/components'

export const Overview = () => {
  const [count, setCount] = useState(0)

  const incrementThrottled = useThrottle(() => {
    setCount((prevCount) => prevCount + 1)
  }, 3000)

  return (
    <div>
      <h1>Throttled Counter</h1>
      <p>Count: {count}</p>
      <SqButton color="var(--primary_color)" borderColor="transparent" onClick={incrementThrottled}>
        Increment (Throttled)
      </SqButton>
    </div>
  )
}

export default { title: 'Hooks/useSqThrottle', tags: ['autodocs'] }
