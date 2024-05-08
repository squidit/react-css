import React from 'react'
import SqInputDocumentInternational, { Props } from '../sq-input-document-international.component'

const SqInputDocumentInternationalExample = (props: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <SqInputDocumentInternational {...props} />
    </div>
  )
}

export default SqInputDocumentInternationalExample
