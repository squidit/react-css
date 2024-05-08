import React, { useState } from 'react'
import SqInput, { Props } from '../sq-input.component'

const SqInputExample = (props: Props) => {
  const [email, setEmail] = useState('')

  return (
    <div className="display-flex justify-content-center align-items-center black">
      <SqInput {...props} value={email} onChange={(email: string) => setEmail(email)}></SqInput>
    </div>
  )
}

export default SqInputExample
