import React from 'react'
import SqPaginationExample, { Props } from '../sq-pagination.component'
import { BrowserRouter } from 'react-router-dom'

const SqPagination = ({ ...props }: Props) => {
  return (
    <BrowserRouter>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <SqPaginationExample {...props}></SqPaginationExample>
      </div>
    </BrowserRouter>
  )
}

export default SqPagination
