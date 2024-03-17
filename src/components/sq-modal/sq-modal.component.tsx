import React, { PropsWithChildren, useEffect, useRef, useState } from 'react'
import './sq-modal.component.scss'

export interface Props extends PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  open?: boolean
  modalSize?: 'sm' | 'md' | 'lg' | 'xl'
  modalClass?: string
  backdrop?: 'static' | 'cliclable'
  buttonClose?: boolean
  header?: any
  footer?: any
  onCloseChange?: () => any | void
  onOpenChange?: (open: boolean) => any | void
  onLeftPress?: () => any | void
  onRightPress?: () => any | void
  forceMobileNoMargin?: boolean
}

export default ({
  modalClass = '',
  modalSize = 'md',
  className = '',
  buttonClose = true,
  backdrop = 'static',
  children,
  open = false,
  header = null,
  footer = null,
  id = '',
  onCloseChange,
  onOpenChange,
  onLeftPress,
  onRightPress,
  forceMobileNoMargin = false,
}: Props) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const modals = useRef<HTMLCollectionOf<Element> | null>(null)
  const [enableBackdropClick, setEnableBackdropClick] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    return () => {
      if (document.getElementById('modal-backdrop') && count === 0) {
        document.getElementById('modal-backdrop')?.remove()
        document.body.classList.remove('block')
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (backdrop !== 'static' && modalRef.current && open && enableBackdropClick) {
      document.addEventListener('click', backdropClick)
      return () => {
        window.removeEventListener('keydown', onKeydown)
        document.removeEventListener('click', backdropClick)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enableBackdropClick, open, backdrop])

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0]
    const backdrop = document.getElementById('modal-backdrop') || document.createElement('div')
    if (open && modalRef.current) {
      body.classList.add('block')
      modals.current = document.getElementsByClassName('modal open')
      setCount(modals.current?.length)
      if (!document.getElementById('modal-backdrop')) {
        modalRef.current.classList.remove('modal-over')
        backdrop.setAttribute('id', 'modal-backdrop')
        backdrop.setAttribute('class', 'modal-backdrop show')
        body.appendChild(backdrop)
      }
      modalRef.current.style.display = 'flex'
      setEnableBackdropClick(true)
      window.addEventListener('keydown', onKeydown)
    } else if (modalRef.current) {
      toCloseModal(body, backdrop)
    }
    return () => {
      window.removeEventListener('keydown', onKeydown)
    }
    //eslint-disable-next-line
  }, [open])

  function toCloseModal(body: HTMLBodyElement, backdrop: HTMLElement) {
    callOpenChange(false)
    callCloseChange()
    if (modalRef?.current?.style?.display) {
      modalRef.current.style.display = 'none'
    }
    if (backdrop.parentNode && modalRef?.current?.tabIndex === 1) {
      backdrop.parentNode.removeChild(backdrop)
      body.classList.remove('block')
    }
    setEnableBackdropClick(false)
    window.removeEventListener('keydown', onKeydown)
  }

  function backdropClick(event: any) {
    if (backdrop === 'static' || !modalRef.current || !open || !enableBackdropClick) {
      return
    }
    const modalDialog = modalRef.current.firstElementChild
    if (!modalDialog?.contains(event.target)) {
      const body = document.getElementsByTagName('body')[0]
      const backdrop = document.getElementById('modal-backdrop') || document.createElement('div')
      toCloseModal(body, backdrop)
    }
  }

  function onKeydown(event: any) {
    if (open) {
      const contextModals = document.getElementsByClassName('modal open')
      if (modalRef?.current?.tabIndex === contextModals?.length) {
        events(event.keyCode)
      }
    }
  }

  function callOpenChange(open: boolean) {
    if (onOpenChange && typeof onOpenChange === 'function') {
      onOpenChange(open)
    }
  }

  function callCloseChange() {
    if (onCloseChange && typeof onCloseChange === 'function' && open) {
      onCloseChange()
    }
  }

  function callLeftPress() {
    if (onLeftPress && typeof onLeftPress === 'function') {
      onLeftPress()
    }
  }

  function callRightPress() {
    if (onRightPress && typeof onRightPress === 'function') {
      onRightPress()
    }
  }

  function events(key: number) {
    switch (key) {
      case 27:
        callOpenChange(false)
        callCloseChange()
        break
      case 37:
        callLeftPress()
        break
      case 39:
        callRightPress()
        break
    }
  }

  return (
    <div
      className={`modal align-items-center ${open ? 'open' : ''} ${className} modal-over modal-number-${count}`}
      tabIndex={count}
      id={id || `random-id-${count}`}
      ref={modalRef}
      style={{
        display: 'none',
        backgroundColor: '#00000080',
        maxHeight: window?.innerHeight,
      }}
    >
      <div className={`modal-dialog modal-${modalSize} ${modalClass} ${forceMobileNoMargin ? 'force-mobile-no-margin' : ''}`}>
        <div className="modal-content scrollbar">
          <div className={`modal-header ${!header ? 'without-header' : ''}`}>
            {header}
            {buttonClose ? (
              <button type="button" onClick={() => callCloseChange()} className="button-close modal-exit">
                <i className="fa-regular fa-times"></i>
              </button>
            ) : null}
          </div>
          <div className="modal-body scrollbar">{children}</div>
          {footer ? <div className="modal-footer">{footer}</div> : null}
        </div>
      </div>
    </div>
  )
}
