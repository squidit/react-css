'use client'

import SqCardProfile from '../sq-card-profile.component'
import { Instagram, SocialNetworksAvailables } from '../../sq-modal-profile-cache/sq-modal-profile-cache.component'

const SqCardProfileExample: React.FC = () => {
  const exampleSocialNetworkObject: Instagram = {
    id: '1',
    username: 'Example User',
    exists: 1,
    searchable: 1,
    macro: 0,
    notSearchReason: '',
    brandUser: 1,
    picture: 'https://via.placeholder.com/150',
    fullName: 'Example User',
    email: 'example@example.com',
    facebookUserId: '123',
    facebookPageId: '456',
    instagramBusinessId: '789',
    scrapperEngagementRate: 2.5,
    engagementRate: 1.5,
    totalMedias: 100,
    medias: 90,
    followers: 1500,
    follows: 300,
    likes: 200,
    comments: 50,
    tier: 'A',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    logstashProcessedAt: new Date().toISOString(),
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
    adPostPermanceEngagementRate: 0.5,
    adStoriesPermanceEngagementRate: 0.3,
    isBusiness: 1,
    averageTapFowardExitsImage: 3,
    averageTapFowardExitsVideo: 5,
  }

  const type: SocialNetworksAvailables = 'instagram'

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '200px',
      }}
    >
      <SqCardProfile socialNetworkObject={exampleSocialNetworkObject} type={type} />
    </div>
  )
}

export default SqCardProfileExample
