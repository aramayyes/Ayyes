import React from 'react'
import PropTypes from 'prop-types'

const SFMLSvgIcon = ({ width, height, title, className, style }) => {
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
        <path d="M640 0v640H0V0h640z" id={`sfml_svg__a_${idPrefix}`} />
        <path
          d="M433.61 102.29l18.84 13.68 18.84 13.69 18.84 13.69 18.84 13.69c11.31 8.21 17.59 12.78 18.85 13.69 95.7 70.35 84.41 98.56 58.22 179.19-.48 1.48-2.88 8.86-7.2 22.15l-7.2 22.15-7.19 22.14-7.2 22.15-7.2 22.15c-4.32 13.29-6.71 20.68-7.19 22.15-37.33 112.75-67.66 110.75-152.43 110.75H250.7c-118.77-.66-126.23-30.13-152.43-110.75-.48-1.47-2.88-8.86-7.19-22.15l-7.2-22.15-7.2-22.15-7.19-22.14-7.2-22.15c-4.32-13.29-6.72-20.67-7.2-22.15-36.07-113.17-10.36-129.36 58.22-179.19 1.26-.91 7.54-5.48 18.84-13.69L151 143.35l18.84-13.69 18.84-13.69 18.84-13.69c11.3-8.21 17.58-12.77 18.84-13.68 96.47-69.28 119.83-49.83 188.41 0l18.84 13.69z"
          id={`sfml_svg__b_${idPrefix}`}
        />
        <path
          d="M55.15 349.85c.48 1.49 2.85 8.91 7.13 22.28l7.27 22.12 7.12 22.12 7.27 22.12 7.12 22.12c4.37 13.36 6.79 20.79 7.28 22.27 26.19 80.63 33.65 109.95 152.42 110.61h139.7c84.77 0 115.09 2.14 152.42-110.61.48-1.48 2.85-8.91 7.13-22.27l7.27-22.12 7.12-22.12c3.27-10.09 5.09-15.7 5.45-16.82-216.21-22.27-401.02-63.24-530.13-116.09 0 0-.01.01-.02.03 4.54 26.15 9.69 48.27 15.45 66.36z"
          id={`sfml_svg__d_${idPrefix}`}
        />
        <path
          d="M399.2 217.19l5.15 3.79 13.03 9.39 13.03 9.55 13.03 9.39 13.03 9.54c8.36 6 13.01 9.34 13.94 10 11.45 7.82 15.08 11.82 16.21 12.88-.39 1.36-1.49 6.23-6.06 20.31-.33 1.03-2 6.18-5 15.45l-5 15.3-5 15.31-5 15.3-4.85 15.3-5 15.46-5 15.3-5 15.3-5 15.31c-3.18 9.82-4.94 15.27-5.3 16.36-3.94 13.46-6.65 18.05-7.27 19.39-1.73.05-6.38.46-21.21.46H239.66c-13.88.41-19.07-.56-20.61-.76-.48-1.22-2.28-4.31-6.97-20.15-.33-1.02-2-6.12-5-15.3l-5-15.3-5-15.31-5-15.3-5-15.46-5-15.3-4.85-15.3-5-15.3-5-15.31c-3.18-9.82-4.94-15.27-5.3-16.36-4.75-13.28-5.32-18.59-5.6-20 1.09-.88 3.55-3.24 16.81-12.88.87-.63 5.22-3.76 13.04-9.39l13.18-9.55 13.03-9.39 13.03-9.55 13.03-9.39 5-3.64-19.7-75.61-1.97 1.37-13.03 9.54-13.03 9.4-13.03 9.54-13.18 9.4-13.03 9.54-13.03 9.55c-7.82 5.63-12.16 8.77-13.03 9.39-15.58 11.32-32.41 20.68-42.12 44.24-9.6 23.28-4.13 46.06 4.7 70.91.33 1.02 1.99 6.12 4.99 15.3l5 15.31 5 15.3 5 15.46 5 15.3 5 15.3 5 15.3 4.85 15.31 5 15.45c3 9.18 4.67 14.28 5 15.3 5.95 18.32 9.68 37.27 29.09 53.79 19.15 16.3 42.47 17.98 68.79 17.28h161.22c19.26 0 38.44 2.29 60.15-11.06 21.41-13.17 30.42-34.77 37.88-60 .33-1.02 2-6.13 5-15.31l4.85-15.45 5-15.3 5-15.31 5-15.3 5-15.3 5-15.46 4.99-15.3 5.01-15.3c2.9-9.19 4.52-14.29 4.84-15.31 5.95-18.31 14.18-35.83 8.19-60.6-5.91-24.43-23.76-39.65-45.46-54.55-.87-.63-5.21-3.76-13.03-9.39l-13.18-9.55-13.03-9.54-13.03-9.4-13.03-9.54-13.03-9.4-13.03-9.54-2.12-1.52h-.02l-19.69 75.61z"
          id={`sfml_svg__f_${idPrefix}`}
        />
        <path
          d="M260.88 114.64c-.17.13-.29.32-.45.46 3.33 12.83 20 77 49.99 192.5h21.82l50.16-192.5-.46-.46c-15.58-11.32-29.74-24.4-55.15-26.36-3.13-.24-6.11-.34-9.09-.15-25.72 8.33-44.65 17.17-56.82 26.51z"
          id={`sfml_svg__g_${idPrefix}`}
        />
        <linearGradient
          id={`sfml_svg__c_${idPrefix}`}
          gradientUnits="userSpaceOnUse"
          x1={424.35}
          y1={25.97}
          x2={424.35}
          y2={993.45}
        >
          <stop offset="0%" stopColor="#a9ee52" />
          <stop offset="100%" stopColor="#53880e" />
        </linearGradient>
        <linearGradient
          id={`sfml_svg__e_${idPrefix}`}
          gradientUnits="userSpaceOnUse"
          x1={424.73}
          y1={34.91}
          x2={424.73}
          y2={664.73}
        >
          <stop offset="0%" stopColor="#a9ee52" />
          <stop offset="100%" stopColor="#53880e" />
        </linearGradient>
      </defs>
      <use xlinkHref={`#sfml_svg__a_${idPrefix}`} fillOpacity={0} />
      <use
        xlinkHref={`#sfml_svg__a_${idPrefix}`}
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <use
        xlinkHref={`#sfml_svg__b_${idPrefix}`}
        fill={`url(#sfml_svg__c_${idPrefix})`}
      />
      <use
        xlinkHref={`#sfml_svg__b_${idPrefix}`}
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <use
        xlinkHref={`#sfml_svg__d_${idPrefix}`}
        fill={`url(#sfml_svg__e_${idPrefix})`}
      />
      <use
        xlinkHref={`#sfml_svg__d_${idPrefix}`}
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <g>
        <use xlinkHref={`#sfml_svg__f_${idPrefix}`} fill="#fff" />
        <use
          xlinkHref={`#sfml_svg__f_${idPrefix}`}
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </g>
      <g>
        <use xlinkHref={`#sfml_svg__g_${idPrefix}`} fill="#fff" />
        <use
          xlinkHref={`#sfml_svg__g_${idPrefix}`}
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </g>
    </svg>
  )
}

SFMLSvgIcon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string,
  title: PropTypes.string
}

SFMLSvgIcon.defaultProps = {
  height: null,
  title: null
}

export default SFMLSvgIcon
