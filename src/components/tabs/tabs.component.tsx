import React, { useState } from 'react'
import './tabs.component.scoped.scss'
import Tab from '../tab/tab.component'

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  noContent?: boolean
  height?: string
  maxWidth?: string
  margin?: string
  boxShadow?: boolean
  selectStyle?: boolean
  lineStyle?: boolean
  tabsCenter?: boolean
  tabsWidth?: boolean
  defaultActiveIndex?: number
  onChange?: (event: any) => any
}

interface StateTabs {
  activeIndex: number
}

const Tabs = ({
  noContent,
  height,
  maxWidth = 'initial',
  margin = '0',
  boxShadow = false,
  selectStyle = false,
  lineStyle = false,
  tabsCenter = false,
  tabsWidth = false,
  defaultActiveIndex = 0,
  children,
  className = '',
  onChange,
}: Props) => {
  const [state, setState] = useState<StateTabs>({
    activeIndex: defaultActiveIndex,
  })

  const handleTabClick = (tabIndex: number) => {
    if (tabIndex !== state.activeIndex) {
      setState({ activeIndex: tabIndex })
      if (onChange && typeof onChange === 'function') {
        onChange(tabIndex)
      }
    }
  }

  const cloneTabElement = (tab: any, index = 0) => {
    return (
      <Tab
        {...tab.props}
        height={height}
        onClick={() => handleTabClick(index)}
        tabIndex={index}
        active={index === state.activeIndex}
        key={index}
      />
    )
  }

  const renderChildrenTabs = () => {
    if (!Array.isArray(children)) {
      return cloneTabElement(children, 0)
    }

    return children?.map((tab, index) => cloneTabElement(tab, index))
  }

  const renderActiveTabContent = () => {
    const cloneChildren: any = children
    if (cloneChildren?.[state?.activeIndex]) {
      return cloneChildren?.[state?.activeIndex]?.props?.children
    }

    return (children as any)?.props?.children
  }

  return (
    <section className={`tabs-squid ${className}`}>
      <div className={'tabs-container'}>
        <div className={'wrapper ' + `${boxShadow ? 'box-shadow ' : ''}`}>
          <ul
            className={
              'tabs-header ' +
              `${selectStyle ? 'select-style ' : ''}` +
              `${lineStyle ? 'line-style ' : ''}` +
              `${tabsCenter ? 'tabs-center ' : ''}` +
              `${tabsWidth ? 'tabs-width ' : ''}`
            }
            style={{
              maxWidth: maxWidth,
              margin: margin,
            }}
          >
            {renderChildrenTabs()}
          </ul>
        </div>
        {!noContent ? <div className="tabs-wrapper-content">{renderActiveTabContent()}</div> : null}
      </div>
    </section>
  )
}

export default Tabs
