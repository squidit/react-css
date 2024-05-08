import { PropsWithChildren } from 'react'

import './sq-timeline.component.scoped.scss'

export interface Props extends React.HTMLAttributes<HTMLUListElement>, PropsWithChildren {
  items?: Array<React.ReactNode | string>
  children?: React.ReactNode
}

const Timeline = ({ items, children, ...rest }: Props) => {
  return (
    <ul className="timeline" {...rest}>
      {items?.length ? items?.map((item, index) => <Item key={index}>{item}</Item>) : children}
    </ul>
  )
}

interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const Item = ({ children, ...props }: ItemProps) => {
  return (
    <li className="item">
      <div className="marker"></div>
      <div className="container-item">
        <div className="content-item" {...props}>
          {children}
        </div>
      </div>
    </li>
  )
}

Timeline.Item = Item

export default Timeline
