'use client'

import { useState } from 'react'
import SqModalProfileCache from '../sq-modal-profile-cache.component'
import { SqButton } from '../../buttons/sq-button'
import { socialNetworkMock } from '../../../mocks/sq-social-networks.mock'

const SqModalProfileCacheExample: React.FC = () => {
  const [open, setOpen] = useState(false)

  const type = 'instagram'

  const [cacheState, setCacheState] = useState<Record<string, string>>({
    posts: '',
    stories: '',
    reels: '',
  })

  const handleStateChange = (newState: Record<string, string>) => {
    setCacheState(newState)
  }

  const handleOpenModal = () => setOpen(true)
  const handleCloseModal = () => setOpen(false)
  const handleSubmit = () => {
    alert('Submitted')
    handleCloseModal()
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <SqButton onClick={handleOpenModal}>Open Modal</SqButton>
      <SqModalProfileCache
        open={open}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        socialNetworkObject={socialNetworkMock}
        type={type}
        fieldsCache={['posts', 'stories', 'reels']}
        cacheState={cacheState}
        onStateChange={handleStateChange}
      />
    </div>
  )
}

export default SqModalProfileCacheExample
