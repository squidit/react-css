import React from 'react'
import SqInputDocumentRut, { Props } from '../sq-input-document-rut.component'

const SqInputDocumentRutExample = (props: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <SqInputDocumentRut {...props} />
    </div>
  )
}

export default SqInputDocumentRutExample
