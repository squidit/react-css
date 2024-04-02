import { useRef } from 'react'
import useRect from './use-rect.hook'

export const Overview = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const dimensions = useRect(containerRef)

  return (
    <div ref={containerRef} style={{ width: '300px', height: '300px' }}>
      <pre>{JSON.stringify(dimensions, null, 2)}</pre>
    </div>
  )
}

export default { title: 'Hooks/useRect', tags: ['autodocs'] }
