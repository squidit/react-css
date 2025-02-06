'use client'

import './sq-insufficient-data.component.scoped.scss'
import { useTranslation } from 'react-i18next'

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  iconColor?: string
}

const SqInsufficientData = ({ iconColor, className = '', ...props }: Props) => {
  const { t } = useTranslation('sqInsufficientData')

  return (
    <div className={`text-center display-flex justify-content-center insufficient-data ${className}`} {...props}>
      <i className="icon-exclamation fa-regular fa-circle-exclamation mt-5" style={{ color: iconColor || 'var(--neutral-35)' }}></i>
      <h4 className="mt-5">{t('insufficientData')}</h4>
    </div>
  )
}

export default SqInsufficientData
