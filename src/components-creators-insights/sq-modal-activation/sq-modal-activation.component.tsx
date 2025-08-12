'use client'

import { CSSProperties, useCallback, useEffect, useState } from 'react'

import { SqButton } from '@/src/components/buttons/sq-button'
import { SqSelector } from '@/src/components/inputs/sq-selector'
import { SqInfinityScroll } from '@/src/components/sq-infinity-scroll'
import { SqModal } from '@/src/components/sq-modal'
import SqTipComponent from '@/src/components/sq-tip/sq-tip.component'
import { useTranslation } from 'react-i18next'
import { Props as ModalProps } from '../../components/sq-modal/sq-modal.component'
import { SqSocialConnect } from '../sq-social-connect'
import './sq-modal-activation.component.scoped.scss'

type SocialNetwork = 'instagram' | 'youtube' | 'twitter' | 'tiktok'

interface Profile {
  profileId: string
  socialNetwork: SocialNetwork
  username: string
  followers: number
  hasCreatorsInsights: boolean
  picture: string
  hasSocialNetworkCache: boolean
  isSharedCreatorsInsights: boolean
  hasValidToken: boolean
}

export interface Props extends ModalProps {
  onConfirm?: () => void
  onToggleCreatorsInsights?: (profileId: string, socialNetwork: SocialNetwork, currentState: boolean) => void
  onTogglePublicProfile?: (profileId: string, socialNetwork: SocialNetwork, currentState: boolean) => void
  onLoadMore?: () => void
  profiles: Profile[]
  requireActiveProfile?: boolean
  registerCompleted?: boolean
  titleModal?: string
  messageModal?: string
  textButton?: string
  hasMore?: boolean
  loading?: boolean
}

export default ({
  profiles,
  onToggleCreatorsInsights,
  onTogglePublicProfile,
  onConfirm,
  onOpenChange,
  onLoadMore,
  open,
  requireActiveProfile = false,
  registerCompleted = false,
  titleModal = '',
  messageModal = '',
  textButton = '',
  hasMore = true,
  loading = false,
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

  const handleLoadMore = useCallback(() => {
    if (onLoadMore && typeof onLoadMore === 'function') {
      onLoadMore()
    }
  }, [onLoadMore])

  const getToolTipType = useCallback(
    (profile: Profile) => {
      if (
        profile.hasCreatorsInsights &&
        (profile?.socialNetwork !== 'instagram' || (profile?.socialNetwork === 'instagram' && profile.hasSocialNetworkCache)) &&
        profile?.hasValidToken &&
        registerCompleted
      ) {
        return 'info'
      }
      return 'alert'
    },
    [registerCompleted],
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
      id="modal-creators-insights"
    >
      <div
        className="profiles-list"
        id="modal-creators-insights-profiles-list"
        style={
          width < 991
            ? { height: `calc(${height}px - 36px - 240px)`, overflow: 'scroll' }
            : { maxHeight: `calc(${height}px - 58px - 61px - 19px)` }
        }
      >
        <SqInfinityScroll
          elementToScrollId={'modal-creators-insights-profiles-list'}
          loading={loading}
          onLoadMore={() => handleLoadMore()}
          endMessage={' '}
          hasMore={hasMore}
        >
          {profiles.map((profile) => (
            <div className="profile-item" key={profile.profileId}>
              <div className="profile-and-username display-flex align-items-center">
                <SqSocialConnect profiles={mapProfilesToSocialConnect([profile])} style={{ width: '40px', height: '40px' }} />
                <span className="text-bold">@{profile.username}</span>
              </div>
              <div className="profile-selector display-flex justify-content-space-between align-items-center">
                <span>
                  <i className="fa-regular fa-user-chart mr-2" />
                  {t('activateCreatorsInsights')}
                </span>
                <div className="wrapper-selectors toggle">
                  <SqSelector
                    type="checkbox"
                    name={`toggle-creators-insights-${profile.username}`}
                    id={`toggle-creators-insights-${profile.profileId}`}
                    checked={profile.hasCreatorsInsights}
                    onChange={() => onToggleCreatorsInsights?.(profile.profileId, profile.socialNetwork, profile.hasCreatorsInsights)}
                    errorSpan={false}
                  />
                  <label
                    className="checkbox"
                    htmlFor={`toggle-creators-insights-${profile.profileId}`}
                    aria-label={`Toggle creator insights for ${profile.username}`}
                  ></label>
                </div>
              </div>
              <div className="profile-selector display-flex justify-content-space-between align-items-center">
                <span>
                  <i className="fa-regular fa-eye mr-2" />
                  {t('makeProfilePublic')}
                  <SqTipComponent
                    message={getToolTipType(profile) === 'info' ? t('tipForInfo') : t('tipForAlert')}
                    icon={getToolTipType(profile) === 'info' ? 'fa-solid fa-info-circle' : 'fa-solid fa-triangle-exclamation'}
                    color={getToolTipType(profile) === 'info' ? 'var(--blue-30)' : 'var(--red-30)'}
                  />
                </span>
                <div className="wrapper-selectors toggle">
                  <SqSelector
                    type="checkbox"
                    name={`toggle-public-profile-${profile.username}`}
                    id={`toggle-public-profile-${profile.profileId}`}
                    checked={
                      !profile.hasCreatorsInsights ||
                      !profile?.hasValidToken ||
                      !registerCompleted ||
                      (profile?.socialNetwork === 'instagram' && !profile?.hasSocialNetworkCache)
                        ? false
                        : profile?.isSharedCreatorsInsights
                    }
                    onChange={() => onTogglePublicProfile?.(profile.profileId, profile.socialNetwork, profile?.isSharedCreatorsInsights)}
                    disabled={
                      !profile.hasCreatorsInsights ||
                      !profile?.hasValidToken ||
                      !registerCompleted ||
                      (profile?.socialNetwork === 'instagram' && !profile?.hasSocialNetworkCache)
                    }
                    errorSpan={false}
                  />
                  <label
                    className="checkbox"
                    htmlFor={`toggle-public-profile-${profile.profileId}`}
                    aria-label={`Toggle visibility for ${profile.username}`}
                  ></label>
                </div>
              </div>
            </div>
          ))}
        </SqInfinityScroll>
      </div>
    </SqModal>
  )
}
