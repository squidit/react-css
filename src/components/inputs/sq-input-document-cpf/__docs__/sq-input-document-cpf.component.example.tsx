import React, { useState } from 'react'
import SqInputDocumentCpf, { Props } from '../sq-input-document-cpf.component'

const SqInputDocumentCpfExample = (props: Props) => {
  const [value, setValue] = useState('')
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <SqInputDocumentCpf {...props} value={value} onChange={setValue} />
    </div>
  )
}

export default SqInputDocumentCpfExample
