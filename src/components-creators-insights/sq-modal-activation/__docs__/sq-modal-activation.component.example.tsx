'use client'

import React, { useState } from 'react'
import SqModalActivation from '../sq-modal-activation.component'
import { SqButton } from '../../../components/buttons/sq-button'

const mockProfiles = [
  {
    profileId: '1',
    socialNetwork: 'instagram' as const,
    username: 'user1',
    hasCreatorsInsights: true,
    picture: 'https://via.placeholder.com/150',
  },
  {
    profileId: '2',
    socialNetwork: 'youtube' as const,
    username: 'user2',
    hasCreatorsInsights: false,
    picture: 'https://via.placeholder.com/150',
  },
  {
    profileId: '3',
    socialNetwork: 'twitter' as const,
    username: 'user3',
    hasCreatorsInsights: true,
    picture: 'https://via.placeholder.com/150',
  },
]

const SqModalActivationExample: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [profiles, setProfiles] = useState(mockProfiles)

  const handleOpenChange = (newOpenState: boolean) => {
    setIsModalOpen(newOpenState)
  }

  const handleOpen = () => {
    setIsModalOpen(true)
  }

  const handleToggle = (profileId: string, socialNetwork: string, currentState: boolean) => {
    setProfiles((prevProfiles) =>
      prevProfiles.map((profile) => (profile.profileId === profileId ? { ...profile, hasCreatorsInsights: !currentState } : profile)),
    )
  }

  const handleDone = () => {
    setIsModalOpen(false)
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        minHeight: '300px',
      }}
    >
      <SqButton onClick={handleOpen}>Open Modal</SqButton>
      <SqModalActivation
        open={isModalOpen}
        profiles={profiles}
        onToggle={handleToggle}
        onConfirm={handleDone}
        onOpenChange={handleOpenChange}
        requireActiveProfile={true}
      />
    </div>
  )
}

export default SqModalActivationExample
