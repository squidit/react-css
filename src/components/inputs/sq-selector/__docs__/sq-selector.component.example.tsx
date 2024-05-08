import React from 'react'
import SqSelector, { SelectorProps as Props } from '../sq-selector.component'

const SqSelectorExample = (props: Props) => {
  const [selected, setSelected] = React.useState(false)
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <SqSelector {...props} checked={selected} onChange={(checked) => setSelected(checked)} />
    </div>
  )
}

export default SqSelectorExample
