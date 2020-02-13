import React, { useState } from 'react'
import styled from 'styled-components'

import backgroundImg from '../images/about-background.png'

const WrapperDiv = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  position: relative;
  background-image: url(${backgroundImg});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #292d3e;

  @media screen and (max-width: ${props => props.theme.mediaSizes.extraSmall}) {
    height: 320px;
  }
`

const FocusDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  display: none;
  @media (hover: hover) and (pointer: fine) {
    display: block;
  }
`

const AboutSection = ({ className, style }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 })

  const onMouseMove = e => {
    setCursorPosition({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY
    })
  }

  const onMouseLeave = () => {
    setCursorPosition({
      x: -100,
      y: -100
    })
  }

  return (
    <WrapperDiv
      className={className}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <FocusDiv
        style={{
          background: `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, transparent, rgb(0, 0, 0, 0.85) 10%)`
        }}
      />
    </WrapperDiv>
  )
}

export default AboutSection
