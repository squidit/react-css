'use client'

import React, { useState } from 'react'
import SqModalWelcomeCreatorsInsights, { Props } from '../sq-modal-welcome-creators-insights.component'
import SqButtonComponent from '../../../components/buttons/sq-button/sq-button.component'

const SqModalWelcomeCreatorsInsightsExample = ({ children, ...props }: Props) => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleConfirm = async () => {
    setLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setOpen(false)
    } catch (error) {
      console.error('Erro durante a confirmação:', error)
    } finally {
      setLoading(false)
    }
  }

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
      <SqModalWelcomeCreatorsInsights
        {...props}
        open={open}
        onCloseChange={() => handleClose()}
        onOpenChange={(open) => setOpen(open)}
        buttonClose={false}
        onConfirm={handleConfirm}
        loading={loading}
      />
    </div>
  )
}

export default SqModalWelcomeCreatorsInsightsExample
