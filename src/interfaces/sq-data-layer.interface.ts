import { SocialNetworksAvailables } from './sq-profile-cache.interface'

export interface WindowWithDataLayer extends Window {
  dataLayer?: DataLayer[]
}

export interface DataLayer {
  event: Event
  profile?: string
  socialNetwork?: SocialNetworksAvailables
  context?: string
  action?: string
  description?: string
  location?: string
  value?: any
  return?: any
  user: UserDataLayer
  [key: string]: any
}

export type Event = 'hub_user_conversion' | 'hub_user_interaction' | 'hub_user_'

export interface UserDataLayer {
  squidId: string
  [key: string]: any
}
