import React from 'react'
import { Link as GastbyLink } from 'gatsby'

const Link = ({ to, children, ...props }) => {
  const isExternal = to.startsWith('http') || to.startsWith('https')
  return isExternal ? (
    <a href={to} target="_blank" rel="noreferrer noopener" {...props}>
      {children}
    </a>
  ) : (
    <GastbyLink to={to} {...props}>
      {children}
    </GastbyLink>
  )
}

export default Link
