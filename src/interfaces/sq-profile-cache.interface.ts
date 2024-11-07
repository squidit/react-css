export default interface Cache {
  contentType: string
  contentValue: number
  profileId: string
  createdAt: string
  updatedAt: string
}

export type CacheField = 'posts' | 'reels' | 'stories' | 'videos' | 'tweets'

export type SocialNetworksAvailables = 'instagram' | 'facebook' | 'twitter' | 'youtube' | 'tiktok'
