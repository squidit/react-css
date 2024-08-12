'use client'

import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import './sq-selector.component.scoped.scss'

export interface SelectorProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'checkbox' | 'radio'
  style?: any
  name?: string
  id?: string
  value?: any
  checked?: boolean
  disabled?: boolean
  readOnly?: boolean
  required?: boolean
  toggle?: boolean
  rightLabel?: any
  leftLabel?: any
  externalError?: any
  errorIcon?: any
  errorSpan?: boolean
  hideInput?: boolean
  labelFontSize?: string
  wrapperClass?: string
  requiredOnLoad?: boolean
  boxBgSecondary?: boolean
  onChange?: (event: any) => any
  onEmitValue?: (value: any) => any
  onValidate?: (event: any) => any
}

interface SelectorState {
  checked: boolean
  error: string
  value: any
}

export default ({
  type = 'checkbox',
  name,
  id,
  value = '',
  checked = false,
  disabled,
  readOnly,
  required,
  toggle,
  rightLabel,
  leftLabel,
  externalError,
  errorIcon = <i className="fa-regular fa-exclamation-triangle"></i>,
  errorSpan = true,
  hideInput,
  requiredOnLoad = false,
  boxBgSecondary = false,
  onChange,
  onEmitValue,
  onValidate,
  className = '',
  wrapperClass = '',
  labelFontSize = '1rem',
  style,
}: SelectorProps) => {
  const timestamp = `random-id-${(1 + Date.now() + Math.random()).toString().replace('.', '')}`
  const [state, setState] = useState<SelectorState>({
    value: value,
    error: '',
    checked: false,
  })
  const { t } = useTranslation()

  useEffect(() => {
    if (state.value !== value) {
      setState({ ...state, value })
    }
    if (state.checked !== checked) {
      setState({ ...state, checked })
    }
  }, [value, checked, state])

  const handleChange = (event: any) => {
    state.checked = event?.target?.checked || false
    if (externalError) {
      state.error = ''
    } else if (!!required && !state.checked) {
      state.error = t('required')
    } else {
      state.error = ''
    }
    setState({ ...state })
    if (onValidate && typeof onValidate === 'function') {
      onValidate(!state.error && !externalError)
    }
    if (onEmitValue && typeof onEmitValue === 'function') {
      onEmitValue(state.value)
    }
    if (onChange && typeof onChange === 'function') {
      onChange(state.checked)
    }
  }

  return (
    <div className={`selector ${className}`}>
      <div
        className={
          'wrapper-selectors ' +
          `${checked ? 'checked ' : ''}` +
          `${state.error ? 'error ' : ''}` +
          `${toggle ? 'toggle ' : ''} ${wrapperClass}`
        }
      >
        {leftLabel ? (
          <label
            className={'mr-2 label ' + `${readOnly ? 'readonly ' : ''}` + `${externalError || state.error ? 'error ' : ''}`}
            htmlFor={id || timestamp}
            style={{ fontSize: labelFontSize }}
          >
            {leftLabel}
          </label>
        ) : null}
        <input
          id={id || timestamp}
          name={name || timestamp}
          type={type}
          onChange={handleChange}
          required={required}
          disabled={disabled || readOnly}
          readOnly={readOnly}
          checked={checked}
          value={value}
          style={{ ...style }}
        />
        <label
          htmlFor={id || timestamp}
          className={
            `checkbox ${type} ` +
            `${disabled ? 'disabled ' : ''}` +
            `${readOnly ? 'readonly ' : ''}` +
            `${hideInput ? 'hide-input ' : ''}` +
            `${boxBgSecondary && !checked ? 'bg-secondary ' : ''}`
          }
        ></label>
        {rightLabel ? (
          <label
            className={'label ' + `${readOnly ? 'readonly ' : ''}` + `${externalError || state.error ? 'error ' : ''}`}
            htmlFor={id || timestamp}
            style={{ fontSize: labelFontSize }}
          >
            {rightLabel}
          </label>
        ) : null}
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
