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

const colorBackgroundDefault = 'var(--background)'
const colorTextDefault = 'var(--title_color)'

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
        id={id}
        name={name}
        type={type}
        onChange={(event) => handleChange(event.target.checked)}
        disabled={disabled}
        readOnly={readonly}
        required={required}
        checked={checked}
        className={`${toggleSwitch ? 'toggle-switch-checkbox' : ''} ${direction === 'right' ? 'direction-right' : 'direction-left'}`}
      />
      <label htmlFor={id} className={`${disabled ? 'disabled' : ''} ${hideInput ? 'display-none' : ''} checkbox`}>
        {label}
      </label>
      {label && (
        <label
          htmlFor={id}
          className="text-center"
          style={{
            width: '100%',
            color: checked ? 'var(--white-html)' : colorTextDefault,
          }}
        >
          {label}
        </label>
      )}
    </div>
  )
}

export default ToggleCheckbox
