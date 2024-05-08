import React, { useState } from 'react'
import ModalExample, { Props } from '../sq-modal.component'
import SqButtonComponent from '../../buttons/sq-button/sq-button.component'

const Modal = ({ children, header, ...props }: Props) => {
  const [open, setOpen] = useState(false)

  const footer = (
    <footer className="display-flex justify-content-space-between" style={{ width: '100%' }}>
      <SqButtonComponent
        color="neutral"
        inverted
        onClick={() => {
          setOpen(false)
        }}
      >
        Cancel
      </SqButtonComponent>
      <SqButtonComponent
        onClick={() => {
          setOpen(false)
        }}
      >
        Confirm
      </SqButtonComponent>
    </footer>
  )

  const body = <main className="p-3">{children}</main>

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        minHeight: '300px',
      }}
    >
      <SqButtonComponent onClick={() => setOpen(true)}>Open Modal</SqButtonComponent>
      <ModalExample
        {...props}
        open={open}
        footer={footer}
        header={header}
        onCloseChange={() => setOpen(!open)}
        onOpenChange={(open) => setOpen(open)}
      >
        {body}
      </ModalExample>
    </div>
  )
}

export default Modal
