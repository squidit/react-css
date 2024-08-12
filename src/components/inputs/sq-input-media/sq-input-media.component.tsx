'use client'

import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './sq-input-media.component.scoped.scss'
import SqObjectHelper from '@/src/helpers/sq-object/sq-object.helper'
import SqInputFileComponent from '../sq-input-file/sq-input-file.component'

export interface Props extends React.InputHTMLAttributes<HTMLDivElement> {
  value?: any
  label?: any
  imageSize?: string
  disabled?: boolean
  loading?: boolean
  required?: boolean
  onChange?: (event: any) => any
  onValidate?: (event: any) => any
  maxFileSize?: number | null
  externalError?: any
  errorIcon?: any
  errorSpan?: boolean
  showFileName?: boolean
  multiple?: boolean
  resolution?: {
    width: number
    height: number
  }
  mediaUrl?: string
}

export default ({
  className = '',
  id = '',
  name = '',
  label = '',
  disabled = false,
  errorSpan = true,
  loading = false,
  required = false,
  externalError = '',
  errorIcon = '',
  value = '',
  maxFileSize = null,
  onChange,
  onValidate,
  showFileName = false,
  resolution,
  mediaUrl = '',
  multiple = false,
}: Props) => {
  const timestamp = `random-id-${(1 + Date.now() + Math.random()).toString().replace('.', '')}`
  const [t] = useTranslation('')
  const objectHelper = new SqObjectHelper()
  const [state, setState] = useState([])

  const handleChange = useCallback(
    (event: any) => {
      const newContent = event?.target?.files || event || []
      setState(newContent)

      if (onChange && typeof onChange === 'function') {
        onChange(newContent)
      }
    },
    [onChange],
  )

  const isValidUrl = useCallback((urlToCheck: string) => {
    let url_string
    try {
      url_string = new URL(urlToCheck)
    } catch (err) {
      return false
    }
    return url_string.protocol === 'http:' || url_string.protocol === 'https:'
  }, [])

  useEffect(() => {
    if (value && !objectHelper.compareObjects(value, state)) {
      handleChange(value)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, state, objectHelper])

  useEffect(() => {
    if (mediaUrl && isValidUrl(mediaUrl)) {
      handleChange([
        {
          name: mediaUrl?.substring(mediaUrl?.lastIndexOf('/') + 1),
          type: 'image/jpeg',
          url: mediaUrl,
        },
      ])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mediaUrl])

  return (
    <SqInputFileComponent
      value={state}
      disabled={disabled}
      loading={loading}
      required={required}
      showFileName={showFileName}
      maxFileSize={maxFileSize}
      externalError={externalError}
      errorIcon={errorIcon}
      errorSpan={errorSpan}
      name={timestamp || name}
      id={timestamp || id}
      className={className}
      accept="image/*, video/*"
      showButton={false}
      onValidate={onValidate}
      onChange={handleChange}
      multiple={multiple}
    >
      <div className="wrapper-input-media">
        {state?.length > 0 ? (
          <div className="wrapper-input-media-medias">
            <span className="change-icon">
              <i className="fa-regular fa-arrows-repeat"></i>
            </span>
            {Array.from(state)?.map((file: any, index) => {
              if (file?.type?.includes('image')) {
                return (
                  <figure className="wrapper-input-media-media" key={index}>
                    <img className="image img-fluid" src={file?.url || URL.createObjectURL(file)} alt={file?.name} title={file?.name} />
                    <legend className="legend">{file?.name}</legend>
                  </figure>
                )
              } else if (file?.type?.includes('video')) {
                return (
                  <div className="wrapper-input-media-media" key={index}>
                    {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                    <video className="video img-fluid" src={file?.url || URL.createObjectURL(file)} title={file?.name} />
                    <legend className="legend">{file?.name}</legend>
                  </div>
                )
              } else {
                return (
                  <div className="wrapper-input-media-text" key={index}>
                    {file?.name}
                  </div>
                )
              }
            })}
          </div>
        ) : (
          <div className="wrapper-input-media-texts">
            <i className="fa-light fa-image icon-media"></i>
            <p>{label ? label : t('mediaLabel')}</p>
            {resolution?.width && resolution?.height ? (
              <span>{t('resolution', { width: resolution?.width, height: resolution?.height })}</span>
            ) : null}
          </div>
        )}
      </div>
    </SqInputFileComponent>
  )
}
