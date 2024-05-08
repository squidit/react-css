import SqTip from '@/src/components/sq-tip/sq-tip.component'
import { render, waitFor, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

describe('Tip Component', () => {
  const tipComponent = <SqTip message="hello" icon="fa-solid fa-circle-info" />
  it('should render without errors', () => {
    const { container } = render(tipComponent)
    const tip = container.querySelector('i')
    expect(tip).toHaveClass('fa-circle-info')
  })

  it('should render the message', async () => {
    const { container } = render(tipComponent)
    const tip: any = container.querySelector('i')
    await userEvent.hover(tip)
    const tipMessage = screen.getByText(/hello/)
    await waitFor(() => {
      expect(tipMessage).toBeInTheDocument()
      expect(tipMessage).toHaveTextContent('hello')
    })
  })
})
