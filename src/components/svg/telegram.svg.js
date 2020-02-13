import React from 'react'
import PropTypes from 'prop-types'

const TelegramSvgIcon = ({ width, height, title, className, style }) => (
  <svg
    viewBox="0 0 240 240"
    width={width}
    height={height}
    className={className}
    style={style}
  >
    <title>{title}</title>
    <defs>
      <linearGradient
        id="telegram_svg__a"
        x1={46.136}
        x2={28.836}
        y1={11.536}
        y2={51.9}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#37aee2" offset={0} />
        <stop stopColor="#1e96c8" offset={1} />
      </linearGradient>
    </defs>
    <g transform="matrix(3.4682 0 0 3.4682 0 0)">
      <circle cy={34.6} cx={34.6} r={34.6} fill="url(#telegram_svg__a)" />
      <path
        d="M14.4 34.3l23.3-9.6c2.3-1 10.1-4.2 10.1-4.2s3.6-1.4 3.3 2c-.1 1.4-.9 6.3-1.7 11.6l-2.5 15.7s-.2 2.3-1.9 2.7-4.5-1.4-5-1.8c-.4-.3-7.5-4.8-10.1-7-.7-.6-1.5-1.8.1-3.2 3.6-3.3 7.9-7.4 10.5-10 1.2-1.2 2.4-4-2.6-.6l-14.1 9.5s-1.6 1-4.6.1-6.5-2.1-6.5-2.1-2.4-1.5 1.7-3.1z"
        fill="#fff"
      />
    </g>
  </svg>
)

TelegramSvgIcon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string,
  title: PropTypes.string
}

TelegramSvgIcon.defaultProps = {
  height: null,
  title: null
}

export default TelegramSvgIcon
