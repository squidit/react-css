import { Props, State } from '@components/inputs/sq-input/sq-input.component'
import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import '@components/inputs/sq-input/sq-input.component.scoped.scss'
import './sq-input-password.component.scoped.scss'
import './sq-input-password.component.scss'

const DELAY_TIME_FOR_TYPING_PAUSE = 800

interface PasswordState extends State {
  type: 'password' | 'text'
  labelRules: LabelRules[]
}

interface LabelRules {
  message?: string
  type?: 'success' | 'error'
}

export interface PasswordProps extends Props {
  showValidation?: boolean
}

export default ({
  label,
  disabled = false,
  readOnly = false,
  errorSpan = true,
  required,
  externalError,
  id,
  name,
  leftLabel,
  rightLabel,
  errorIcon,
  value = '',
  placeholder,
  showValidation,
  backgroundColor = '',
  autoComplete = 'off',
  className = '',
  requiredOnLoad = false,
  onChange,
  onValidate,
  onTimeout,
}: PasswordProps) => {
  const { t } = useTranslation()
  const timestamp = `random-id-${(1 + Date.now() + Math.random()).toString().replace('.', '')}`
  const [timer, setTimer] = useState<any>(null)
  const [state, setState] = useState<PasswordState>({
    value: value,
    error: '',
    type: 'password',
    labelRules: [],
  })

  const validationsRules = useCallback(() => {
    return {
      lessThanEight: (password: string): LabelRules => ({
        message: t('fields.password.lessThanEight'),
        type: password.length < 8 ? 'error' : 'success',
      }),
      noNumber: (password: string): LabelRules => ({
        message: t('fields.password.noNumber'),
        type: !password.split('').some((char) => /[0-9]/.test(char)) ? 'error' : 'success',
      }),
      noUppercase: (password: string): LabelRules => ({
        message: t('fields.password.noUppercase'),
        type: !password.split('').some((char) => /[A-Z]/.test(char)) ? 'error' : 'success',
      }),
      noLowercase: (password: string): LabelRules => ({
        message: t('fields.password.noLowercase'),
        type: !password.split('').some((char) => /[a-z]/.test(char)) ? 'error' : 'success',
      }),
    }
  }, [t])

  const validatePassword = useCallback(
    (password: string): LabelRules[] => {
      let err: any = []
      const validations: any = validationsRules()

      for (const check in validations) {
        err = [...err, validations[check](password)]
      }

      if (password.length === 0) {
        err = []
      }

      return err
    },
    [validationsRules],
  )

  const handleChange = (event: any): void => {
    state.value = event?.target?.value || (event?.length ? event : '')
    if (externalError) {
      state.error = ''
    } else if (!!required && (!state.value || state.value.length < 1)) {
      state.error = t('required')
    } else {
      state.error = ''
    }
    const labelRules = validatePassword(state.value)
    state.labelRules = labelRules
    setState({ ...state })
    if (onValidate && typeof onValidate === 'function') {
      if (showValidation) {
        onValidate(!state.error && !externalError && state.labelRules.filter(({ type }) => type === 'error').length === 0)
      } else {
        onValidate(!state.error && !externalError)
      }
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
    <div className={`wrapper-all-inside-input password-input ${className}`}>
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
          type={state.type}
          name={name || timestamp}
          placeholder={placeholder || ''}
          value={state.value}
          required={required}
          disabled={disabled}
          readOnly={readOnly}
          onChange={handleChange}
          autoComplete={autoComplete}
        />
        {rightLabel ? <span className="input-group-text">{rightLabel}</span> : null}
      </div>
      <button
        className={`button-show-password ${!label ? 'no-label' : ''}`}
        type="button"
        title={state.type === 'password' ? t('showPassword') : t('hidenPassword')}
        onClick={() => setState({ ...state, type: state.type === 'password' ? 'text' : 'password' })}
      >
        {state.type === 'password' ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i>}
      </button>
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
          {showValidation
            ? state.labelRules?.map(({ message, type }, index) => (
                <p key={index} className="rules-validations">
                  {type === 'success' ? <i className={'fa-regular fa-check green'}></i> : <i className={'fa-regular fa-times red'}></i>}
                  {message}
                </p>
              ))
            : null}
          {state.error && !externalError ? state.error : ''}
        </div>
      ) : null}
    </div>
  )
}
