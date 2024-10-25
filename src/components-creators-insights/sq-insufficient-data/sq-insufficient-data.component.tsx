'use client'

import './sq-insufficient-data.component.scoped.scss'
import { useTranslation } from 'react-i18next'

export default function SqInsufficientData() {
  const { t } = useTranslation('sqInsufficientData')

  return (
    <div className="text-center">
      <i className="icon-exclamation fa-regular fa-circle-exclamation mt-5"></i>
      <h4 className="mt-5">{t('insufficientData')}</h4>
    </div>
  )
}
