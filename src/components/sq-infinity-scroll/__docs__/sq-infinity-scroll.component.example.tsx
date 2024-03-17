import React, { useState } from 'react'
import SqInfinityScrollExample, { Props } from '../sq-infinity-scroll.component'

const LOREN_IPSUM =
  'Lorem ipsum dolor sit amet consectetur adipiscing elit nullam vivamus nunc, mattis integer ut conubia aliquam vehicula euismod curae phasellus, lectus porttitor libero quisque malesuada fringilla parturient fames bibendum. Vitae duis proin semper netus vulputate commodo vel egestas fermentum pretium luctus consequat ornare, purus nunc ante porta pulvinar habitasse suscipit aliquet donec cubilia ultrices risus malesuada, torquent primis at fringilla cras himenaeos ac viverra rhoncus ut bibendum arcu.'

const SqInifityScroll = ({ ...props }: Props) => {
  const [content, setContent] = useState<string[]>([LOREN_IPSUM])
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  const onLoadMore = () => {
    setLoading(true)
    setTimeout(() => {
      setContent([...content, LOREN_IPSUM])
      if (content.length >= 2) {
        setHasMore(false)
      }
      setLoading(false)
    }, 2000)
  }

  return (
    <div
      className="display-flex justify-content-center align-items-center"
      style={{ maxHeight: '200px', overflow: 'scroll', margin: '2rem' }}
    >
      <SqInfinityScrollExample {...props} loading={loading} onLoadMore={onLoadMore} hasMore={hasMore}>
        {content.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </SqInfinityScrollExample>
    </div>
  )
}

export default SqInifityScroll
