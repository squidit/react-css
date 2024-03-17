import './sq-steps.component.scoped.scss'

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  color?: string
  active?: number
  steps?: Array<{
    status: string
  }>
}

export default ({ className = '', color = 'var(--pink)', active = 0, steps = [], ...rest }: Props) => {
  return (
    <div className={`steps ${className}`} {...rest}>
      <ul>
        {steps?.map((_, index) => {
          return (
            <li
              key={index}
              className={`
                  ${index === active ? 'active' : ''}
                  ${index < active ? 'old' : ''}
                `}
              style={{
                background:
                  index === active
                    ? 'linear-gradient(90deg, ' + color + ' 0%, ' + color + ' 50%, transparent 51%)'
                    : index < active
                    ? color
                    : undefined,
              }}
            >
              <span />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
