import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { CacheField } from '../sq-modal-profile-cache/sq-modal-profile-cache.component'
import { SqInput } from '../inputs/sq-input'

interface Props {
  fieldsCache: CacheField[]
  onSubmit: () => void
  onChange: (field: CacheField, value: string) => void
  state: Record<CacheField, string>
}

export default ({ fieldsCache, onSubmit, onChange, state }: Props) => {
  const { t } = useTranslation('sqModalProfileCache')

  const moneyMask = (value: string) => {
    if (!value) {
      return ''
    }

    value = value?.replace('.', '')?.replace(',', '')?.replace(/\D/g, '')

    const options = { minimumFractionDigits: 2 }
    const result = new Intl.NumberFormat('pt-BR', options).format(parseFloat(value) / 100)

    return result
  }

  const handleChange = useCallback(
    (field: CacheField, value: string) => {
      if (onChange && typeof onChange === 'function') {
        onChange(field, value)
      }
    },
    [onChange],
  )

  return (
    <form className="form-profile-cache mt-5" onSubmit={() => onSubmit()}>
      {fieldsCache?.map((field, i) => (
        <SqInput
          key={i}
          label={t(`labels.${field}`, { count: 1 })}
          leftLabel={'R$'}
          value={moneyMask(state[field])}
          onChange={(value: string) => handleChange(field, value)}
        />
      ))}
    </form>
  )
}