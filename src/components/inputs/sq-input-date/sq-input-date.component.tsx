import { Props, State } from '@components/inputs/sq-input/sq-input.component'
import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import SqValidatorHelper from '@helpers/sq-validator/sq-validator.helper'

import '@components/inputs/sq-input/sq-input.component.scoped.scss'
import './sq-input-date.component.scoped.scss'

const DELAY_TIME_FOR_TYPING_PAUSE = 800

interface DateState extends State {
  dateObject: any
  type: 'date' | 'month'
}

export interface DateProps extends Props {
  type: 'date' | 'month' | 'text'
  maxDate?: string
}

export default ({
  label,
  disabled = false,
  readOnly = false,
  requiredOnLoad = false,
  errorSpan = true,
  required,
  externalError,
  errorIcon = <i className="fa-regular fa-exclamation-triangle"></i>,
  id,
  name,
  type = 'date',
  leftLabel,
  rightLabel,
  value = '',
  placeholder,
  backgroundColor = '',
  autoComplete = 'off',
  className = '',
  maxDate = '9999-12-31',
  onChange,
  onValidate,
  onTimeout,
}: DateProps) => {
  const timestamp = `random-id-${(1 + Date.now() + Math.random()).toString().replace('.', '')}`
  const validatorHelper = new SqValidatorHelper()
  const [timer, setTimer] = useState<any>(null)
  const [state, setState] = useState<DateState>({
    value: value,
    error: '',
    dateObject: '',
    type: 'date',
  })
  const { t, i18n } = useTranslation()

  function parseDate(str: string) {
    const m = str?.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)
    return m ? `${m[3]}-${m[2]}-${m[1]}` : str
  }

  const formatDatesByType = useCallback(() => {
    const newState = { ...state }

    // eslint-disable-next-line
    value = parseDate(value?.split('T')[0] || value)

    newState.dateObject = new Date(value as string)
    if (type === 'month') {
      newState.value = formatMonth(value as string)
    }
    if (type === 'date') {
      newState.value = formatDate(value as string)
    }
    newState.type = type === 'text' ? 'date' : type
    handleChange(newState.value)
  }, [state, value, type])

  const formatMonth = (date: string) => {
    return `${date.split('-')[0]}-` + `${date.split('-')[1]}`
  }

  const formatDate = (date: string) => {
    try {
      return new Date(date?.replace(/\//g, '-')).toISOString()?.split('T')[0]
    } catch (e) {
      return ''
    }
  }

  const handleChange = (event: any) => {
    state.value = event?.target?.value || ''
    if (state.type === 'date') {
      state.dateObject = event?.target?.valueAsDate
    }
    if (state.type === 'month') {
      state.dateObject = new Date(state.value)
    }

    if (externalError) {
      state.error = ''
    } else if (!!required && (!state.value || state.value.length < 1)) {
      state.error = t('required')
    } else if (!validatorHelper.date(state.value)) {
      state.error = t('invalidDate')
    } else if (maxDate && new Date(state.value) > new Date(maxDate)) {
      state.error = t('biggerThanMaxDate', { maxDate: new Date(maxDate).toLocaleDateString(i18n?.language) })
    } else {
      state.error = ''
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

  useEffect(() => {
    if (state.value !== value || value.includes('T')) {
      formatDatesByType()
    }
  }, [value, formatDatesByType, state])

  useEffect(() => {
    return () => {
      clearTimeout(timer)
    }
  }, [timer])

  return (
    <div className={`wrapper-all-inside-input date-input ${className}`}>
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
            `${externalError || state.error ? 'error ' : ''}`
          }
          style={{
            backgroundColor: backgroundColor,
          }}
          id={id || timestamp}
          type={type}
          name={name || timestamp}
          placeholder={placeholder || ''}
          value={state?.value}
          required={required}
          disabled={disabled}
          readOnly={readOnly}
          onChange={handleChange}
          autoComplete={autoComplete}
          max={maxDate}
        />
        {rightLabel ? <span className="input-group-text">{rightLabel}</span> : null}
      </div>
      {errorSpan ? (
        <div className={'box-validation box-invalid show'}>
          {requiredOnLoad && !state.value && !state.error && !externalError ? (
            <div>
              <i className="fa-solid fa-diamond-exclamation gold"></i>
              {t('emptyField')}
            </div>
          ) : null}
          {state.error || externalError ? errorIcon || <i className="fa-regular fa-exclamation-triangle"></i> : null}
          {externalError ? externalError : ''}
          {state.error && !externalError ? state.error : ''}
        </div>
      ) : null}
    </div>
  )
}
