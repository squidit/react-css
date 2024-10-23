'use client'

import './sq-insufficient-data.component.scoped.scss'
import { useTranslation } from 'react-i18next'

export default function SqInsufficientData() {
  const { t } = useTranslation('sqInsufficientData')

  return (
    <div className="text-center">
      <i className="fa-regular fa-circle-exclamation"></i>
      <h3 className="mt-5">{t('insufficientData')}</h3>
    </div>
  )
}
