'use client'

import { useState } from 'react'
import SqFormProfileCache from '../sq-form-profile-cache.component'
import { CacheField } from '../../sq-modal-profile-cache/sq-modal-profile-cache.component'

const SqFormProfileCacheExample: React.FC = () => {
  const fieldsCache: CacheField[] = ['posts', 'reels']

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
