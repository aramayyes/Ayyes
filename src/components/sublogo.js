import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Constants } from '../utils'

const Line = styled.hr`
  flex: 1;
  color: ${props => props.theme.colors.mainWhite};
  border-style: solid;
  border-width: 1.5px;
`

const TitleH2 = styled.h2`
  color: ${props => props.theme.colors.mainWhite};
  font-family: 'KoHo', sans-serif;
  text-align: center;
  margin: 0 20px;
  user-select: none;

  @media screen and (max-width: ${props => props.theme.mediaSizes.extraSmall}) {
    margin: 0 10px;
  }
`

const WrapperDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;

  ${props =>
    props.isHovered
      ? `
  & > ${Line} {
    color: ${props.theme.colors.logoSecond};
  }

  & > ${TitleH2} {
    color: ${props.theme.colors.logoSecond};
    text-shadow: 1px 1px 4px ${props.theme.colors.mainBlack};
  }`
      : ''}
`

const Sublogo = ({
  isHovered,
  onMouseEnter,
  onMouseLeave,
  className,
  style
}) => (
  <WrapperDiv
    isHovered={isHovered}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={className}
    style={style}
  >
    <Line />
    <TitleH2>{Constants.SUBLOGO_TITLE}</TitleH2>
    <Line />
  </WrapperDiv>
)

Sublogo.propTypes = {
  isHovered: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
}

Sublogo.defaultProps = {
  isHovered: false,
  onMouseEnter: () => {},
  onMouseLeave: () => {}
}

export default Sublogo
