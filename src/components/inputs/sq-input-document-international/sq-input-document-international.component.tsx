'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Subscription } from 'rxjs'

import './sq-input-document-international.component.scoped.scss'
import './sq-input-document-international.component.scss'
import { SqLoader } from '../../sq-loader'

const DELAY_TIME_FOR_TYPING_PAUSE = 800

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  label?: any
  disabled: boolean
  readOnly?: boolean
  errorSpan?: boolean
  loading?: boolean
  required?: boolean
  externalError?: any
  id?: string
  name?: string
  leftLabel?: any
  rightLabel?: any
  errorIcon?: any
  externalIcon?: any
  value?: string
  isNew?: boolean
  originalValue?: string
  requiredOnLoad?: boolean
  placeholder?: string
  nationality?: string
  backgroundColor?: string
  onChange?: (event: any) => any
  onValidate?: (event: any) => any
  onTimeout?: (event: any) => any
}

export interface State {
  error: string
  value: string
  validatedDocument: boolean
}

export default ({
  label,
  disabled = false,
  readOnly = false,
  errorSpan = true,
  loading,
  required,
  externalError,
  id,
  name,
  errorIcon = <i className="fa-regular fa-exclamation-triangle"></i>,
  leftLabel,
  rightLabel,
  externalIcon,
  originalValue,
  value = '',
  isNew = false,
  placeholder,
  nationality,
  backgroundColor = '',
  className = '',
  requiredOnLoad = false,
  onChange,
  onValidate,
  onTimeout,
}: Props) => {
  const onEnvironmentChangeSubscription = useRef<Subscription | undefined>(undefined)
  const [urlCreators, setUrlCreators] = useState<string>('')
  const timestamp = `random-id-${(1 + Date.now() + Math.random()).toString().replace('.', '')}`
  const [timer, setTimer] = useState<any>(null)
  const [state, setState] = useState<State>({
    value: value,
    error: '',
    validatedDocument: false,
  })
  const { t } = useTranslation('sqInputDocumentInternational')

  const validate = (document = '') => {
    if (document) {
      const docRegex = /(?=(?:.*\d){3})^[aA-zZ\d]*$/gm
      const doc = document.trim().toUpperCase()
      if (!docRegex.test(doc)) {
        return false
      }
      return true
    }
  }

  const handleChange = async (event: any) => {
    const value = event.target.value
    const newState: State = { value: '', validatedDocument: false, error: '' }
    newState.value = value.toUpperCase()
    setState((prevState) => ({ ...prevState, value: newState.value.toUpperCase() }))

    const checkDocument = async () => {
      if (externalError) {
        newState.error = ''
        newState.validatedDocument = true
      } else if (!!required && (!value || value.length < 1)) {
        newState.error = t('required')
        newState.validatedDocument = false
      } else if (!validate(value)) {
        newState.error = t('invalidID')
        newState.validatedDocument = false
      } else {
        newState.error = ''
        newState.validatedDocument = true
      }

      setState((prevState) => ({ ...prevState, validatedDocument: newState.validatedDocument, error: newState.error }))
      if (onValidate && typeof onValidate === 'function') {
        onValidate(!newState.error && !externalError && newState.validatedDocument)
      }

      if (onChange && typeof onChange === 'function') {
        onChange(newState.value)
      }
    }

    if (onTimeout && typeof onTimeout === 'function') {
      onTimeout(false)
      if (timer) {
        clearTimeout(timer)
      }
      setTimer(
        setTimeout(async () => {
          await checkDocument()
          onTimeout(true)
        }, DELAY_TIME_FOR_TYPING_PAUSE),
      )
    } else {
      checkDocument()
    }
  }

  useEffect(() => {
    if (state.value !== value) {
      setState((prevState) => ({ ...prevState, value: state.value.toUpperCase() }))
    }
  }, [state.value, value])

  useEffect(() => {
    return () => {
      clearTimeout(timer)
    }
  }, [timer])

  return (
    <div className={`wrapper-all-inside-input ${className}`}>
      {label ? (
        <label className={'label ' + `${externalError || state.error ? 'error ' : ''}`} htmlFor={id || timestamp}>
          {label}
        </label>
      ) : null}
      <div className={'no-padding wrapper-input wrapper-input-squid ' + `${externalError || state.error ? 'error ' : ''}`}>
        {leftLabel ? <span className="input-group-text">{leftLabel}</span> : null}
        <input
          className={
            'col input ' +
            `${readOnly ? 'readonly ' : ''}` +
            `${disabled ? 'disabled ' : ''}` +
            `${loading ? 'loading ' : ''}` +
            `${!loading && (externalError || state.error) ? 'error ' : ''}` +
            `${externalIcon ? 'has-icon-external ' : ''}`
          }
          style={{
            backgroundColor: backgroundColor,
          }}
          id={id || timestamp}
          type="text"
          name={name || timestamp}
          placeholder={placeholder || ''}
          value={state.value}
          required={required}
          disabled={disabled}
          readOnly={readOnly}
          onChange={handleChange}
        />
        {rightLabel ? <span className="input-group-text">{rightLabel}</span> : null}
      </div>
      {loading ? (
        <SqLoader size="small" className={`display-block loader-input ${!label ? 'no-label' : ''}`} style={{ position: 'absolute' }} />
      ) : null}
      {externalIcon && !loading ? <span className={'icon icon-external ' + `${!label ? 'no-label ' : ''}`}>{externalIcon}</span> : null}
      {errorSpan ? (
        <div className={'box-validation box-invalid show '}>
          {!loading && (
            <div>
              {requiredOnLoad && !state.value && !state.error && !externalError ? (
                <div>
                  <i className="fa-solid fa-diamond-exclamation gold"></i>
                  {t('globals:emptyField')}
                </div>
              ) : null}
              {state.error || externalError ? errorIcon || <i className="fa-regular fa-exclamation-triangle"></i> : null}
              {externalError ? externalError : ''}
              {state.error && !externalError ? <span className={'message-error'} dangerouslySetInnerHTML={{ __html: state.error }} /> : ''}
            </div>
          )}
        </div>
      ) : null}
    </div>
  )
}
