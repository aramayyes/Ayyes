import React from 'react'
import PropTypes from 'prop-types'

const FacebookSvgIcon = ({ width, height, title, className, style }) => {
  const idPrefix = (
    Date.now().toString(36) +
    Math.random()
      .toString(36)
      .substr(2, 5)
  ).toUpperCase()

  return (
    <svg
      viewBox="0 0 640 640"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <title>{title}</title>
      <defs>
        <path
          id={`a_${idPrefix}`}
          d="M320 14.54C151.31 14.54 14.54 151.31 14.54 320c0 152.45 111.68 278.83 257.74 301.77V408.32H194.7V320h77.58v-67.31c0-76.55 45.62-118.86 115.38-118.86 33.42 0 68.38 5.97 68.38 5.97v75.17h-38.53c-37.93 0-49.79 23.54-49.79 47.73V320h84.71l-13.53 88.32h-71.18v213.45C513.78 598.87 625.46 472.49 625.46 320c0-168.69-136.77-305.46-305.46-305.46z"
        />
        <path
          id={`b_${idPrefix}`}
          d="M452.43 320h-84.71v-57.3c0-24.14 11.82-47.73 49.79-47.73h38.53V139.8s-34.96-5.97-68.38-5.97c-69.76 0-115.38 42.27-115.38 118.86V320H194.7v88.32h77.58v213.45c15.55 2.45 31.48 3.69 47.72 3.69s32.17-1.29 47.72-3.69V408.32h71.18L452.43 320z"
        />
      </defs>
      <use fill="#1977f3" xlinkHref={`#a_${idPrefix}`} />
      <use
        fillOpacity="0"
        stroke="#000"
        strokeOpacity="0"
        xlinkHref={`#a_${idPrefix}`}
      />
      <g>
        <use fill="#fefefe" xlinkHref={`#b_${idPrefix}`} />
        <use
          fillOpacity="0"
          stroke="#000"
          strokeOpacity="0"
          xlinkHref={`#b_${idPrefix}`}
        />
      </g>
    </svg>
  )
}

FacebookSvgIcon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string,
  title: PropTypes.string
}

FacebookSvgIcon.defaultProps = {
  height: null,
  title: null
}

export default FacebookSvgIcon
