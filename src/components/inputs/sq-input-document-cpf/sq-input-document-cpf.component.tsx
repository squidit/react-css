import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Subscription } from 'rxjs'

import './sq-input-document-cpf.component.scoped.scss'
import './sq-input-document-cpf.component.scss'
import SqValidatorHelper from '@/src/helpers/sq-validator/sq-validator.helper'
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
  externalIcon?: any
  errorIcon?: any
  value?: string
  backgroundColor?: string
  isNew?: boolean
  canRepeat?: boolean
  originalValue?: string
  requiredOnLoad?: boolean
  type?: 'text' | 'password'
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
  requiredOnLoad = false,
  required,
  externalError,
  id,
  name,
  leftLabel,
  errorIcon = <i className="fa-regular fa-exclamation-triangle"></i>,
  rightLabel,
  externalIcon,
  value = '',
  backgroundColor = '',
  isNew = false,
  canRepeat = false,
  originalValue,
  className = '',
  type = 'text',
  onChange,
  onValidate,
  onTimeout,
}: Props) => {
  const timestamp = `random-id-${(1 + Date.now() + Math.random()).toString().replace('.', '')}`
  const validatorHelper = useMemo(() => new SqValidatorHelper(), [])

  const [timer, setTimer] = useState<any>(null)
  const [state, setState] = useState<State>({
    value: value,
    error: '',
    validatedDocument: false,
  })
  const { t } = useTranslation('sqInputDocumentCpf')

  const setMask = (cpf: string) => {
    const num = cpf?.replace(/[^\d]/g, '')
    const len = num?.length

    if (len <= 6) {
      cpf = num?.replace(/(\d{3})(\d{1,3})/g, '$1.$2')
    } else if (len <= 9) {
      cpf = num?.replace(/(\d{3})(\d{3})(\d{1,3})/g, '$1.$2.$3')
    } else {
      cpf = num?.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/g, '$1.$2.$3-$4')
    }
    return cpf
  }

  const handleChange = async (event: any) => {
    const value = event.target.value
    const newState: State = { value: '', validatedDocument: false, error: '' }
    newState.value = value
    setState((prevState) => ({ ...prevState, value: setMask(newState.value) }))

    const checkDocument = async () => {
      if (externalError) {
        newState.error = ''
        newState.validatedDocument = true
      } else if (!!required && (!newState.value || newState.value.length < 1)) {
        newState.error = t('required')
        newState.validatedDocument = false
      } else if (
        !validatorHelper.cpf(newState.value.toString().replace(/\D/g, '')) ||
        newState?.value?.replace(/[^0-9k]/gi, '').length < 11
      ) {
        newState.error = t('invalidCPF')
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
      await checkDocument()
    }
  }

  useEffect(() => {
    if (state.value && state.value.length < 11) {
      setState((prevState) => ({ value: setMask(prevState.value), validatedDocument: false, error: t('invalidCPF') }))
      if (onValidate && typeof onValidate === 'function') {
        onValidate(false)
      }
    } else {
      setState((prevState) => ({ ...prevState, value: setMask(prevState.value) }))
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.value])

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
          type={type}
          inputMode="numeric"
          maxLength={14}
          name={name || timestamp}
          placeholder={'###.###.###-##'}
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
