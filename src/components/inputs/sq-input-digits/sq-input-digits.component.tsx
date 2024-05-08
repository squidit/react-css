import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SqLoader } from '../../sq-loader'

import './sq-input-digits.component.scoped.scss'
import './sq-input-digits.component.scss'

const DELAY_TIME_FOR_TYPING_PAUSE = 800

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  label?: any
  maxLength: number
  disabled?: boolean
  readOnly?: boolean
  errorSpan?: boolean
  loading?: boolean
  required?: boolean
  externalError?: any
  id?: string
  name?: string
  placeholder?: string
  externalIcon?: any
  errorIcon?: any
  value?: string
  backgroundColor?: string
  requiredOnLoad?: boolean
  type?: 'text' | 'password'
  onTimeout?: (event: any) => any
  onChange?: (event: any) => any
  onValidate?: (event: any) => any
}

export interface State {
  error: string
  value: string
  validatedDocument: boolean
}

export default ({
  label,
  maxLength: maxLength,
  disabled = false,
  readOnly = false,
  errorSpan = true,
  loading,
  requiredOnLoad = false,
  required,
  externalError,
  id,
  name,
  errorIcon = <i className="fa-regular fa-exclamation-triangle"></i>,
  externalIcon,
  value = '',
  backgroundColor = '',
  className = '',
  type = 'text',
  placeholder = '',
  onTimeout,
  onChange,
  onValidate,
}: Props) => {
  const { t } = useTranslation('sqInputDigits')
  const timestamp = `random-id-${(1 + Date.now() + Math.random()).toString().replace('.', '')}`

  const [timer, setTimer] = useState<any>(null)
  const [state, setState] = useState<State>({
    value: value,
    error: '',
    validatedDocument: false,
  })

  useEffect(() => {
    if (value !== state.value) {
      handleChange(value)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.value, value])

  useEffect(() => {
    return () => {
      clearTimeout(timer)
    }
  }, [timer])

  const handleChange = (event: any) => {
    state.value = event?.target?.value || (event?.length ? event : '')
    const regex = new RegExp(/^[0-9]+$/)
    if (externalError) {
      state.error = ''
      state.validatedDocument = true
    } else if (!!required && (!state.value || state.value.length < 1)) {
      state.error = t('required')
      state.validatedDocument = false
    } else if (state.value && !regex.test(state.value)) {
      state.error = t('invalid-number')
      state.validatedDocument = false
    } else {
      state.error = ''
      state.validatedDocument = true
    }

    setState({ ...state })

    if (onValidate && typeof onValidate === 'function') {
      onValidate(!state.error && !externalError)
    }
    if (onChange && typeof onChange === 'function') {
      onChange(state.value)
    }
    if (onTimeout && typeof onTimeout === 'function') {
      onTimeout(false)
      if (timer) {
        clearTimeout(timer)
      }
      setTimer(
        setTimeout(() => {
          onTimeout(true)
        }, DELAY_TIME_FOR_TYPING_PAUSE),
      )
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
          maxLength={maxLength}
          name={name || timestamp}
          placeholder={placeholder}
          value={state.value}
          required={required}
          disabled={disabled}
          readOnly={readOnly || loading}
          onChange={handleChange}
        />
      </div>
      {loading ? (
        <SqLoader size="small" className={`display-block loader-input ${!label ? 'no-label' : ''}`} style={{ position: 'absolute' }} />
      ) : null}
      {externalIcon && !loading ? <span className={'icon icon-external ' + `${!label ? 'no-label ' : ''}`}>{externalIcon}</span> : null}
      {errorSpan ? (
        <div className={'box-validation box-invalid show '}>
          {requiredOnLoad && !state.value && !state.error && !externalError ? (
            <div>
              <i className="fa-solid fa-diamond-triangle gold"></i>
              {t('globals:emptyField')}
            </div>
          ) : null}
          {state.error || externalError ? errorIcon || <i className="fa-regular fa-exclamation-triangle"></i> : null}
          {externalError ? externalError : ''}
          {state.error && !externalError ? <span className={'message-error'} dangerouslySetInnerHTML={{ __html: state.error }} /> : ''}
        </div>
      ) : null}
    </div>
  )
}
