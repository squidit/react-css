'use client'

import { PropsWithChildren, useCallback, useEffect, useRef, useState } from 'react'
import { SqLoader } from '@components/sq-loader'
import { useSqUseThrottle } from '@hooks/use-sq-throttle'

import './sq-infinity-scroll.component.scoped.scss'

export interface Props extends PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  elementToScrollId?: string
  endMessage?: string
  hasMore?: boolean
  loading?: boolean
  onLoadMore?: () => any
}

export default ({
  className = '',
  elementToScrollId = '',
  endMessage = '',
  hasMore = false,
  children,
  onLoadMore,
  loading = false,
}: Props) => {
  const scroll = useRef<any>(null)
  const [isVisible, setIsVisible] = useState(false)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const observer = new IntersectionObserver(([entry]) => setIsVisible(!!entry.isIntersecting))

  const callLoadMore = useSqUseThrottle(async () => {
    if (onLoadMore && typeof onLoadMore === 'function' && !loading) {
      onLoadMore()
    }
  })

  const onScroll = useCallback(async () => {
    if (!loading && hasMore) {
      if (elementToScrollId) {
        const element: any = document.getElementById(elementToScrollId)
        const allScroll = element?.scrollTop + element?.clientHeight + 50
        if (allScroll >= element?.scrollHeight) {
          callLoadMore()
        }
      } else if (window.innerHeight + window.scrollY >= scroll.current?.offsetHeight + scroll.current?.offsetTop + 100) {
        callLoadMore()
      }
    }
  }, [callLoadMore, elementToScrollId, hasMore, loading])

  useEffect(() => {
    let element: any
    if (isVisible) {
      if (elementToScrollId) {
        element = document.getElementById(elementToScrollId)
      }
      if (!elementToScrollId) {
        element = window
      }
      element.addEventListener('scroll', onScroll)
    }

    return () => {
      element?.removeEventListener('scroll', onScroll)
    }
  }, [elementToScrollId, isVisible, onScroll])

  useEffect(() => {
    observer.observe(scroll.current)
    return () => {
      observer.disconnect()
    }
  }, [observer])

  return (
    <div className="wrapper-scroll">
      <div className={`scroll ${className}`} ref={scroll}>
        {children}
      </div>
      {loading ? (
        <div className="wrapper-loader">
          <SqLoader size="small" />
        </div>
      ) : null}
      {!hasMore ? <p className="end-message">{endMessage || 'End scroll'}</p> : null}
    </div>
  )
}
