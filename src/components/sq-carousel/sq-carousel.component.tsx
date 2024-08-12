import { HTMLAttributes, PropsWithChildren } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Navigation, Pagination, Scrollbar, Virtual } from 'swiper/modules'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import './sq-carousel.component.scoped.scss'
import './sq-carousel.component.scss'

export interface Props extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  slides?: Array<any>
  slidesPerView?: number
  spaceBetween?: number
  onSwiper?: () => any
  onSlideChange?: () => any
  showArrows?: boolean
  showPagination?: boolean
  effect?: 'creative' | 'fade' | 'cube' | 'coverflow' | 'flip' | 'slide' | 'cards'
}

export default ({
  slides = [],
  slidesPerView = 1,
  spaceBetween = 0,
  onSwiper,
  onSlideChange,
  showArrows = false,
  showPagination = false,
  effect = 'slide',
}: Props) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Virtual]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      navigation={showArrows}
      pagination={showPagination ? { clickable: true } : false}
      scrollbar={{ draggable: true }}
      onSwiper={onSwiper}
      onSlideChange={onSlideChange}
      effect={effect}
      virtual
      autoHeight={false}
    >
      {slides?.map((slide, index) => (
        <SwiperSlide key={slide} virtualIndex={index}>
          {slide}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
