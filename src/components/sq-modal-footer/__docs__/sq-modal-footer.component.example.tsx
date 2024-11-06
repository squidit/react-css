'use client'

import SqModalFooter from '../sq-modal-footer.component'

const SqModalFooterExample: React.FC = () => {
  const handleClose = () => {
    alert('Modal closed')
  }

  const handleSubmit = () => {
    alert('Form submitted')
  }

  const hasValueFilled = true
  const hasChangedValues = true

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100px',
      }}
    >
      <SqModalFooter hasValueFilled={hasValueFilled} hasChangedValues={hasChangedValues} onClose={handleClose} onSubmit={handleSubmit} />
    </div>
  )
}

export default SqModalFooterExample
