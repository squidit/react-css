import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Input from '../sq-input/sq-input.component'
import SelectorComponent from '../sq-selector/sq-selector.component'

import './sq-multi-select.component.scoped.scss'
import './sq-multi-select.component.scss'
import SqObjectHelper from '@/src/helpers/sq-object/sq-object.helper'
import { SqButton } from '../../buttons/sq-button'
import { SqLoader } from '../../sq-loader'

export interface Option {
  id: number | string
  label: string
}

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  options: Option[]
  label?: any
  externalError?: any
  leftLabel?: any
  rightLabel?: any
  id?: string
  name?: string
  placeholder?: string
  autoComplete?: string
  loading?: boolean
  externalIcon?: any
  errorSpan?: boolean
  required?: boolean
  requiredOnLoad?: boolean
  errorIcon?: any
  disabled?: boolean
  readOnly?: boolean
  backgroundColor?: string
  maxSelectedOptions?: number | null
  value?: Option[]
  onChange?: (event: any) => any
  onValidate?: (event: any) => any
}

interface State {
  selectedOptions: Option[]
  availableOptions: Option[]
  searchFilter?: string
  error: string
}

interface Validation {
  selectedOptions: boolean
  searchFilter?: boolean
}

export default ({
  className = '',
  label = '',
  externalError,
  leftLabel,
  rightLabel,
  id,
  name,
  autoComplete = 'off',
  loading,
  externalIcon,
  errorSpan = true,
  requiredOnLoad = false,
  required,
  errorIcon = <i className="fa-regular fa-exclamation-triangle"></i>,
  placeholder,
  maxSelectedOptions = null,
  disabled,
  readOnly,
  backgroundColor = 'var(--background)',
  options,
  value,
  onChange,
  onValidate,
}: Props) => {
  const timestamp = `random-id-${(1 + Date.now() + Math.random()).toString().replace('.', '')}`
  const objectHelper = useMemo(() => new SqObjectHelper(), [])
  const boxOptionsRef = useRef<HTMLDivElement>(null)
  const optionsSelectedRef = useRef<HTMLDivElement>(null)
  const [heightSelect, setHeightSelect] = useState(0)
  const [open, setOpen] = useState(false)
  const [state, setState] = useState<State>({
    selectedOptions: [],
    availableOptions: options,
    searchFilter: '',
    error: '',
  })
  const [validation, setValidation] = useState<Validation>({
    selectedOptions: false,
    searchFilter: false,
  })

  const { t } = useTranslation()

  const handleChange = useCallback(
    (value: Option[]) => {
      if (onChange && typeof onChange === 'function') {
        onChange(value)
      }
    },
    [onChange],
  )

  const handleValidate = useCallback(
    (isValid: boolean) => {
      if (onValidate && typeof onValidate === 'function') {
        onValidate(isValid)
      }
    },
    [onValidate],
  )

  const handleOptionSelect = useCallback(
    (selectedOption?: Option) => {
      if ((selectedOption && maxSelectedOptions && state.selectedOptions.length < maxSelectedOptions) || !maxSelectedOptions) {
        state.selectedOptions = [...state?.selectedOptions]
        if (selectedOption) {
          state.selectedOptions.push(selectedOption)
        }

        if (externalError) {
          state.error = ''
        } else if (!!required && !state?.selectedOptions?.length) {
          state.error = t('required')
        } else {
          state.error = ''
        }

        setState({ ...state })
        handleChange(state?.selectedOptions)
        handleValidate(!!required && state?.selectedOptions?.length < 1)
      }
    },
    [externalError, maxSelectedOptions, required, state, t, handleChange, handleValidate],
  )

  const handleOptionDeselect = useCallback(
    (deselectedOption?: Option) => {
      if (deselectedOption) {
        state.selectedOptions = state?.selectedOptions?.filter((option) => option?.id !== deselectedOption?.id)

        if (externalError) {
          state.error = ''
        } else if (!!required && !state?.selectedOptions?.length) {
          state.error = t('required')
        } else {
          state.error = ''
        }

        setState({ ...state })
        handleChange(state?.selectedOptions)
        handleValidate(!!state?.selectedOptions?.length)
      }
    },
    [externalError, required, state, t, handleChange, handleValidate],
  )

  const handleChangeSelectedOptions = useCallback(
    (checked: boolean, option: Option) => {
      if (checked) {
        handleOptionSelect(options.find((opt) => opt?.id === option?.id))
      } else {
        handleOptionDeselect(options.find((opt) => opt?.id === option?.id))
      }
    },
    [handleOptionDeselect, handleOptionSelect, options],
  )

  useEffect(() => {
    if (value && !objectHelper?.compareObjects(value, state.selectedOptions)) {
      value?.forEach((v) => handleOptionSelect(v))
    }
  }, [value, handleOptionSelect, objectHelper, state.selectedOptions])

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (boxOptionsRef.current && !boxOptionsRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  useLayoutEffect(() => {
    const { height } = optionsSelectedRef.current?.getBoundingClientRect() || { height: 0 }
    setHeightSelect(height + 14)
  }, [state?.selectedOptions])

  return (
    <div className={`wrapper-all-inside-input ${className}`}>
      {label ? (
        <label className={'label ' + `${externalError || state.error ? 'error ' : ''}`} htmlFor={id || timestamp}>
          {label}
          {maxSelectedOptions ? (
            <span className="gray">{` (${t('fields.multiSelect.maxOptionsSelected', { count: maxSelectedOptions })})`}</span>
          ) : null}
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
            height: state?.selectedOptions?.length ? `${heightSelect}px` : 'auto',
            borderRadius: '5px',
          }}
          id={id || timestamp}
          name={name || timestamp}
          required={required}
          disabled={
            disabled ||
            readOnly ||
            (maxSelectedOptions && state.selectedOptions.length >= maxSelectedOptions) ||
            !state?.availableOptions?.length
          }
          onMouseDown={(e) => {
            e.preventDefault()
            setOpen(true)
            return false
          }}
          onClick={() => setOpen(true)}
          autoComplete={autoComplete}
        ></select>
        <div className="options-selected display-flex justify-content-start mx-3" style={{ flexWrap: 'wrap' }} ref={optionsSelectedRef}>
          {state?.selectedOptions.map((option, i) => (
            <SqButton
              key={`option-selected-tag-${i}`}
              className={'option-selected-tag'}
              onClick={() => handleOptionDeselect(option)}
              color="var(--background_secondary)"
              borderColor="var(--border_color)"
              textColor="var(--text_color)"
              style={{ padding: '0 5px', border: '1px solid var(--gray_light)', display: 'flex', gap: '5px' }}
            >
              <span className="text-normal" style={{ fontWeight: '400' }}>
                {option?.label}
              </span>
              <span className="text-bold" style={{ fontWeight: '400' }}>
                x
              </span>
            </SqButton>
          ))}
        </div>
        {rightLabel ? <span className="input-group-text">{rightLabel}</span> : null}
        {open && (
          <div className="box-options" ref={boxOptionsRef}>
            <Input
              value={state?.searchFilter}
              type="text"
              className="search-filter-multi-select-input p-3"
              name="search-filter-multi-select-input"
              id="search-filter-multi-select-input"
              onChange={(searchFilter: string) => setState((prevState) => ({ ...prevState, searchFilter }))}
              onValidate={(searchFilter: boolean) => setValidation((prevValidation) => ({ ...prevValidation, searchFilter }))}
              rightLabel={<i className="fa-solid fa-search"></i>}
              errorSpan={false}
              placeholder={t('search')}
            />
            <ul className="list-options scrollbar">
              {state?.availableOptions
                ?.filter((option) => new RegExp(state?.searchFilter || '', 'i').test(option?.label))
                ?.map((option, index) => (
                  <li className="option" key={`option-item-${index}`} style={{ overflow: 'hidden', padding: '1rem' }}>
                    <SelectorComponent
                      errorSpan={false}
                      key={`option-${index}`}
                      type="checkbox"
                      value={option?.id}
                      checked={!!state?.selectedOptions?.find((opt) => opt?.id === option?.id)}
                      rightLabel={option?.label}
                      onChange={(checked: boolean) => handleChangeSelectedOptions(checked, option)}
                    ></SelectorComponent>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
      {loading ? (
        <SqLoader size="small" className={`display-block loader-select ${!label ? 'no-label' : ''}`} style={{ position: 'absolute' }} />
      ) : null}
      {externalIcon && !loading ? <span className={'icon icon-external ' + `${!label ? 'no-label ' : ''}`}>{externalIcon}</span> : null}
      {errorSpan ? (
        <div className="box-validation box-invalid show">
          {requiredOnLoad && !state?.selectedOptions?.length && !state.error && !externalError ? (
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
