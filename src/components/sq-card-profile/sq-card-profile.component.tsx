import { useTranslation } from 'react-i18next'

import { useMemo } from 'react'
import './sq-card-profile.component.scoped.scss'
import { SocialNetworksAvailables } from '@/src/interfaces/sq-profile-cache.interface'
import { Instagram, TikTok, Twitter, Youtube } from '@/src/interfaces'

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
