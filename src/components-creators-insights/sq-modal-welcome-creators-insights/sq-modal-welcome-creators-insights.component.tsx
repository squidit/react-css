'use client'

import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import SqModalComponent, { Props as ModalProps } from '../../components/sq-modal/sq-modal.component'
import FirstImage from '../../assets/img/svg/welcome-creators-insights-1.svg'
import SecondImage from '../../assets/img/svg/welcome-creators-insights-2.svg'
import ThirdImage from '../../assets/img/svg/welcome-creators-insights-3.svg'
import { SqButton } from '../../components/buttons/sq-button'
import SqFlowComponent from '../../components/sq-flow/sq-flow.component'
import { useTranslation } from 'react-i18next'

import './sq-modal-welcome-creators-insights.component.scoped.scss'
import { SqLoader } from '@/src/components/sq-loader'

const QTD_PAGES = 3

export interface Props extends ModalProps {
  onConfirm?: () => void
  loading?: boolean
}

export default ({ className = '', onCloseChange, onConfirm, open, onOpenChange, loading, ...props }: Props) => {
  const moved = useRef(false)

  const [t] = useTranslation('sqModalWelcomeCreatorsInsights')

  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)
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

  const handlePrev = useCallback(() => {
    if (activePage > 0) {
      setActivePage(activePage - 1)
    } else {
      onOpenChange(false)
    }
  }, [activePage, onOpenChange])

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

  useEffect(() => {
    let startX: number | null = null
    const handleTouchMove = (event: TouchEvent) => {
      if (moved?.current) {
        return
      }

      if (!startX) {
        startX = event.touches[0].clientX
      }

      const currentX = event.touches[0].clientX
      const diffX = startX - currentX

      if (diffX > 50) {
        handleNext()
        moved.current = true
      }

      if (diffX < -50) {
        handlePrev()
        moved.current = true
      }
    }

    window.addEventListener('touchstart', (event) => {
      startX = event.touches[0].clientX
    })
    window.addEventListener('touchmove', handleTouchMove)
    window.addEventListener('touchend', () => {
      startX = null
      moved.current = false
    })

    return () => {
      window.removeEventListener('touchstart', () => {
        startX = null
      })
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [handleNext, handlePrev])

  useLayoutEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <SqModalComponent
      {...props}
      open={open}
      className={`sq-modal-steps ${className}`}
      onCloseChange={() => handleOpenChange(!open)}
      modalSize={width < 991 ? 'md' : 'sm'}
    >
      <div
        className="content position-relative display-flex pb-0 pt-3 px-3"
        style={{ backgroundColor: 'var(--purple-90)', height: width < 991 ? `${height}px` : 'auto' }}
      >
        <SqButton className="button-close position-absolute" color="var(--purple-95)" onClick={() => handleOpenChange(false)}>
          <span className="display-flex justify-content-center align-items-center">
            <i className="fa-solid fa-x small" />
          </span>
        </SqButton>
        <div className="main-content position-relative display-flex align-items-end mt-5">
          <h3 className="title text-center">{factoryContent?.[activePage]?.title}</h3>
          <img className="" src={factoryContent?.[activePage]?.image} alt="Background" />
        </div>
        <div className="footer position-relative p-3 display-flex">
          <p className="description text-center m-4">{factoryContent?.[activePage]?.description}</p>
          <div className="actions display-flex justify-content-space-between mt-3">
            <SqFlowComponent steps={Array(QTD_PAGES)} active={activePage} color="var(--primary_color)" style={{ width: '100px' }} />
            <SqButton size="sm" onClick={() => handleNext()}>
              {loading && activePage === QTD_PAGES - 1 ? <SqLoader size="small" color="var(--purple-40)" /> : t('next')}
            </SqButton>
          </div>
        </div>
      </div>
    </SqModalComponent>
  )
}
