import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Link from './link'
import ArrowSvgIcon from './svg/arrow.svg'
import DoubleArrowSvgIcon from './svg/double-arrow.svg'

const TitleSpan = styled.span`
  color: ${props => props.theme.colors.mainWhite};
  text-align: center;
  font-family: 'KoHo', sans-serif;
  font-size: 2.25em;
  line-height: 1.1;
  margin-bottom: 4px;
`

const ArrowSVG = styled(ArrowSvgIcon)`
  fill: ${props => props.theme.colors.mainWhite};
  transform: rotate(${props => props.rotationDegree}deg);

  @media screen and (max-width: ${props => props.theme.mediaSizes.medium}) {
    margin-left: auto;
  }
`

const DoubleArrowSVG = styled(DoubleArrowSvgIcon)`
  fill: ${props => props.theme.colors.mainWhite};
  transform: rotate(${props => props.rotationDegree}deg);

  @media screen and (max-width: ${props => props.theme.mediaSizes.medium}) {
    margin-left: auto;
  }
`

const WrapperBase = props => `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 210px;
  padding: 4px 10px;
  border: ${props.theme.colors.mainWhite} 2px solid;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    border: ${props.theme.colors.logoSecond} 2px solid;
    background-color: ${props.theme.colors.mainBlack};
  }

  &:hover > ${ArrowSVG}, &:hover > ${DoubleArrowSVG} {
    fill: ${props.theme.colors.logoSecond};
  }

  &:hover > ${TitleSpan} {
    color: ${props.theme.colors.logoSecond};
  }

  @media screen and (max-width: ${props.theme.mediaSizes.extraSmall}) {
    width: 220px;
  }
`

const WrapperLink = styled(Link)`
  ${WrapperBase}
`

const WrapperButton = styled.button`
  ${WrapperBase};
  background-color: transparent;
  font: inherit;

  &:focus {
    outline-color: transparent;
  }
`

const NavigationItem = ({
  title,
  to,
  onClick,
  useDoubleArrow,
  rotationDegree,
  className,
  style
}) => {
  const Arrow = useDoubleArrow ? DoubleArrowSVG : ArrowSVG

  const Wrapper = onClick ? WrapperButton : WrapperLink

  return (
    <Wrapper
      {...(onClick ? { onClick } : { to })}
      className={className}
      style={style}
    >
      <TitleSpan>{title}</TitleSpan>
      <Arrow width="36px" height="36px" rotationDegree={rotationDegree} />
    </Wrapper>
  )
}

NavigationItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
  useDoubleArrow: PropTypes.bool,
  rotationDegree: PropTypes.number
}

NavigationItem.defaultProps = {
  to: null,
  onClick: null,
  useDoubleArrow: false,
  rotationDegree: 0
}

export default NavigationItem
