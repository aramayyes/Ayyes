import React from 'react'
import PropTypes from 'prop-types'

const FlutterSvgIcon = ({ width, height, title, className, style }) => {
  return (
    <svg
      viewBox=".29 .22 77.26 95.75"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <title>{title}</title>
      <g fill="none" fillRule="evenodd">
        <path
          d="m48.75 95.97-25.91-25.74 14.32-14.57 40.39 40.31z"
          fill="#02539a"
        />
        <g fill="#45d1fd">
          <path
            d="m22.52 70.25 25.68-25.68h28.87l-39.95 39.95z"
            fillOpacity=".85"
          />
          <path d="m.29 47.85 14.58 14.57 62.2-62.2h-29.02z" />
        </g>
      </g>
    </svg>
  )
}

FlutterSvgIcon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string,
  title: PropTypes.string
}

FlutterSvgIcon.defaultProps = {
  height: null,
  title: null
}

export default FlutterSvgIcon
