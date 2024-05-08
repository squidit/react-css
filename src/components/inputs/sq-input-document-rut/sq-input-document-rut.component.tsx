import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Subscription } from 'rxjs'
import SqValidatorHelper from '@/src/helpers/sq-validator/sq-validator.helper'
import { SqLoader } from '../../sq-loader'

import './sq-input-document-rut.component.scoped.scss'
import './sq-input-document-rut.component.scss'

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
  isNew?: boolean
  originalValue?: string
  placeholder?: string
  requiredOnLoad?: boolean
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
  errorIcon,
  externalError,
  id,
  name,
  leftLabel,
  rightLabel,
  externalIcon,
  value = '',
  isNew = false,
  originalValue,
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
  const validator = useMemo(() => new SqValidatorHelper(), [])

  const [timer, setTimer] = useState<any>(null)
  const [state, setState] = useState<State>({
    value: value,
    error: '',
    validatedDocument: false,
  })
  const { t } = useTranslation('sqInputDocumentRut')

  const setMaskRut = (rut: string) => {
    const num = rut.replace(/[^\dkK]/g, '')
    const len = num.length

    if (len <= 6) {
      rut = num.replace(/(\d{1})(\d{1,3})/g, '$1.$2')
    } else if (len <= 7) {
      rut = num.replace(/(\d{1})(\d{3})(\d{1,3})/g, '$1.$2.$3')
    } else {
      rut = num.replace(/(\d{1,2})(\d{3})(\d{3})([\dkK])/g, '$1.$2.$3-$4')
    }
    return rut
  }

  const setValue = async (value: string) => {
    const newState: State = { value: '', validatedDocument: false, error: '' }
    newState.value = value
    setState((prevState) => ({ ...prevState, value: setMaskRut(newState.value.toUpperCase()) }))

    const checkDocument = async () => {
      if (externalError) {
        newState.error = ''
        newState.validatedDocument = true
      } else if (!!required && (!newState.value || newState.value.length < 1)) {
        newState.error = t('required')
        newState.validatedDocument = false
      } else if (!validator.Fn.validaRut(newState.value) || newState?.value?.replace(/[^0-9k]/gi, '').length < 8) {
        newState.error = t('invalidRUT')
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

  const handleChange = async (event: any) => {
    setValue(event.target.value)
  }

  useEffect(() => {
    if (state.value) {
      setValue(state.value)
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
          type="text"
          maxLength={12}
          name={name || timestamp}
          placeholder={'#.###.##-#'}
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
