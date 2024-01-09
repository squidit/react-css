import React, { useState } from 'react'
import ModalExample, { Props } from '../modal.component'
import ButtonComponent from '../../button/button.component'

const Modal = ({ ...props }: Props) => {
  const [open, setOpen] = useState(false)

  const header = (
    <header>
      <h5>Title</h5>
    </header>
  )

  const footer = (
    <footer className="display-flex justify-content-space-between" style={{ width: '100%' }}>
      <ButtonComponent
        color="var(--gray)"
        onClick={() => {
          setOpen(false)
        }}
      >
        Cancel
      </ButtonComponent>
      <ButtonComponent
        color="var(--pink)"
        onClick={() => {
          setOpen(false)
        }}
      >
        Confirm
      </ButtonComponent>
    </footer>
  )

  const body = <main className="p-3">Content Modal</main>

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
      <ButtonComponent onClick={() => setOpen(true)} color="var(--pink)" borderColor="transparent">
        Open Modal
      </ButtonComponent>
      <ModalExample {...props} open={open} header={header} footer={footer} backdrop="cliclable" onCloseChange={() => setOpen(false)}>
        {body}
      </ModalExample>
    </div>
  )
}

export default Modal
