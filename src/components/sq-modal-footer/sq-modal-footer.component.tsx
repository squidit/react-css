import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { SqButton } from '../buttons/sq-button'
import './sq-modal-footer.component.scss'

interface Props {
  hasValueFilled: boolean
  hasChangedValues: boolean
  onClose: () => void
  onSubmit?: () => void
}

export default ({ onClose, hasChangedValues, hasValueFilled, onSubmit }: Props) => {
  const { t } = useTranslation('sqModalProfileCache')

  const handleSubmit = useCallback(() => {
    if (onSubmit && typeof onSubmit === 'function') {
      onSubmit()
    }
  }, [onSubmit])

  const handleClose = useCallback(() => {
    if (onClose && typeof onClose === 'function') {
      onClose()
    }
  }, [onClose])

  return (
    <footer className="display-flex justify-content-space-between align-items-center">
      <SqButton
        color="transparent"
        borderColor="var(--gray)"
        textColor="var(--gray)"
        style={{ borderWidth: '1px' }}
        onClick={() => handleClose()}
      >
        {t('cancel')}
      </SqButton>
      <SqButton disabled={!hasValueFilled || !hasChangedValues} onClick={() => handleSubmit()}>
        {t('save')}
      </SqButton>
    </footer>
  )
}
