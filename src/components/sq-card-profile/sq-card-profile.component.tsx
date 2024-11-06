import { useTranslation } from 'react-i18next'

import { useMemo } from 'react'
import './sq-card-profile.component.scoped.scss'
import { Instagram, SocialNetworksAvailables } from '../sq-modal-profile-cache/sq-modal-profile-cache.component'

export interface Youtube {
  id: string
  googleId: string
  exists: number
  searchable: number
  notSearchReason: string
  email: string
  channelTitle: string
  username: string
  picture: string
  fullName: string
  description: any
  bio: any
  customUrl: string
  country: string
  since: string
  followers: number
  subscribers: number
  engagementRate: number
  engagementRatePositive: number
  engagementRateNegative: number
  viewsRate: number
  viewsMedian: number
  comments: number
  identificationComments: number
  identificationLikes: number
  identificationDislikes: number
  averageComments: number
  averageLikes: number
  averageDislikes: number
  shares: number
  averageShares: number
  commentLikesRate: number
  commentViewsRate: number
  averageViewsDuration: number
  averageViewPercentage: number
  averageVideoDuration: number
  videoEffectiveReach: number
  videos: number
  identificationVideos: number
  views: string
  identificationViews: number
  privacyStatus: string
  language: any
  createdAt: string
  updatedAt: string
  logstashProcessedAt: any
  macro: number
  brandUser: any
}
export interface Twitter {
  id: string
  username: string
  picture: string
  followers: number
  createdAt: string
  updatedAt: string
  brandUser: number
  exists: number
  macro: number
  engagementRate: number
  totalRetweets: number
  totalLikes: number
  totalRetweetsReceived: number
  averageLikes: number
  averageRetweets: number
  totalTweets: number
  averageRepliesByLikes: number
  averageRepliesByTweet: number
  repliesRate: number
  effectiveImpressionReach: number
  averageImpressions: number
  countReplies: number
  adTweetsCount: number
  engagementRateAd: number
  tweetPostAdPerformance: number
}
export interface TikTok {
  id: string
  openId: string
  unionId: string
  exists: boolean
  verified: boolean
  username: string
  nickname: string
  macro: boolean
  brandUser: boolean
  picture: string
  bio: any
  engagementRate: number
  followers: number
  following: number
  likes: number
  averageLikes: number
  comments: number
  averageComments: number
  shares: number
  averageShares: number
  views: number
  averageViews: number
  createdAt: string
  updatedAt: string
  isValid: boolean
  status: any
}

interface Props {
  socialNetworkObject: Instagram | Youtube | Twitter | TikTok
  type: SocialNetworksAvailables
}

export default ({ socialNetworkObject, type }: Props) => {
  const { t } = useTranslation('sqModalProfileCache')
  const socialNetwork = useMemo(() => (type === 'facebook' ? 'instagram' : type), [type])

  return (
    <div className="card-profile mt-3">
      <header className="header-card display-flex justify-content-space-between align-items-center p-3">
        <div className="first-block display-flex align-items-center">
          <figure className="display-flex">
            <img className="mr-2" src={socialNetworkObject?.picture} alt="Profile" />
          </figure>
          <span className="username text-bold big">{socialNetworkObject?.username}</span>
        </div>
        <div
          className="social-icon display-flex justify-content-center align-items-center p-2 rounded"
          style={{ backgroundColor: `var(--${socialNetwork})` }}
        >
          <i className={`fa-brands fa-${socialNetwork} white small`}></i>
        </div>
      </header>
      <main className="main-card p-3">
        <div className="title display-flex align-items-center py-2">
          <i className="fa-solid fa-diamond-exclamation gold mr-2 big"></i>
          <h6 className="m-0">{t('updateValues')}</h6>
        </div>
        <p className="description">{t('description')}</p>
      </main>
    </div>
  )
}
