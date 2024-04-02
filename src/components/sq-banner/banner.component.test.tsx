import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Banner from '@/components/sq-banner/banner.component'

describe('Banner Component', () => {
  const bannerComponent = (
    <Banner figure={<img src="https://github.com/wandersonsales-dev.png" alt="Alt banner" />} title="Title tests" textColor="var(--yellow)">
      Text
    </Banner>
  )

  it('should render without errors', () => {
    render(bannerComponent)

    const imageBanner = screen.getByRole('img', {
      name: /alt banner/i,
    })
    const titleBanner = screen.getByRole('heading', {
      name: /title tests/i,
    })
    const textBanner = screen.getByText(/text/i)

    expect(imageBanner).toBeInTheDocument()
    expect(imageBanner).toHaveAttribute('src', 'https://github.com/wandersonsales-dev.png')
    expect(titleBanner).toBeInTheDocument()
    expect(titleBanner).toHaveTextContent('Title tests')
    expect(textBanner).toBeInTheDocument()
    expect(textBanner).toHaveTextContent('Text')
  })
})
