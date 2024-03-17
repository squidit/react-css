import React, { useState } from 'react'
import SqInput, { Props } from '../sq-input.component'

const SqInputExample = (props: Props) => {
  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(false)
  const [loadingLogin, setLoadingLogin] = useState(false)

  const onTimeout = () => {
    setLoadingLogin(false)
  }

  return (
    <div className="display-flex justify-content-center align-items-center black">
      <SqInput
        {...props}
        label="E-mail"
        type="email"
        placeholder="email@email.com"
        value={email}
        name="login-email"
        id="login-email"
        onChange={(email: string) => setEmail(email)}
        onValidate={(validEmail: boolean) => setValidEmail(validEmail)}
        readOnly={loadingLogin}
        autoComplete="email"
        required
        onTimeout={onTimeout}
      ></SqInput>
    </div>
  )
}

export default SqInputExample
