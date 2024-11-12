'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { SqModal } from '../sq-modal'
import { SqModalFooter } from '../sq-modal-footer'
import { SqCardProfile } from '../sq-card-profile'
import { useTranslation } from 'react-i18next'
import { SqFormProfileCache } from '../sq-form-profile-cache'
import { CacheField, SocialNetworksAvailables } from '@/src/interfaces/sq-profile-cache.interface'
import { Instagram } from '@/src/interfaces'

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
    if (!hasChangedValues) {
      resetState()
    }
  }, [hasChangedValues, resetState])

  const content = (
    <main
      className="content-modal p-3"
      style={
        width < 991 ? { maxHeight: `calc(${height}px - 58px - 61px)`, height: `calc(${height}px - 30px - 120px)`, overflow: 'scroll' } : {}
      }
    >
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
