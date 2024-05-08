// @ts-ignore
import defaultUser from '@assets/img/jpg/avatar.jpg'
import React, { useEffect, useRef } from 'react'

import './sq-circle-completation.component.scoped.scss'

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  image?: string
  value?: number
  size?: 'big' | 'medium' | 'small'
}

export default ({ id = '', className = '', image = '', value = 0, size = 'medium' }: Props) => {
  const animateValue = (obj: HTMLSpanElement, end: number, start = 0, duration = 2500) => {
    if (obj) {
      let startTimestamp: any = null
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp
        const progress = Math.min((timestamp - startTimestamp) / duration, 1)
        obj.innerHTML = `${Math.floor(progress * (end - start) + start)}%`
        if (progress < 1) {
          window.requestAnimationFrame(step)
        }
      }
      window.requestAnimationFrame(step)
    }
  }

  const formatPercentage = (percentage: number): number => {
    if (percentage < 1) {
      percentage = percentage * 100
    }
    if (percentage > 100) {
      percentage = 100
    }
    if (percentage < 0) {
      percentage = 0
    }
    return parseInt(percentage.toFixed(0), 10)
  }

  const counterRef = useRef<HTMLSpanElement>(null)
  const finalNumber: number = formatPercentage(value)

  useEffect(() => {
    if (counterRef.current) {
      animateValue(counterRef.current, finalNumber)
    }

    //eslint-disable-next-line
  }, [value])

  return (
    <div id={id} className={`circle-wrap ${className} ${size}`}>
      <div className="circle">
        <div className={`mask full full-${finalNumber}`}>
          <div className={`fill fill-${finalNumber}`}></div>
        </div>
        <div className="mask half">
          <div className={`fill fill-${finalNumber}`}></div>
        </div>
        <div className={`content ${image?.length ? 'image' : ''}`}>
          <span ref={counterRef} className={`number counter-${finalNumber}`}>
            {finalNumber}%
          </span>
          <figure>
            <img
              src={image}
              alt="Profile"
              title="Profile"
              className="img-fluid"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null
                currentTarget.src = defaultUser
              }}
            />
          </figure>
        </div>
      </div>
      <span className={`check ${finalNumber > 99 ? 'done' : ''}`}>
        <i className="fa-regular fa-check"></i>
      </span>
    </div>
  )
}
