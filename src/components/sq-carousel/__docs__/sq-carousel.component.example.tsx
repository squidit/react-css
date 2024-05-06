import React from 'react'
import SqCarousel, { Props } from '../sq-carousel.component'

const SqCarouselExample = (props: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <SqCarousel {...props} />
    </div>
  )
}

export default SqCarouselExample
