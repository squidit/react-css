import SqCollapse from '../sq-collapse/sq-collapse.component'
import React, { PropsWithChildren, useEffect, useState } from 'react'

import './sq-accordion.component.scoped.scss'

export interface Props extends PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  onlyOne?: boolean
  openFirst?: boolean
  containerCollapseClass?: string
  children?: any
}

const Accordion = ({ children, onlyOne = false, containerCollapseClass = '', openFirst = false }: Props) => {
  const [openAccordions, setOpenAccordions] = useState<{ [index: string]: boolean }>({})

  const handleToggleAccordion = (index: number) => {
    if (!onlyOne) {
      setOpenAccordions((old) => {
        const newOpen = { ...old }
        newOpen[index] = !newOpen[index]
        return newOpen
      })
    } else {
      setOpenAccordions((old) => {
        const newOpen = { ...old }
        Object.keys(newOpen).forEach((key) => {
          newOpen[key] = false
        })
        newOpen[index] = true
        return newOpen
      })
    }
  }

  const handleFindByType = (children: any, component: any) => {
    const result: any = []
    const type = [component.displayName || component.name] || []

    React.Children.forEach(children, (child) => {
      const childType = child?.type?.displayName || child?.type?.name
      if (type.includes(childType)) {
        result.push(child)
      }
    })

    return result
  }

  useEffect(() => {
    handleFindByType(children, SqCollapse).forEach((child: any, index: number) => {
      setOpenAccordions((prevState) =>
        typeof prevState?.[index] === 'undefined' ? { ...prevState, [index]: !!child.props.open } : { ...prevState },
      )
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [React.Children.count(children), children])

  useEffect(() => {
    if (openFirst) {
      const newOpen: any = {}
      handleFindByType(children, SqCollapse).forEach((_: any, index: number) => {
        newOpen[index] = index === 0
      })
      setOpenAccordions(newOpen)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="accordion">
      {handleFindByType(
        React.Children?.map(children, (child, index) => {
          if (child) {
            return React.cloneElement(child, {
              onToggleAccordion: handleToggleAccordion,
              key: index,
              open: !!openAccordions[index],
              index,
            })
          }
          return null
        }),
        SqCollapse,
      )?.map((accordion: any, key: number) => {
        return (
          <div key={key} className={containerCollapseClass}>
            {accordion}
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
