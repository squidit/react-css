import React from 'react'
import SqInputFileComponent, { Props } from '../sq-input-file.component'

const SqInputFileExample = (props: Props) => {
  return (
    <div className="display-flex justify-content-center align-items-center">
      <SqInputFileComponent {...props} />
    </div>
  )
}

export default SqInputFileExample
