import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { SqInput } from '../inputs/sq-input'
import { CacheField } from '@/src/interfaces/sq-profile-cache.interface'

interface Props {
  fieldsCache: CacheField[]
  onSubmit: () => void
  onChange: (field: CacheField, value: string) => void
  state: Record<CacheField, string>
}

export default ({ fieldsCache, onSubmit, onChange, state }: Props) => {
  const { t } = useTranslation('sqModalProfileCache')

  const moneyMask = (value: string) => {
    if (!value || value === '') {
      return '0,00'
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
    <form
      className="form-profile-cache mt-5"
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit()
      }}
    >
      {fieldsCache?.map((field, i) => (
        <SqInput
          key={`${field}-${i}`}
          label={t(`labels.${field}`, { count: 1 })}
          leftLabel={'R$'}
          value={moneyMask(state[field])}
          onChange={(value: string) => handleChange(field, value)}
        />
      ))}
    </form>
  )
}
