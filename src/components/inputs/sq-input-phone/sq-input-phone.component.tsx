import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import ReactPhoneInput from 'react-phone-input-2'
import es from 'react-phone-input-2/lang/es.json'
import pt from 'react-phone-input-2/lang/pt.json'
import SqValidatorHelper from '@/src/helpers/sq-validator/sq-validator.helper'
import { SqLoader } from '../../sq-loader'

import '@components/inputs/sq-input/sq-input.component.scoped.scss'
import './sq-input-phone.component.scoped.scss'
import './sq-input-phone.component.scss'

const DELAY_TIME_FOR_TYPING_PAUSE = 800

const translationsInputPhone: any = {
  pt,
  es,
}

export interface Props {
  value: string
  externalError?: any
  required?: boolean
  type?: 'tel'
  className?: string
  label?: string
  id?: string
  country?: string
  leftLabel?: any
  rightLabel?: any
  loading?: boolean
  errorIcon?: any
  requiredOnLoad?: boolean
  externalIcon?: any
  errorSpan?: boolean
  maxLength?: number
  placeholder?: string
  disabled?: boolean
  backgroundColor?: string
  onValidate?: (event: any) => any
  onChange?: (event: any) => any
  onTimeout?: (event: any) => any
}

interface State {
  error: string
  value: any
}

export default ({
  value,
  externalError,
  required,
  type,
  label,
  className = '',
  id,
  country = 'br',
  leftLabel,
  rightLabel,
  errorIcon = <i className="fa-regular fa-exclamation-triangle"></i>,
  loading,
  externalIcon,
  errorSpan = true,
  requiredOnLoad = false,
  maxLength,
  placeholder = 'XX XXXX - XXXX',
  disabled = false,
  backgroundColor = 'var(--background)',
  onValidate,
  onChange,
  onTimeout,
}: Props) => {
  const { t, i18n } = useTranslation()

  const timestamp = `random-id-${(1 + Date.now() + Math.random()).toString().replace('.', '')}`
  const validatorHelper = new SqValidatorHelper()
  const [translation, setTranslation] = useState(translationsInputPhone[i18n?.language])
  const [timer, setTimer] = useState<any>(null)
  const [state, setState] = useState<State>({
    value: value,
    error: '',
  })

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

  const handleChange = (value: string) => {
    const newState: State = { value: '', error: '' }
    newState.value = value || ''
    if (externalError) {
      newState.error = ''
    } else if (!!required && (!newState.value || newState.value.length < 1) && newState.value !== 0) {
      newState.error = t('required')
    } else if (type === 'tel' && !validatorHelper.phone(newState.value)) {
      newState.error = t('invalidPhone')
    } else {
      newState.error = ''
    }
    setState({ ...newState })
    if (onValidate && typeof onValidate === 'function') {
      onValidate(!newState.error && !externalError)
    }
    if (onChange && typeof onChange === 'function') {
      onChange(value)
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

  return loading ? (
    <SqLoader />
  ) : (
    <div className={`wrapper-all-inside-input ${className}`}>
      {label ? (
        <label className={'label ' + `${externalError || state.error ? 'error ' : ''}`} htmlFor={id || timestamp}>
          {label}
        </label>
      ) : null}
      <div className={'no-padding wrapper-input wrapper-input-squid ' + `${externalError || state.error ? 'error ' : ''}`}>
        {leftLabel ? <span className="input-group-text">{leftLabel}</span> : null}
        <ReactPhoneInput
          inputClass={
            'col select ' +
            `${disabled ? 'disabled ' : ''}` +
            `${loading ? 'loading ' : ''}` +
            `${externalError || state.error ? 'error ' : ''}` +
            `${externalIcon ? 'has-icon-external ' : ''}`
          }
          country={country}
          value={state.value}
          onChange={handleChange}
          placeholder={placeholder}
          inputStyle={{
            width: '100%',
            minHeight: '44px',
            borderColor: !state.error && !externalError ? 'var(--border_color)' : 'var(--red)',
            backgroundColor: backgroundColor,
            color: 'var(--text_color)',
          }}
          buttonStyle={{
            borderColor: !state.error && !externalError ? 'var(--border_color)' : 'var(--red)',
            backgroundColor: backgroundColor,
            borderRight: 'none',
            color: 'var(--text_color)',
          }}
          dropdownStyle={{ backgroundColor: 'var(--background)', color: 'var(--text_color)' }}
          searchStyle={{ backgroundColor: 'var(--background)', color: 'var(--text_color)' }}
          containerStyle={{ backgroundColor: backgroundColor }}
          enableSearch
          disableSearchIcon
          disabled={disabled}
          searchPlaceholder={t('search')}
          isValid={() => !state.error && !externalError}
          localization={translation || pt}
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
              {t('emptyField')}
            </div>
          ) : null}
          {state.error || externalError ? errorIcon || <i className="fa-regular fa-exclamation-triangle"></i> : null}
          {externalError ? externalError : ''}
          {state.error && !externalError ? state.error : ''}
          {maxLength ? <span className="max-length-name">{maxLength - state.value?.length}</span> : null}
        </div>
      ) : null}
    </div>
  )
}
