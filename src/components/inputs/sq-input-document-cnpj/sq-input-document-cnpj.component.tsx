'use client'

import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import SqValidatorHelper from '@/src/helpers/sq-validator/sq-validator.helper'
import { SqLoader } from '../../sq-loader'

import './sq-input-document-cnpj.component.scoped.scss'

const DELAY_TIME_FOR_TYPING_PAUSE = 800

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  label?: any
  disabled?: boolean
  readOnly?: boolean
  errorSpan?: boolean
  loading?: boolean
  required?: boolean
  externalError?: any
  id?: string
  name?: string
  externalIcon?: any
  errorIcon?: any
  value?: string
  backgroundColor?: string
  requiredOnLoad?: boolean
  type?: 'text' | 'password'
  onChange?: (value: any) => any
  onValidate?: (event: any) => any
  onTimeout?: (event: any) => any
}

export interface State {
  error: string
  value: string
  validatedDocument: boolean
}

const InputDocumentCnpj = ({
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
  errorIcon = <i className="fa-regular fa-triangle-exclamation"></i>,
  externalIcon,
  value = '',
  backgroundColor = '',
  className = '',
  type = 'text',
  onChange,
  onValidate,
  onTimeout,
}: Props) => {
  const timestamp = `random-id-${(1 + Date.now() + Math.random()).toString().replace('.', '')}`
  const validatorHelper = useMemo(() => new SqValidatorHelper(), [])

  const { t } = useTranslation('sqInputDocumentCnpj')

  const [timer, setTimer] = useState<any>(null)
  const [state, setState] = useState<State>({
    value: '',
    error: '',
    validatedDocument: false,
  })

  const setMask = useCallback((cnpj: string) => {
    const num = cnpj.replace(/[^\d]/g, '')
    const len = num.length

    if (len <= 5) {
      cnpj = num.replace(/(\d{2})(\d{1,3})/g, '$1.$2')
    } else if (len <= 8) {
      cnpj = num.replace(/(\d{2})(\d{3})(\d{1,3})/g, '$1.$2.$3')
    } else if (len <= 12) {
      cnpj = num.replace(/(\d{2})(\d{3})(\d{3})(\d{1,4})/g, '$1.$2.$3/$4')
    } else {
      cnpj = num.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{1,2})/g, '$1.$2.$3/$4-$5')
    }
    return cnpj
  }, [])

  useEffect(() => {
    if (state.value !== value) {
      setState((prevState) => ({
        ...prevState,
        value: setMask(value),
      }))
    }
  }, [state.value, value, setMask])

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
        !validatorHelper.cnpj(newState.value.toString().replace(/\D/g, '')) ||
        newState?.value?.replace(/[^0-9k]/gi, '').length < 11
      ) {
        newState.error = t('invalidCnpj')
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

  return (
    <div className={`wrapper-all-inside-input ${className}`}>
      {label ? (
        <label className={'label ' + `${externalError || state.error ? 'error ' : ''}`} htmlFor={id || timestamp}>
          {label}
        </label>
      ) : null}
      <div className={'no-padding wrapper-input wrapper-input-squid ' + `${externalError || state.error ? 'error ' : ''}`}>
        <input
          className={
            'col input ' +
            `${readOnly ? 'readonly ' : ''}` +
            `${disabled ? 'disabled ' : ''}` +
            `${loading ? 'loading ' : ''}` +
            `${externalError || state.error ? 'error ' : ''}` +
            `${externalIcon ? 'has-icon-external ' : ''}`
          }
          style={{
            backgroundColor: backgroundColor,
          }}
          id={id || timestamp}
          type={type}
          inputMode="numeric"
          maxLength={18}
          name={name || timestamp}
          placeholder={'##.###.###/####-##'}
          value={state.value}
          required={required}
          disabled={disabled}
          readOnly={readOnly || loading}
          onChange={handleChange}
        />
      </div>
      {loading ? <SqLoader size="small" className={`display-block loader-input ${!label ? 'no-label' : ''}`} /> : null}
      {externalIcon && !loading ? <span className={'icon icon-external ' + `${!label ? 'no-label ' : ''}`}>{externalIcon}</span> : null}
      {errorSpan ? (
        <div className={'box-validation box-invalid show '}>
          {requiredOnLoad && !state.value && !state.error && !externalError ? (
            <div>
              <i className="fa-solid fa-diamond-exclamation" style={{ color: 'var(--gold)' }}></i>
              {t('globalPayments:emptyField')}
            </div>
          ) : null}
          {state.error || externalError ? errorIcon || <i className="fa-regular fa-triangle-exclamation"></i> : null}
          {externalError}
          {state.error && !externalError ? <span className={'message-error'} dangerouslySetInnerHTML={{ __html: state.error }} /> : ''}
        </div>
      ) : null}
    </div>
  )
}

export default InputDocumentCnpj
