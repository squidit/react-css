import React from 'react'
import SqOverlay, { Props } from '../sq-overlay.component'
import SqButton from '../../buttons/sq-button/__docs__/sq-button.component.example'

const SqOverlayExample = ({ children, ...props }: Props) => {
  const [open, setOpen] = React.useState(false)
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <SqButton onClick={() => setOpen(true)}>Open Overlay</SqButton>
      <SqOverlay {...props} open={open} onOpenChange={(open: boolean) => setOpen(open)} onCloseChange={() => setOpen(false)}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          {children}
        </div>
      </SqOverlay>
    </div>
  )
}

export default SqOverlayExample
