import React from 'react'
import PropTypes from 'prop-types'

const ArrowSvgIcon = ({ width, height, title, className, style }) => (
  <svg
    viewBox="0 0 640 640"
    width={width}
    height={height}
    className={className}
    style={style}
  >
    <title>{title}</title>
    <path d="M293.89 573.09c-.15 10.89 15.29 19.84 26.46 19.99 11.17.15 28.29-9.11 28.45-19.99v-.12c-.03-20.41-.03-167.27 0-440.58 51.17 43.57 78.79 67.33 82.85 71.29 7.81 7.61 20.48 7.61 28.29 0 7.81-7.62 7.81-19.96 0-27.57C447.21 163.7 345.38 64.46 332.66 52.05c-7.03-6.85-18.43-6.85-25.46 0-12.73 12.41-114.55 111.65-127.28 124.06-7.68 7.63-7.61 19.87.14 27.43 7.81 7.61 20.48 7.61 28.29 0 4.05-3.95 32.3-27.45 84.74-70.5.32-.26.8-.04.8.37-.01 272.77-.01 419.33 0 439.68z" />
  </svg>
)

ArrowSvgIcon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string,
  title: PropTypes.string
}

ArrowSvgIcon.defaultProps = {
  height: null,
  title: null
}

export default ArrowSvgIcon
