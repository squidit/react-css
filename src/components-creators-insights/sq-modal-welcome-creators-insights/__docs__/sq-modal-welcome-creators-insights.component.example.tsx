import React, { useState } from 'react'
import SqModalWelcomeCreatorsInsights, { Props } from '../sq-modal-welcome-creators-insights.component'
import SqButtonComponent from '../../../components/buttons/sq-button/sq-button.component'

const SqModalWelcomeCreatorsInsightsExample = ({ children, ...props }: Props) => {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
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
        forceMobileNoMargin
      />
    </div>
  )
}

export default SqModalWelcomeCreatorsInsightsExample
