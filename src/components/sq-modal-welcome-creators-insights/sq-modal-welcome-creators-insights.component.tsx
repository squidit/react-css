'use client'

import React, { useCallback, useState } from 'react'
import SqModalComponent, { Props as ModalProps } from '../sq-modal/sq-modal.component'
import FirstImage from '../../assets/img/svg/welcome-creators-insights-1.svg'
import SecondImage from '../../assets/img/svg/welcome-creators-insights-2.svg'
import ThirdImage from '../../assets/img/svg/welcome-creators-insights-3.svg'
import { SqButton } from '../buttons/sq-button'
import SqFlowComponent from '../sq-flow/sq-flow.component'
import { useTranslation } from 'react-i18next'

import './sq-modal-welcome-creators-insights.component.scoped.scss'

const QTD_PAGES = 3

export interface Props extends ModalProps {
  onConfirm?: () => void
  open?: boolean
}

export default ({ className = '', onCloseChange, onConfirm, open, onOpenChange, ...props }: Props) => {
  const [t] = useTranslation('sqModalWelcomeCreatorsInsights')

  const [activePage, setActivePage] = useState(0)

  const handleOpenChange = useCallback(
    (open: boolean) => {
      if (onOpenChange && typeof onOpenChange === 'function') {
        setActivePage(0)
        onOpenChange(open)
      }
    },
    [onOpenChange],
  )

  const handleNext = useCallback(() => {
    if (activePage < QTD_PAGES - 1) {
      setActivePage(activePage + 1)
    } else {
      if (onConfirm && typeof onConfirm === 'function') {
        onConfirm()
      }
      handleOpenChange(false)
    }
  }, [activePage, onConfirm, handleOpenChange])

  const factoryContent = [
    {
      title: t('firstPage.title'),
      description: t('firstPage.description'),
      image: FirstImage,
    },
    {
      title: t('secondPage.title'),
      description: t('secondPage.description'),
      image: SecondImage,
    },
    {
      title: t('thirdPage.title'),
      description: t('thirdPage.description'),
      image: ThirdImage,
    },
  ]

  return (
    <SqModalComponent
      {...props}
      open={open}
      className={`sq-modal-steps ${className}`}
      onCloseChange={() => handleOpenChange(!open)}
      modalSize="sm"
    >
      <div className="content position-relative display-flex pb-0 pt-3 px-3" style={{ backgroundColor: 'var(--purple-90)' }}>
        <SqButton className="button-close position-absolute" color="var(--purple-95)" onClick={() => handleOpenChange(false)}>
          <span className="display-flex justify-content-center align-items-center">
            <i className="fa-solid fa-x small" />
          </span>
        </SqButton>
        <div className="content display-flex align-items-end mt-5">
          <h3 className="title text-center">{factoryContent?.[activePage]?.title}</h3>
          <img src={factoryContent?.[activePage]?.image} alt="Background" />
        </div>
        <div className="footer position-relative p-3 display-flex">
          <p className="description text-center m-4">{factoryContent?.[activePage]?.description}</p>
          <div className="actions display-flex justify-content-space-between mt-3">
            <SqFlowComponent steps={Array(QTD_PAGES)} active={activePage} color="var(--primary_color)" style={{ width: '100px' }} />
            <SqButton size="sm" onClick={() => handleNext()}>
              {t('next')}
            </SqButton>
          </div>
        </div>
      </div>
    </SqModalComponent>
  )
}
