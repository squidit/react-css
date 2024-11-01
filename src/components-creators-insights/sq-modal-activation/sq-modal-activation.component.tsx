'use client'

import { CSSProperties, useCallback, useEffect, useState } from 'react'

import { SqButton } from '@/src/components/buttons/sq-button'
import { SqModal } from '@/src/components/sq-modal'
import { useTranslation } from 'react-i18next'
import { Props as ModalProps } from '../../components/sq-modal/sq-modal.component'
import { SqSocialConnect } from '../sq-social-connect'
import './sq-modal-activation.component.scoped.scss'

type SocialNetwork = 'instagram' | 'youtube' | 'twitter' | 'tiktok'

interface Profile {
  profileId: string
  socialNetwork: SocialNetwork
  username: string
  hasCreatorsInsights: boolean
  picture: string
}

export interface Props extends ModalProps {
  onConfirm?: () => void
  onToggle?: (profileId: string, socialNetwork: SocialNetwork, currentState: boolean) => void
  profiles: Profile[]
  requireActiveProfile?: boolean
  titleModal?: string
  messageModal?: string
  textButton?: string
}

export default ({
  profiles,
  onToggle,
  onConfirm,
  onOpenChange,
  open,
  requireActiveProfile = false,
  titleModal = '',
  messageModal = '',
  textButton = '',
}: Props) => {
  const [width, setWidth] = useState<number>(window.innerWidth)
  const [height, setHeight] = useState<number>(window.innerHeight)
  const { t } = useTranslation('sqModalActivation')

  const handleOpenChange = useCallback(
    (open: boolean) => {
      if (onOpenChange && typeof onOpenChange === 'function') {
        onOpenChange(open)
      }
    },
    [onOpenChange],
  )

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const mapProfilesToSocialConnect = (profiles: Profile[]) => {
    return profiles.map((profile) => ({
      name: profile.username,
      image: profile.picture,
      id: profile.profileId,
      icon: <i className={`fa-brands fa-${profile.socialNetwork} gray-light`}></i>,
      bgColor: `var(--${profile.socialNetwork}-50)`,
      socialNetwork: profile.socialNetwork,
    }))
  }

  const actionButtonModalStyle: CSSProperties = {
    maxHeight: '35px',
    maxWidth: '35px',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    aspectRatio: 1 / 1,
  }

  const header = (
    <div className="header">
      <h4>{titleModal || t('activationQuestion')}</h4>
      <SqButton
        color="var(--purple-95)"
        className="button-action rounded"
        size="sm"
        borderStyle="none"
        customPadding="10px"
        type="button"
        style={actionButtonModalStyle}
        onClick={() => handleOpenChange(!open)}
      >
        <i className="fa-regular fa-xmark" style={{ color: 'var(--purple-20)' }} />
      </SqButton>
    </div>
  )

  const isAnyProfileActive = profiles.some((profile) => profile.hasCreatorsInsights)

  const footer = (
    <footer className="footer" style={{ width: '100%' }}>
      <SqButton
        color="var(--purple-30)"
        size="lg"
        borderStyle="none"
        type="button"
        width={'100%'}
        onClick={onConfirm}
        disabled={requireActiveProfile && !isAnyProfileActive}
      >
        {textButton || t('buttonDone')}
      </SqButton>
    </footer>
  )

  return (
    <SqModal
      className="modal-creators-insights"
      header={header}
      footer={footer}
      open={open}
      buttonClose={false}
      modalSize={width > 991 ? 'md' : 'lg'}
      forceMobileNoMargin={true}
    >
      <div className="box-insights">
        <p dangerouslySetInnerHTML={{ __html: messageModal || t('insightsText', { socialNetwork: 'instagram' }) }} />
      </div>
      <div
        className="profiles-list"
        style={
          width < 991
            ? { height: `calc(${height}px - 30px - 240px)`, overflow: 'scroll' }
            : { maxHeight: `calc(${height}px - 58px - 61px)` }
        }
      >
        {profiles.map((profile) => (
          <div className="profile-item" key={profile.profileId}>
            <SqSocialConnect profiles={mapProfilesToSocialConnect([profile])} />
            <span>@{profile.username}</span>
            <div className="wrapper-selectors toggle">
              <input
                type="checkbox"
                name={`toggle-${profile.username}`}
                id={`toggle-${profile.profileId}`}
                checked={profile.hasCreatorsInsights}
                onChange={() => onToggle && onToggle(profile.profileId, profile.socialNetwork, profile.hasCreatorsInsights)}
              />
              <label
                className="checkbox"
                htmlFor={`toggle-${profile.profileId}`}
                aria-label={`Toggle creator insights for ${profile.username}`}
              ></label>
            </div>
          </div>
        ))}
      </div>
    </SqModal>
  )
}
