'use client'

import { useState } from 'react'
import SqModalProfileCache from '../sq-modal-profile-cache.component'
import { SqButton } from '../../buttons/sq-button'

const SqModalProfileCacheExample: React.FC = () => {
  const [open, setOpen] = useState(false)

  const exampleSocialNetworkObject = {
    id: '1',
    username: 'example',
    exists: 1,
    searchable: 1,
    macro: 0,
    notSearchReason: '',
    brandUser: 1,
    picture: 'https://storage.googleapis.com/squid-profile-pictures/17841400447079930.jpg',
    fullName: 'Example User',
    email: 'example@example.com',
    facebookUserId: '123',
    facebookPageId: '456',
    instagramBusinessId: '789',
    scrapperEngagementRate: 2.5,
    totalMedias: 100,
    medias: 90,
    followers: 1500,
    follows: 300,
    likes: 200,
    comments: 50,
    tier: 'A',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    profileViews: 2000,
    hasMediaKit: 1,
    averageComments: 10,
    averageCommentsImage: 8,
    averageCommentsVideo: 12,
    averageCommentsCarousel: 7,
    averageLikes: 100,
    averageLikesImage: 90,
    averageLikesVideo: 110,
    averageLikesCarousel: 95,
    commentLikesRate: 1.2,
    commentsRate: 0.8,
    totalStoriesTapFowardExits: 5,
    averageSaved: 15,
    averageSavedImage: 10,
    averageSavedVideo: 20,
    averageSavedCarousel: 12,
    averageTapBacks: 3,
    averageTapBacksImage: 2,
    averageTapBacksVideo: 4,
    averageReplies: 1,
    averageRepliesImage: 0.5,
    averageRepliesVideo: 1.5,
    averageTapFowardExits: 4,
    completeVideoStoriesRate: 85,
    averagePostsReach: 1000,
    averagePostsImpressions: 1500,
    averagePostsFrequency: 3,
    averageStoriesReach: 500,
    averageStoriesImpressions: 750,
    averageStoriesFrequency: 2,
    isBusiness: 1,
    logstashProcessedAt: new Date().toISOString(),
    averageTapFowardExitsImage: 3,
    averageTapFowardExitsVideo: 5,
    socialNetworkProfilesCache: [
      {
        profileId: '1',
        contentType: 'posts',
        contentValue: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        profileId: '1',
        contentType: 'stories',
        contentValue: 45,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        profileId: '1',
        contentType: 'reels',
        contentValue: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ],
  }

  const type = 'instagram'

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
        socialNetworkObject={exampleSocialNetworkObject}
        type={type}
        fieldsCache={['posts', 'stories', 'reels']}
      />
    </div>
  )
}

export default SqModalProfileCacheExample
