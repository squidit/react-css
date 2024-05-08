import React from 'react'
import { Props } from '../../sq-input/sq-input.component'
import SqInputName from '../sq-input-name.component'

const SqInputNameExample = (props: Props) => {
  const [value, setValue] = React.useState('')
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <SqInputName {...props} value={value} onChange={setValue} />
    </div>
  )
}

export default SqInputNameExample
