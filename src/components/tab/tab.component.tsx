import './tab.component.scoped.scss'

export interface Props extends React.HTMLAttributes<HTMLLIElement> {
  title?: string
  active?: boolean
  disabled?: boolean
  height?: string
  onClick?: (event: any) => any
  tabIndex?: number
}

const Tab = ({ title = '', active, disabled, height, className = '', onClick, tabIndex }: Props) => {
  return (
    <li
      style={{ height: height }}
      key={tabIndex}
      className={`${className} tab ${active ? 'active ' : ''} ${disabled ? 'disabled ' : ''}`}
      onClick={!disabled ? onClick : undefined}
    >
      {title}
    </li>
  )
}

export default Tab
