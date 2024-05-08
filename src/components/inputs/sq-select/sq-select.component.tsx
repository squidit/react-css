import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './sq-select.component.scoped.scss'
import './sq-select.component.scss'
import { SqLoader } from '../../sq-loader'

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
  leftLabel?: any
  rightLabel?: any
  externalIcon?: any
  errorIcon?: any
  value?: number | string
  placeholder?: string
  backgroundColor?: string
  autoComplete?: string
  requiredOnLoad?: boolean
  onChange?: (event: any) => any
  onValidate?: (event: any) => any
}

export interface State {
  error: string
  value: any
}

export default ({
  label,
  disabled,
  readOnly,
  errorSpan = true,
  loading,
  required,
  externalError,
  errorIcon = <i className="fa-regular fa-exclamation-triangle"></i>,
  id,
  name,
  leftLabel,
  rightLabel,
  externalIcon,
  value = '',
  placeholder,
  backgroundColor = '',
  autoComplete = 'off',
  onChange,
  onValidate,
  className = '',
  children,
  requiredOnLoad = false,
}: Props) => {
  const timestamp = `random-id-${(1 + Date.now() + Math.random()).toString().replace('.', '')}`
  const [state, setState] = useState<State>({
    value: value,
    error: '',
  })
  const { t } = useTranslation()

  useEffect(() => {
    if (state.value !== value) {
      handleChange(value)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, state])

  const handleChange = (event: any) => {
    state.value = event?.target?.value || (event?.length ? event : '')
    if (externalError) {
      state.error = ''
    } else if (!!required && (!state.value || state.value.length < 1) && state.value !== 0) {
      state.error = t('required')
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
  }

  return (
    <div className={`wrapper-all-inside-input ${className}`}>
      {label ? (
        <label className={'label ' + `${externalError || state.error ? 'error ' : ''}`} htmlFor={id || timestamp}>
          {label}
        </label>
      ) : null}
      <div className={'no-padding wrapper-input wrapper-input-squid ' + `${externalError || state.error ? 'error ' : ''}`}>
        {leftLabel ? <span className="input-group-text">{leftLabel}</span> : null}
        <select
          className={
            'col select has-icon-extra-padding ' +
            `${disabled ? 'disabled ' : ''}` +
            `${readOnly ? 'readonly ' : ''}` +
            `${loading ? 'loading ' : ''}` +
            `${externalError || state.error ? 'error ' : ''}` +
            `${externalIcon ? 'has-icon-external ' : ''}`
          }
          style={{
            backgroundColor: backgroundColor,
          }}
          id={id || timestamp}
          name={name || timestamp}
          value={state.value}
          required={required}
          disabled={disabled || readOnly}
          onChange={handleChange}
          autoComplete={autoComplete}
        >
          {placeholder ? (
            <option value="" disabled>
              {placeholder}
            </option>
          ) : null}
          {children}
        </select>
        {rightLabel ? <span className="input-group-text">{rightLabel}</span> : null}
      </div>
      {loading ? (
        <SqLoader size="small" className={`display-block loader-select ${!label ? 'no-label' : ''}`} style={{ position: 'absolute' }} />
      ) : null}
      {externalIcon && !loading ? <span className={'icon icon-external ' + `${!label ? 'no-label ' : ''}`}>{externalIcon}</span> : null}
      {errorSpan ? (
        <div className="box-validation box-invalid show">
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
