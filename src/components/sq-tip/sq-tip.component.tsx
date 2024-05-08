import React from 'react'
import { Tooltip } from 'react-tooltip'
import './sq-tip.component.scoped.scss'
import './sq-tip.component.scss'

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  message?: string
  place?: 'top' | 'right' | 'left' | 'bottom'
  theme?: 'light' | 'dark'
  trigger?: 'hover' | 'click'
  icon?: string
  fontSize?: string
  id?: string
}

export default ({
  className = '',
  message = '',
  place = 'top',
  trigger = 'hover',
  icon = 'fa-solid fa-circle-info',
  id,
  fontSize = '16px',
}: Props) => {
  const timestamp = `random-id-${(1 + Date.now() + Math.random()).toString().replace('.', '')}`
  const watcher = React.useRef<any>(null)
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light')

  React.useEffect(() => {
    watcher.current = new MutationObserver((mutations) => {
      mutations.forEach((mu) => {
        if (mu.type !== 'attributes' && mu.attributeName !== 'class') return
        applyTheme()
      })
    })
    const html = document.getElementsByTagName('html')[0]
    watcher.current.observe(html, { attributes: true })

    applyTheme()
  })

  const applyTheme = () => {
    const html = document.getElementsByTagName('html')[0]
    if (html?.classList.contains('dark')) {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <span className={className}>
      <i
        className={`icon-tip ${icon}`}
        data-tooltip-content={message}
        data-html={true}
        data-tooltip-id={id || timestamp}
        data-event={trigger === 'click' ? 'click' : null}
        style={{ fontSize }}
      ></i>

      <Tooltip className="tip-class" aria-haspopup="true" id={id || timestamp} place={place} variant={theme} />
    </span>
  )
}
