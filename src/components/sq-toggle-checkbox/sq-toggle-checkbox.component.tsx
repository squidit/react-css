import { useEffect, useMemo } from 'react'
import './sq-toggle-checkbox.component.scoped.scss'

export interface ToggleCheckboxProps {
  type: string
  name: string
  id?: string
  checked?: boolean
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  colorBackground?: string
  hideInput?: boolean
  block?: boolean
  toggle?: boolean
  direction?: string
  toggleSwitch?: boolean
  label?: string
  onChange?: (value: boolean) => void
}

const ToggleCheckbox = ({
  type = 'checkbox',
  id,
  name,
  checked,
  disabled,
  readonly,
  required,
  colorBackground = 'var(--primary_color)',
  hideInput = false,
  block = false,
  toggle = false,
  toggleSwitch = true,
  direction = 'left',
  onChange,
  label,
}: ToggleCheckboxProps) => {
  const handleChange = (event: boolean) => {
    if (onChange && typeof onChange === 'function') {
      onChange(event)
    }
  }
  const colorBackgroundDefault = 'var(--white-html)'
  const colorTextDefault = 'var(--color_text)'
  const timeStamp = useMemo(() => `random-id-${(1 + Date.now() + Math.random()).toString().replace('.', '')}`, [])

  useEffect(() => {}, [checked])
  return (
    <div
      className={`wrapper-selectors ${checked ? 'checked' : ''} ${block ? 'display-block' : ''} ${toggle ?? ''} ${
        toggleSwitch ? 'toggle-switch' : ''
      }`}
      style={{
        backgroundColor: checked ? `${colorBackground}` : colorBackgroundDefault,
        color: checked ? 'var(--white-html)' : colorTextDefault,
      }}
    >
      <input
        id={`${id ?? timeStamp}`}
        name={`${name || timeStamp}`}
        type={type}
        onChange={(event) => handleChange(event.target.checked)}
        disabled={disabled}
        readOnly={readonly}
        required={required}
        checked={checked}
        className={`${toggleSwitch ? 'toggle-switch-checkbox' : ''} ${direction === 'right' ? 'direction-right' : 'direction-left'}`}
      />
      <label htmlFor={`${id ?? timeStamp}`} className={`${disabled ?? ''} ${hideInput ? 'display-none' : ''} checkbox`}>
        {label}
      </label>
      <label
        htmlFor={`${id ?? timeStamp}`}
        style={{
          color: checked ? 'var(--white-html)' : colorTextDefault,
        }}
      >
        {label}
      </label>
    </div>
  )
}

export default ToggleCheckbox
