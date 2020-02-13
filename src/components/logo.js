import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import logoSVG from '../images/logo.svg'

const LogoImg = styled.img`
  width: ${props => props.width};
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  user-select: none;

  ${props =>
    props.isHovered &&
    `
    transform: scale(1.1)
    `};

  @media screen and (max-width: ${props => props.theme.mediaSizes.extraLarge}) {
    width: ${props => props.responsiveWidths.extraLarge || props.width};
  }

  @media screen and (max-width: ${props => props.theme.mediaSizes.large}) {
    width: ${props => props.responsiveWidths.large || props.width};
  }

  @media screen and (max-width: ${props => props.theme.mediaSizes.medium}) {
    width: ${props => props.responsiveWidths.medium || props.width};
  }

  @media screen and (max-width: ${props => props.theme.mediaSizes.small}) {
    width: ${props => props.responsiveWidths.small};
  }

  @media screen and (max-width: ${props => props.theme.mediaSizes.extraSmall}) {
    width: ${props => props.responsiveWidths.extraSmall};
  }

  @media screen and (min-width: ${props => props.theme.mediaSizes.extraLarge}) {
    width: ${props => props.responsiveWidths.minExtraLarge};
  }
`

const Logo = ({
  width,
  isHovered,
  responsiveWidths,
  onMouseEnter,
  onMouseLeave,
  className,
  style
}) => (
  <LogoImg
    src={logoSVG}
    alt="Logo"
    width={width}
    isHovered={isHovered}
    responsiveWidths={responsiveWidths}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={className}
    style={style}
  />
)

Logo.propTypes = {
  width: PropTypes.string,
  responsiveWidths: PropTypes.shape({
    extraSmall: PropTypes.string,
    small: PropTypes.string,
    medium: PropTypes.string,
    large: PropTypes.string,
    extraLarge: PropTypes.string
  }),
  isHovered: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
}

Logo.defaultProps = {
  width: '240px',
  responsiveWidths: {
    extraSmall: '120px',
    small: '180px',
    medium: '220px',
    large: '240px',
    minExtraLarge: '400px'
  },
  isHovered: false,
  onMouseEnter: () => {},
  onMouseLeave: () => {}
}

export default Logo
