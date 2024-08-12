'use client'

import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Input, { Props, State } from '../sq-input/sq-input.component'
import SqValidatorHelper from '@/src/helpers/sq-validator/sq-validator.helper'

const DELAY_TIME_FOR_TYPING_PAUSE = 800

export default ({
  label,
  disabled = false,
  readOnly = false,
  errorSpan = true,
  maxLength,
  loading,
  required,
  externalError,
  id,
  name,
  leftLabel,
  rightLabel,
  externalIcon,
  errorIcon,
  value = '',
  placeholder,
  min,
  max,
  backgroundColor = '',
  autoComplete = 'off',
  className = '',
  onChange,
  onValidate,
  onTimeout,
  requiredOnLoad = false,
}: Props) => {
  const validatorHelper = useMemo(() => new SqValidatorHelper(), [])

  const [validation, setValidation] = useState(false)
  const [timer, setTimer] = useState<any>(null)
  const [state, setState] = useState<State>({
    value: value,
    error: '',
  })
  const { t } = useTranslation('sqInputName')

  const handleChange = (value: string): void => {
    let error = ''
    if (!value || value === '' || value.length < 1) {
      error = t('required')
    } else if (!validatorHelper.nameSpecialChars(value)) {
      error = t('nameSpecialChars')
    } else if (!validatorHelper.fullName(value)) {
      error = t('fullNameRequired')
    }
    setState((prevState) => ({ ...prevState, value, error }))
    if (onValidate && typeof onValidate === 'function') {
      onValidate(!error && !externalError)
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

  useEffect(() => {
    if (state.value !== value) {
      handleChange(value)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, state])

  useEffect(() => {
    return () => {
      clearTimeout(timer)
    }
  }, [timer])

  return (
    <Input
      label={label}
      value={value}
      className={className}
      placeholder={placeholder}
      name={name}
      id={id}
      onChange={handleChange}
      onValidate={(name: boolean) => setValidation(name)}
      externalError={externalError ? externalError : state.error}
      readOnly={readOnly}
      autoComplete={autoComplete}
      required={required}
      disabled={disabled}
      errorSpan={errorSpan}
      leftLabel={leftLabel}
      requiredOnLoad={requiredOnLoad}
      errorIcon={errorIcon}
      rightLabel={rightLabel}
      backgroundColor={backgroundColor}
      maxLength={maxLength}
      loading={loading}
      type="text"
      externalIcon={externalIcon}
      min={min}
      max={max}
    />
  )
}
