import React, { useState } from 'react'
import SqInputDocumentCnpj, { Props } from '../sq-input-document-cnpj.component'

const SqInputDocumentCnpjExample = (props: Props) => {
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
      <SqInputDocumentCnpj {...props} value={value} onChange={setValue} />
    </div>
  )
}

export default SqInputDocumentCnpjExample
