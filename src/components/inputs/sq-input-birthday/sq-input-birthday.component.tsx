'use client'

import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import InputDate from '../sq-input-date/sq-input-date.component'
import { State, Props } from '../sq-input/sq-input.component'
import SqValidatorHelper from '@/src/helpers/sq-validator/sq-validator.helper'

const DELAY_TIME_FOR_TYPING_PAUSE = 800

interface DateState extends State {
  dateObject: any
  type: 'date' | 'month'
}

export interface DateProps extends Props {
  type: 'date' | 'month' | 'text'
}

export default ({
  label,
  disabled = false,
  readOnly = false,
  errorSpan = true,
  requiredOnLoad = false,
  required,
  externalError,
  errorIcon,
  id,
  name,
  type = 'text',
  leftLabel,
  rightLabel,
  value = '',
  placeholder,
  backgroundColor = '',
  autoComplete = 'off',
  className = '',
  onChange,
  onValidate,
  onTimeout,
}: DateProps) => {
  const validatorHelper = useMemo(() => new SqValidatorHelper(), [])
  const { t } = useTranslation('sqInputBirthday')
  const [validation, setValidation] = useState(false)
  const [timer, setTimer] = useState<any>(null)
  const [state, setState] = useState<DateState>({
    value: value,
    error: '',
    dateObject: '',
    type: 'date',
  })

  const handleChange = (newValue: string): void => {
    const isUnderage = validatorHelper.ageLessThan(newValue, 18)
    const isGreaterThanAllowed = validatorHelper.ageOverThan(newValue, 100)
    let newError = ''
    if (isUnderage) {
      newError = t('ageUnder18')
    } else if (isGreaterThanAllowed) {
      newError = t('overThan100')
    }
    setState((prevState) => ({ ...prevState, value: newValue, error: newError }))
    if (onValidate && typeof onValidate === 'function') {
      onValidate(!newError && !externalError)
    }
    if (onChange && typeof onChange === 'function') {
      onChange(newValue)
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
    <InputDate
      label={label}
      value={value}
      name={name}
      id={id}
      className={className}
      type={type}
      requiredOnLoad={requiredOnLoad}
      placeholder={placeholder}
      onChange={handleChange}
      onValidate={(birthday: boolean) => setValidation(birthday)}
      externalError={externalError ? externalError : state.error}
      readOnly={readOnly}
      autoComplete={autoComplete}
      required={required}
      disabled={disabled}
      errorSpan={errorSpan}
      errorIcon={errorIcon}
      leftLabel={leftLabel}
      rightLabel={rightLabel}
      backgroundColor={backgroundColor}
    />
  )
}
