import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FontAwesomeIconWrapperSpan = styled.span`
  padding: 2px 8px;
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 22px;
`

const ButtonTextSpan = styled.span`
  padding: 2px 8px;
  border-left: ${props => props.theme.colors.mainBlack} 3px solid;
  transition: all 0.2s ease-in;
`

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  color: ${props => props.theme.colors.mainBlack};
  border: ${props => props.theme.colors.mainBlack} 3px solid;
  padding: 0;

  cursor: pointer;

  font-size: 24px;
  font-family: 'KoHo', sans-serif;

  &:hover ${ButtonTextSpan} {
    background-color: ${props => props.theme.colors.mainBlack};
    color: ${props => props.theme.colors.mainWhite};
  }

  &:focus {
    outline-color: ${props => props.theme.colors.logoSecond};
  }
`

const ButtonWithIcon = ({ title, icon, iconProps, ...props }) => {
  return (
    <StyledButton {...props}>
      <FontAwesomeIconWrapperSpan>
        <StyledFontAwesomeIcon icon={icon} {...iconProps} />
      </FontAwesomeIconWrapperSpan>
      <ButtonTextSpan>{title}</ButtonTextSpan>
    </StyledButton>
  )
}

export default ButtonWithIcon
