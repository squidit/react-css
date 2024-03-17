import React, { useState } from 'react'
import SqInputFileComponent, { Props } from '../sq-input-file.component'

const SqInputFileExample = (props: Props) => {
  const [state, setState] = useState({ file: '', error: '' })
  const MAXIMUM_SIZE_IN_BYTES = 1048576
  const [transactionState, setTransactionState] = useState('pending')
  const [isReplaceInvoice, setIsReplaceInvoice] = useState(false)

  const handleChange = (name: string, value: any) => {
    setState((prevState) => ({ ...prevState, [name]: value }))
  }

  return (
    <div className="display-flex justify-content-center align-items-center">
      <SqInputFileComponent
        {...props}
        name="input-file"
        id="input-file"
        className="input-file"
        placeholder={'Upload your file'}
        required
        onChange={(value) => handleChange('file', value)}
        maxFileSize={MAXIMUM_SIZE_IN_BYTES}
        accept="text/xml"
        externalError={state?.error}
        errorSpan={isReplaceInvoice}
        showFileName={!!state?.file}
        buttonSize="md"
        disabled={!['pending', 'review'].includes(transactionState)}
        buttonStyle={{
          display: 'flex',
          alignItens: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--transparent)',
          color: 'var(--primary_color)',
        }}
      />
    </div>
  )
}

export default SqInputFileExample
