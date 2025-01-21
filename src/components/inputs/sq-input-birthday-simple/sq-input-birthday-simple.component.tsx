'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { SqLoader } from '../../sq-loader'
import { Props, State } from '../sq-input/sq-input.component'
import { useTranslation } from 'react-i18next'
import SqValidatorHelper from '@/src/helpers/sq-validator/sq-validator.helper'

import '../sq-input/sq-input.component.scoped.scss'
import '../sq-input/sq-input.component.scss'

const DELAY_TIME_FOR_TYPING_PAUSE = 800

export default ({
  className = '',
  label = '',
  externalError,
  errorSpan = true,
  requiredOnLoad = false,
  noCounting = false,
  errorIcon = <i className="fa-regular fa-exclamation-triangle"></i>,
  name,
  id,
  leftLabel,
  rightLabel,
  readOnly = false,
  disabled = false,
  loading,
  externalIcon,
  backgroundColor = '',
  style,
  placeholder,
  maxLength,
  required,
  min,
  max,
  onChange,
  onValidate,
  onTimeout,
  onBlur,
  autoComplete = 'off',
  autoFocus = false,
  value = '',
  type = 'text',
  lang = 'en',
  ...props
}: Props) => {
  const validatorHelper = useMemo(() => new SqValidatorHelper(), [])

  const timestamp = `random-id-${(1 + Date.now() + Math.random()).toString().replace('.', '')}`

  const [timer, setTimer] = useState(null)
  const [formattedValue, setFormattedValue] = useState('')
  const [state, setState] = useState<State>({
    value: value,
    error: '',
  })
  const [language, setLanguage] = useState('en-us')

  const { t } = useTranslation('sqInputBirthdaySimple')

  useEffect(() => {
    if (state.value !== value) {
      handleChange(value)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, state.value])

  useEffect(() => {
    return () => {
      clearTimeout(timer)
    }
  }, [timer])

  useEffect(() => {
    const browserLanguage = navigator.language.toLowerCase()
    if (lang) {
      setLanguage(lang)
    } else if (['pt-br', 'es-es', 'en-us'].includes(browserLanguage)) {
      setLanguage(browserLanguage)
    }
  }, [lang])

  const parseToISO = (formattedValue) => {
    if (formattedValue?.length === 10) {
      const cleanedValue = formattedValue.replace(/\D/g, '')
      const month = cleanedValue.slice(0, 2)
      const day = cleanedValue.slice(2, 4)
      const year = cleanedValue.slice(4, 8)
      return `${year}-${day}-${month}`
    }
    return ''
  }

  const handleChange = (event) => {
    const value = event?.target?.value || (event?.length ? event : '')
    const cleanedValue = value?.replace(/\D/g, '')
    let isValidDate = false
    let formattedValue = cleanedValue

    if (language === 'pt-br' || language === 'es-es') {
      if (cleanedValue?.length > 2) {
        formattedValue = cleanedValue?.slice(0, 2) + '/' + cleanedValue?.slice(2)
      }
      if (cleanedValue?.length > 4) {
        formattedValue = cleanedValue?.slice(0, 2) + '/' + cleanedValue?.slice(2, 4) + '/' + cleanedValue?.slice(4, 8)
      }
      state.value = formattedValue
    } else {
      if (cleanedValue.length > 2) {
        formattedValue = cleanedValue.slice(0, 2) + '/' + cleanedValue.slice(2)
      }
      if (cleanedValue.length > 4) {
        formattedValue = cleanedValue.slice(0, 2) + '/' + cleanedValue.slice(2, 4) + '/' + cleanedValue.slice(4, 8)
      }
    }

    isValidDate = formattedValue?.length === 10

    const isUnderage = validatorHelper.ageLessThan(parseToISO(value), 18)
    const isGreaterThanAllowed = validatorHelper.ageOverThan(parseToISO(value), 100)

    if (externalError) {
      state.error = ''
    } else if (!!required && !formattedValue && state.value !== 0) {
      state.error = t('required')
    } else if (isUnderage) {
      state.error = t('ageUnder18')
    } else if (isGreaterThanAllowed) {
      state.error = t('overThan100')
    } else {
      state.error = ''
    }

    setFormattedValue(formattedValue)
    state.value = parseToISO(value)

    setState({ ...state })

    if (onValidate && typeof onValidate === 'function') {
      onValidate(!state.error && !externalError && isValidDate)
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

  const handleBlur = useCallback(
    (event) => {
      if (onBlur && typeof onBlur === 'function') {
        onBlur(state.value, event)
      }
    },
    [onBlur, state.value],
  )

  return (
    <div className={`wrapper-all-inside-input ${className}`} {...props}>
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
            `${externalError || state.error ? 'error ' : ''}` +
            `${externalIcon ? 'has-icon-external ' : ''}`
          }
          style={{
            backgroundColor: backgroundColor,
            ...style,
          }}
          id={id || timestamp}
          type={'text'}
          inputMode="numeric"
          name={name || timestamp}
          placeholder={placeholder || ''}
          value={formattedValue}
          maxLength={maxLength}
          required={required}
          disabled={disabled}
          readOnly={readOnly || loading}
          min={min}
          max={max}
          onChange={handleChange}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          onBlur={handleBlur}
        />
        {rightLabel ? <span className="input-group-text">{rightLabel}</span> : null}
      </div>
      {loading ? (
        <SqLoader size="small" className={`display-block loader-input ${!label ? 'no-label' : ''}`} style={{ position: 'absolute' }} />
      ) : null}
      {externalIcon && !loading ? <span className={'icon icon-external ' + `${!label ? 'no-label ' : ''}`}>{externalIcon}</span> : null}
      {errorSpan ? (
        <div className={'box-validation box-invalid show ' + `${maxLength ? 'has-max-length ' : ''}`}>
          {requiredOnLoad && !state.value && !state.error && !externalError ? (
            <div>
              <i className="fa-solid fa-diamond-exclamation gold"></i>
              Fill this field
            </div>
          ) : null}
          {state.error || externalError ? errorIcon || <i className="fa-regular fa-exclamation-triangle"></i> : null}
          {externalError ? externalError : ''}
          {state.error && !externalError ? state.error : ''}
          {maxLength && !noCounting ? <span className="max-length-name">{maxLength - state.value?.length}</span> : null}
        </div>
      ) : null}
    </div>
  )
}
