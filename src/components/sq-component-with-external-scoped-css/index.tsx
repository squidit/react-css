import React, { ReactNode } from 'react'

export const SqComponentWithExternalScopedCss = ({ children, hash }: { children: React.ReactNode; hash?: string }) => {
  if (!hash) return <>{children}</>

  const cloneWithHash = (child: ReactNode) => {
    if (!React.isValidElement(child)) return child

    const newProps = {
      ...(child as React.ReactElement).props,
      [hash]: '',
    }

    if (child.props.children) {
      newProps.children = React.Children.map(child.props.children, cloneWithHash)
    }

    return React.cloneElement(child, newProps)
  }

  return <>{React.Children.map(children, cloneWithHash)}</>
}
