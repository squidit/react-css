'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { SqModal } from '../sq-modal'
import { SqModalFooter } from '../sq-modal-footer'
import { SqCardProfile } from '../sq-card-profile'
import { useTranslation } from 'react-i18next'
import { SqFormProfileCache } from '../sq-form-profile-cache'

export interface Instagram {
  id: string
  user_id?: string
  username: string
  exists: number
  searchable: number
  macro: number
  notSearchReason: string
  brandUser: number
  picture: string
  fullName: string
  email: string
  bio?: string
  website?: string
  language?: string
  isBusiness: number
  hasSkip?: number
  facebookUserId: string
  facebookPageId: string
  instagramBusinessId: string
  scrapperEngagementRate: number
  engagementRate?: number
  totalMedias: number
  medias: number
  followers: number
  follows: number
  likes: number
  comments: number
  tier: string
  createdAt: string
  updatedAt: string
  logstashProcessedAt: any
  score?: number
  score1?: number
  score2?: number
  score3?: number
  score4?: number
  score5?: number
  storiesEngagementRate?: number
  postEffectiveReach?: number
  storiesEffectiveReach?: number
  profileViews: number
  hasMediaKit: number
  categorizedAt?: string
  averageComments: number
  averageCommentsImage: number
  averageCommentsVideo: number
  averageCommentsCarousel: number
  averageLikes: number
  averageLikesImage: number
  averageLikesVideo: number
  averageLikesCarousel: number
  commentLikesRate: number
  commentsRate: number
  totalStoriesImpressions?: number
  totalStoriesReach?: number
  totalStoriesReplies?: number
  totalStoriesTapBacks?: number
  totalStoriesTapFowardExits: number
  totalPostsReach?: number
  totalPostsSaves?: number
  totalPostsImpressions?: number
  averageSaved: number
  averageSavedImage: number
  averageSavedVideo: number
  averageSavedCarousel: number
  averageTapBacks: number
  averageTapBacksImage: number
  averageTapBacksVideo: number
  averageReplies: number
  averageRepliesImage: number
  averageRepliesVideo: number
  averageTapFowardExits: number
  averageTapFowardExitsImage: number
  averageTapFowardExitsVideo: number
  completeVideoStoriesRate: number
  numberPostsActivityScore?: number
  numberStoriesScore?: number
  daysPostsScore?: number
  daysStoriesScore?: number
  advertisingPostsEngagementRate?: number
  noAdvertisingPostsEngagementRate?: number
  advertisingStoriesEngagementRate?: number
  noAdvertisingStoriesEngagementRate?: number
  advertisingContentPercentage?: number
  advertisingPostsPercentage?: number
  advertisingStoriesPercentage?: number
  postImageEngagementRate?: number
  postCarouselEngagementRate?: number
  postVideoEngagementRate?: number
  storiesVideoEngagementRate?: number
  storiesImageEngagementRate?: number
  storiesCompleteEngagementRate?: number
  averagePostsReach: number
  averagePostsImpressions: number
  averagePostsFrequency: number
  averageStoriesReach: number
  averageStoriesImpressions: number
  averageStoriesFrequency: number
  adPostPermanceEngagementRate?: number
  adStoriesPermanceEngagementRate?: number
  identifyAt?: string
  socialNetworkProfilesCache?: Cache[]
}

export interface Cache {
  contentType: string
  contentValue: number
  profileId: string
  createdAt: string
  updatedAt: string
}

export type CacheField = 'posts' | 'reels' | 'stories' | 'videos' | 'tweets'

export type SocialNetworksAvailables = 'instagram' | 'facebook' | 'twitter' | 'youtube' | 'tiktok'

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean
  onClose: () => void
  socialNetworkObject: Instagram
  fieldsCache: CacheField[]
  type: SocialNetworksAvailables
  onSubmit: () => void
  cacheState?: Record<CacheField, string>
  onStateChange?: (newState: Record<CacheField, string>) => void
}

const SqModalProfileCache = ({ open, onClose, onSubmit, socialNetworkObject, fieldsCache, type, onStateChange, cacheState }: Props) => {
  const { t } = useTranslation('sqModalProfileCache')
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)
  const [isOpen, setIsOpen] = useState(open || false)

  const handleFieldChange = useCallback(
    (field: string, value: string) => {
      const newState = { ...cacheState, [field]: value }
      onStateChange && onStateChange(newState)
      return newState
    },
    [cacheState, onStateChange],
  )

  const hasAllFieldsFilled = useMemo(() => {
    return fieldsCache.every((field) => cacheState[field] && cacheState[field] !== '0,00')
  }, [cacheState, fieldsCache])

  const hasChangedValues = useMemo(() => {
    return Object.keys(cacheState).some((field) => {
      const value = cacheState[field as keyof typeof cacheState]
      let socialNetworkValue = new Intl.NumberFormat('pt-br', { minimumFractionDigits: 2 }).format(
        socialNetworkObject[field as keyof typeof socialNetworkObject] || '',
      )

      if (!socialNetworkValue) {
        socialNetworkValue = ''
      }

      return value !== socialNetworkValue
    })
  }, [cacheState, socialNetworkObject])

  const resetState = useCallback(() => {
    const newState = fieldsCache?.reduce(
      (acc, field) => ({
        ...acc,
        [field]: new Intl.NumberFormat('pt-br', { minimumFractionDigits: 2 }).format(
          socialNetworkObject?.socialNetworkProfilesCache?.find(({ contentType }) => contentType === field)?.contentValue ?? 0,
        ),
      }),
      {},
    ) as Record<CacheField, string>
    onStateChange && onStateChange(newState)
  }, [fieldsCache, socialNetworkObject, onStateChange])

  const handleClose = useCallback(() => {
    if (onClose && typeof onClose === 'function') {
      onClose()
    }
  }, [onClose])

  useEffect(() => {
    const onResize = () => {
      setHeight(window.innerHeight)
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const query = new URLSearchParams(window.location.search)
    const action = query.get('action')
    const profileId = query.get('profileId')
    if (action === 'updateCache' && profileId) {
      setIsOpen(true)
    }
  }, [])

  useEffect(() => {
    if (!hasChangedValues) {
      resetState()
    }
  }, [hasChangedValues, resetState])

  const content = (
    <main className="content-modal p-3" style={width < 991 ? { maxHeight: `calc(${height}px - 55px - 68px)`, height: '100vh' } : {}}>
      <SqCardProfile socialNetworkObject={socialNetworkObject} type={type} />
      <SqFormProfileCache fieldsCache={fieldsCache} onSubmit={onSubmit} onChange={handleFieldChange} state={cacheState} />
    </main>
  )

  return (
    <SqModal
      forceMobileNoMargin
      className="modal-profile-cache-component"
      open={open}
      onCloseChange={() => handleClose()}
      header={<h5 className="m-0">{t('title')}</h5>}
      footer={
        <SqModalFooter
          hasChangedValues={hasChangedValues}
          hasValueFilled={hasAllFieldsFilled}
          onClose={() => handleClose()}
          onSubmit={onSubmit}
        />
      }
      modalSize={width > 991 ? 'md' : 'lg'}
    >
      {content}
    </SqModal>
  )
}

export default SqModalProfileCache
