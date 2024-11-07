'use client'

import { useState } from 'react'
import SqFormProfileCache from '../sq-form-profile-cache.component'

const SqFormProfileCacheExample: React.FC = () => {
  const fieldsCache = ['posts', 'reels', 'stories']

  const [state, setState] = useState<Record<string, string>>({
    field1: '',
    field2: '',
  })

  const onSubmit = () => {
    alert(state)
  }

  const onChange = (field: string, value: string) => {
    setState((prevState) => ({ ...prevState, [field]: value }))
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '200px',
      }}
    >
      <SqFormProfileCache fieldsCache={fieldsCache} onSubmit={onSubmit} onChange={onChange} state={state} />
    </div>
  )
}

export default SqFormProfileCacheExample
