'use client'

import React, { useState } from 'react'
import { SqButton } from '../../../components/buttons/sq-button'
import SqModalActivation from '../sq-modal-activation.component'

const mockProfiles = [
  {
    profileId: '1',
    socialNetwork: 'instagram' as const,
    username: 'user1',
    hasCreatorsInsights: true,
    picture: 'https://via.placeholder.com/150',
    followers: 1000,
    hasSocialNetworkCache: true,
    isSharedCreatorsInsights: false,
    hasValidToken: true,
  },
  {
    profileId: '2',
    socialNetwork: 'youtube' as const,
    username: 'user2',
    hasCreatorsInsights: false,
    picture: 'https://via.placeholder.com/150',
    followers: 1000,
    hasSocialNetworkCache: true,
    isSharedCreatorsInsights: false,
    hasValidToken: true,
  },
  {
    profileId: '3',
    socialNetwork: 'twitter' as const,
    username: 'user3',
    hasCreatorsInsights: true,
    picture: 'https://via.placeholder.com/150',
    followers: 1000,
    hasSocialNetworkCache: true,
    isSharedCreatorsInsights: false,
    hasValidToken: true,
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

  const handleLoadMore = () => {
    // Load more profiles
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
        onConfirm={handleDone}
        onOpenChange={handleOpenChange}
        onLoadMore={handleLoadMore}
        hasMore={true}
        loading={false}
        requireActiveProfile={true}
      />
    </div>
  )
}

export default SqModalActivationExample
