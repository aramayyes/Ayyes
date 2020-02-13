import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: ${props => props.theme.colors.mainBlack} 3px solid;
`

const KeyTextSpan = styled.span`
  padding: 2px 8px;
  font-size: 18px;
  font-family: 'KoHo', sans-serif;
  color: ${props => props.theme.colors.mainWhite};
  background-color: ${props => props.theme.colors.mainBlack};
`

const ValueTextSpan = styled.span`
  padding: 2px 8px;
  font-size: 18px;
  font-family: 'KoHo', sans-serif;
  ${props => props.theme.colors.mainBlack};
  background-color: transparent;
`

const KeyValue = ({ className, style, keyText, value }) => {
  return (
    <WrapperDiv className={className} style={style}>
      <KeyTextSpan>{keyText}</KeyTextSpan>
      <ValueTextSpan>{value}</ValueTextSpan>
    </WrapperDiv>
  )
}

KeyValue.propTypes = {
  keyText: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default KeyValue
