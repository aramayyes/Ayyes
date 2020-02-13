import React from 'react'
import PropTypes from 'prop-types'

const BotFrameworkSvgIcon = ({ width, height, title, className, style }) => (
  <svg
    viewBox="0 0 384 384"
    width={width}
    height={height}
    className={className}
    style={style}
  >
    <title>{title}</title>
    <defs>
      <style>{'.bot_framework_svg__cls-3{fill:#fff}'}</style>
    </defs>
    <g id="bot_framework_svg__Layer_2" data-name="Layer 2">
      <g id="bot_framework_svg__Layer_1-2" data-name="Layer 1">
        <path fill="#3a96dd" d="M0 0h384v384H0z" />
        <circle cx={192} cy={192} r={128} fill="#0063b1" />
        <circle className="bot_framework_svg__cls-3" cx={172} cy={192} r={12} />
        <circle className="bot_framework_svg__cls-3" cx={212} cy={192} r={12} />
        <path
          className="bot_framework_svg__cls-3"
          d="M221.44 261.07h-90.51a8 8 0 01-8-8v-90.51h16v82.51h82.51zM261.07 221.44h-16v-82.51h-82.51v-16h90.51a8 8 0 018 8z"
        />
      </g>
    </g>
  </svg>
)

BotFrameworkSvgIcon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string,
  title: PropTypes.string
}

BotFrameworkSvgIcon.defaultProps = {
  height: null,
  title: null
}

export default BotFrameworkSvgIcon
