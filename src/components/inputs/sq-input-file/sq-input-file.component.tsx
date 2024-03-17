import Loader from '@components/sq-loader/sq-loader.component'
import ColorsHelper from '@helpers/sq-colors.helper'
import ObjectHelper from '@helpers/sq-object.helper'
import { useEffect, useState } from 'react'

import './sq-input-file.component.scoped.scss'

export interface Props extends React.InputHTMLAttributes<HTMLDivElement> {
  label?: any
  disabled?: boolean
  errorSpan?: boolean
  loading?: boolean
  required?: boolean
  externalError?: any
  errorIcon?: any
  value?: any
  placeholder?: string
  textColor?: string
  backgroundColor?: string
  borderColor?: string
  onChange?: (event: any) => any
  onValidate?: (event: any) => any
  accept?: string
  maxFileSize?: number | null
  multiple?: boolean
  showButton?: boolean
  requiredOnLoad?: boolean
  buttonStyle?: any
  buttonInverted?: boolean
  buttonInvertedHover?: boolean
  buttonRounded?: boolean
  buttonSize?: 'sm' | 'md' | 'lg' | 'xl'
  showFileName?: boolean
}

export interface State {
  error: string
  value: any
}

export default ({
  className = '',
  id = '',
  name = '',
  label = '',
  disabled = false,
  errorSpan = true,
  loading = false,
  required = false,
  externalError = '',
  errorIcon = '',
  value = '',
  placeholder = '',
  textColor = 'var(--secondary_color)',
  backgroundColor = 'var(--primary_color)',
  borderColor = 'var(--primary_color)',
  accept = '*.*',
  maxFileSize = null,
  multiple = false,
  onChange,
  onValidate,
  children,
  showButton = true,
  requiredOnLoad = false,
  buttonStyle,
  buttonInverted = false,
  buttonInvertedHover = false,
  buttonRounded = false,
  buttonSize,
  showFileName = true,
}: Props) => {
  const timestamp = `random-id-${(1 + Date.now() + Math.random()).toString().replace('.', '')}`
  const colorsHelper = new ColorsHelper()
  const objectHelper = new ObjectHelper()
  const [state, setState] = useState<State>({
    value: [],
    error: '',
  })
  const [buttonHover, setButtonHover] = useState<boolean>(false)

  const getHover = (color: string) => {
    return colorsHelper?.lightenDarkenColor(colorsHelper?.getCssVariableValue(color), -50)
  }

  const getHoverBg = () => {
    if (buttonInvertedHover) {
      return getHover(textColor)
    }
    return getHover(backgroundColor)
  }

  const getHoverText = () => {
    if (buttonInvertedHover) {
      return getHover(backgroundColor !== 'transparent' ? backgroundColor : 'var(--white-html)')
    }
    return getHover(textColor !== 'transparent' ? textColor : 'var(--white-html)')
  }

  const handleChange = (event: any) => {
    state.value = event?.target?.files || event || []

    if (externalError) {
      state.error = ''
    } else if (!!required && (!state.value || state.value.length < 1) && state.value !== 0) {
      state.error = 'required'
    } else if (maxFileSize && maxFileSize > 0) {
      let bigFiles = 0
      for (const file of state.value) {
        if (file.size > maxFileSize) {
          bigFiles++
        }
      }
      if (bigFiles > 0) {
        state.error = 'fileSize'
      } else {
        state.error = ''
      }
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

  useEffect(() => {
    if (value && !objectHelper.compareObjects(value, state?.value)) {
      handleChange(value)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, state.value, objectHelper])

  return (
    <div className={`wrapper-all-inside-input ${className}`}>
      {label ? (
        <label className="label" htmlFor={id || timestamp}>
          {label}
        </label>
      ) : null}
      <input
        id={id || timestamp}
        name={name || timestamp}
        type="file"
        className="input-file"
        accept={accept}
        onChange={handleChange}
        multiple={multiple}
        disabled={disabled || loading}
      />
      {showButton ? (
        <label
          htmlFor={id || timestamp}
          onMouseOver={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
          onFocus={() => null}
          className={
            `button button-${backgroundColor} ` +
            `${buttonRounded ? 'rounded ' : ''}` +
            `${buttonInverted ? 'inverted ' : ''}` +
            `${buttonSize ? `button-${buttonSize} ` : ''}` +
            `${disabled ? 'disabled ' : ''}` +
            `${loading ? 'loading ' : ''}` +
            `${className}`
          }
          style={{
            backgroundColor: buttonHover ? getHoverBg() : backgroundColor,
            borderColor: buttonHover ? getHover(borderColor || textColor) : borderColor || textColor,
            color: buttonHover ? getHoverText() : textColor,
            ...buttonStyle,
          }}
        >
          {placeholder}
          {loading ? <Loader className="ml-3" size="small" color={backgroundColor} style={{ position: 'absolute' }} /> : null}
        </label>
      ) : null}
      {children ? (
        <label htmlFor={id || timestamp} className="children">
          {children}
        </label>
      ) : null}
      {errorSpan ? (
        <div className={'box-validation box-invalid show '}>
          {requiredOnLoad && !state.value && !state.error && !externalError ? (
            <div>
              <i className="fa-solid-fa-diamond-exclamation gold"></i>
              Fill this field
            </div>
          ) : null}
          {state.error || externalError ? errorIcon || <i className="fa-regular fa-exclamation-triangle"></i> : null}
          {externalError ? externalError : ''}
          {state.error && !externalError ? state.error : ''}
        </div>
      ) : null}
      {showFileName ? (
        <div className="file-name">
          {state?.value?.length > 0 ? (
            <>
              <span>Selected Files:</span>
              <ul>{Array.from(state?.value)?.map((file: any, index) => <li key={index}>{file?.name}</li>)}</ul>
            </>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}
