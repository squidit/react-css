import { useRef } from 'react'
import useRect from './use-sq-rect.hook'
import { Meta, StoryObj } from '@storybook/react'

interface Props {
  refContainer: React.RefObject<HTMLDivElement>
}

const Overview = ({ refContainer }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const dimensions = useRect(refContainer)

  return (
    <div ref={containerRef} style={{ width: '300px', height: '300px' }}>
      <pre>{JSON.stringify(dimensions, null, 2)}</pre>
    </div>
  )
}

const meta: Meta = {
  title: 'Hooks/useSqRect',
  component: Overview,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta
type Story = StoryObj<typeof Overview>

export const Default: Story = {
  args: {
    refContainer: { current: null },
  },
}
