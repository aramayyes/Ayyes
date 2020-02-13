import React from 'react'
import PropTypes from 'prop-types'

const WindowsSvgIcon = ({ width, height, title, className, style }) => (
  <svg
    viewBox="0 0 70 70"
    width={width}
    height={height}
    className={className}
    style={style}
  >
    <title>{title}</title>
    <path
      d="M3.2 32.9h25.6V8.3L3.2 12v20.9zM33 7.7v25.2h34.1V3L33 7.7zm0 54.6L67.2 67V37.1H33v25.2zM3.2 58l25.6 3.6V37.1H3.2V58z"
      fill="#37b"
    />
  </svg>
)

WindowsSvgIcon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string,
  title: PropTypes.string
}

WindowsSvgIcon.defaultProps = {
  height: null,
  title: null
}

export default WindowsSvgIcon
