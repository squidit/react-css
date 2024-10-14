'use client'
import { useState } from 'react'
import OptionList from '../../interfaces/sq-option-list.interface'
import ToggleCheckbox from '../sq-toggle-checkbox/sq-toggle-checkbox.component'
import './sq-toggle-checkbox-group.component.scoped.scss'

export interface ToggleCheckboxGroupProps {
  defaultValue: string
  contentList: OptionList[]
  colorSelector?: string
  name?: string
  onChange?: (value: string) => void
}

const ToggleCheckboxGroup = ({ name = '', defaultValue = '', contentList = [], colorSelector, onChange }: ToggleCheckboxGroupProps) => {
  const [value, setValue] = useState<string>(defaultValue)
  const handleChange = (value: string, checked: boolean) => {
    if (checked) {
      setValue(value)
      if (onChange && typeof onChange === 'function') {
        onChange(value)
      }
    }
  }
  return (
    <div className="toggle-switch-group">
      {contentList.map((content) => (
        <ToggleCheckbox
          key={`${content.id}-${content.value}-${name}`}
          id={`toggle-checkbox-${content.value}-${name}`}
          name={`${content.value}-${name}`}
          hideInput={true}
          toggleSwitch={true}
          checked={value === content.value}
          onChange={(checked: boolean) => handleChange(content.value, checked)}
          type={'checkbox'}
          label={content.label}
          colorBackground={colorSelector}
        ></ToggleCheckbox>
      ))}
    </div>
  )
}

export default ToggleCheckboxGroup
