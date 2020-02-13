import React from 'react'
import styled, { withTheme } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

import MouseSvgIcon from './svg/mouse.svg'

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const MouseSVG = styled(MouseSvgIcon)`
  fill: ${props => props.theme.colors.mainWhite};
  transform: rotate(${props => props.rotationDegree}deg);

  @media screen and (max-width: ${props => props.theme.mediaSizes.medium}) {
    margin-left: auto;
  }
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  animation: bounce 3s infinite;

  @keyframes bounce {
    40% {
      transform: translateY(-10px);
    }

    60% {
      transform: translateY(10px);
    }
  }
`

const Logo = ({ className, style, theme }) => (
  <WrapperDiv className={className} style={style}>
    <MouseSVG width="48px" height="48px" />
    <span>
      <StyledFontAwesomeIcon
        icon={faArrowDown}
        color={theme.colors.mainWhite}
        style={{ fontSize: '20px' }}
      />
    </span>
  </WrapperDiv>
)

export default withTheme(Logo)
