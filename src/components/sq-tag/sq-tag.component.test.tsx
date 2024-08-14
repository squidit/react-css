import Tag from '@/src/components/sq-tag/sq-tag.component'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

describe('Tag Component', () => {
  const tagComponent = (
    <Tag
      icon="fa-regular fa-camera-retro"
      labels={[
        'test 1',
        <span key={'test-2'} className="text-bold">
          test 2
        </span>,
        'test 3',
      ]}
      separator
    />
  )

  it('should render without errors', () => {
    render(tagComponent)

    const text1 = screen.getByText('test 1')
    expect(text1).toBeInTheDocument()
  })

  it('should render the icon', () => {
    render(tagComponent)

    const icon = screen.getByText(/fa-regular fa-camera-retro/i)
    expect(icon).toBeInTheDocument()
  })

  it('should render the labels passed as an array', () => {
    render(tagComponent)

    const test1 = screen.getByText(/test 1/)
    const test2 = screen.getByText(/test 2/)
    const test3 = screen.getByText(/test 3/)

    expect(test1).toBeInTheDocument()
    expect(test2).toBeInTheDocument()
    expect(test3).toBeInTheDocument()
  })
})
