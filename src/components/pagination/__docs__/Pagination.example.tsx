import React from 'react'
import PaginationExample, { Props } from '../pagination.component'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Pagination = ({ ...props }: Props) => {
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
        <PaginationExample {...props}></PaginationExample>
      </div>
    </BrowserRouter>
  )
}

export default Pagination
