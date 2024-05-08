import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import SqCarouselExample from './sq-carousel.component.example'
import { fn } from '@storybook/test'

const meta: Meta<typeof SqCarouselExample> = {
  title: 'Components/SqCarousel',
  parameters: {
    docs: {
      description: {
        component: 'A simple Carousel component',
      },
    },
  },
  component: SqCarouselExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqCarouselExample>

export const Default: Story = {
  args: {
    slides: Array.from({ length: 4 }, (_, i) => {
      return () => (
        <div className="item display-flex justify-content-center" style={{ height: '150px' }}>
          <img src={`https://via.placeholder.com/150?text=${i + 1}`} alt="placeholder" />
        </div>
      )
    }),
    onSwiper: fn(),
    showArrows: true,
    showPagination: true,
  },
}
