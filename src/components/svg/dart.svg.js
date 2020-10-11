import React from 'react'
import PropTypes from 'prop-types'

const DartSvgIcon = ({ width, height, title, className, style }) => {
  return (
    <svg
      viewBox="0 0 256 256"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <title>{title}</title>
      <path
        d="M70.534 69.696L53.988 53.15l.07 119.6.198 5.59c.082 2.63.57 5.598 1.384 8.674l131.104 46.23 32.772-14.52.012-.04L70.534 69.696"
        fill="#00D2B8"
      />
      <path
        d="M55.64 187.014l.008.008c-.008-.054-.036-.114-.036-.17 0 .056.008.108.028.162zm163.876 31.71l-32.772 14.52-131.096-46.222c2.504 9.608 8.048 20.408 14.014 26.314l42.784 42.54 95.13.124 11.952-37.316-.012.04z"
        fill="#55DDCA"
      />
      <path
        d="M3.034 130.116c-4.236 4.522-2.132 13.85 4.688 20.722L37.14 180.5l18.5 6.514c-.814-3.076-1.302-6.044-1.384-8.674l-.198-5.59-.07-119.6-50.954 76.966z"
        fill="#0081C6"
      />
      <path
        d="M187.82 54.686c-3.076-.786-6.026-1.272-8.7-1.356l-5.908-.204-119.224.016 165.556 165.542h.014l14.54-32.804L187.82 54.686"
        fill="#0079B3"
      />
      <path
        d="M187.67 54.654c.064.014.114.032.156.038l-.006-.006c-.036-.018-.086-.018-.15-.032zm26.448 14.078c-6.008-6.058-16.666-11.564-26.292-14.04l46.272 131.188-14.54 32.804h-.014l35.532-11.348.076-97.416-41.034-41.188z"
        fill="#00A4E4"
      />
      <path
        d="M181.338 36.298L151.684 6.862c-6.858-6.794-16.19-8.908-20.7-4.684L53.988 53.142l119.224-.016 5.908.204c2.674.084 5.624.57 8.7 1.356l-6.482-18.388z"
        fill="#00D2B8"
      />
    </svg>
  )
}

DartSvgIcon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string,
  title: PropTypes.string
}

DartSvgIcon.defaultProps = {
  height: null,
  title: null
}

export default DartSvgIcon
