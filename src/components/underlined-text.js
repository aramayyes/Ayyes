import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TextPositions = Object.freeze({
  LEFT: 'left',
  RIGHT: 'right',
  CENTER: 'center'
})

const getAlignSelfValue = position => {
  switch (position) {
    case TextPositions.LEFT:
      return 'flex-start'
    case TextPositions.RIGHT:
      return 'flex-end'
    case TextPositions.CENTER:
    default:
      return 'center'
  }
}

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 150px;
`

const TextSpan = styled.span`
  align-self: ${props => getAlignSelfValue(props.position)};
  color: ${props => props.theme.colors.mainBlack};
  font-family: 'KoHo', sans-serif;
  text-align: center;
  user-select: none;
  font-size: 4em;
`

const LineHr = styled.hr`
  width: 100%;
  color: ${props => props.theme.colors.mainBlack};
  border-style: solid;
  border-width: 1.5px;
`

const UnderlinedText = ({ className, style, text, textPosition }) => {
  return (
    <WrapperDiv className={className} style={style}>
      <TextSpan position={textPosition}>{text}</TextSpan>
      <LineHr />
    </WrapperDiv>
  )
}

UnderlinedText.propTypes = {
  text: PropTypes.string.isRequired,
  textPosition: PropTypes.oneOf(Object.values(TextPositions))
}

UnderlinedText.defaultProps = {
  textPosition: 'center'
}

export default UnderlinedText
