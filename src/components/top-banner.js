import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

import TopBannerBackground from './top-banner-background'
import Particles from './particles'
import Logo from './logo'
import Sublogo from './sublogo'
import Navigation from './navigation'
import ScrollHint from './scroll-hint'

const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  min-height: 600px;
  height: 100vh;
`
const StyledParticles = styled(Particles)`
  position: absolute;
  min-height: 600px;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
`

const LogoAndNavigationWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  pointer-events: none;
  & > * {
    pointer-events: all;
  }
`

const LogoLink = styled(Link)`
  text-decoration: none;
  display: flex;
`

const SublogoLink = styled(Link)`
  text-decoration: none;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
`

const StyledScrollHint = styled(ScrollHint)`
  position: absolute;
  bottom: 40px;

  @media screen and (max-width: ${props => props.theme.mediaSizes.medium}) {
    display: none;
  }
`

const TopBanner = ({ isInHomePage, includeNavigation, includeScrollHint }) => {
  const [isLogoHovered, setLogoHovered] = useState(false)
  const [isSublogoHovered, setSublogoHovered] = useState(false)

  return (
    <WrapperDiv>
      <TopBannerBackground />
      <StyledParticles />

      <LogoAndNavigationWrapper>
        <LogoLink to="/">
          <Logo
            isHovered={isLogoHovered}
            onMouseEnter={() => {
              setLogoHovered(true)
              setSublogoHovered(true)
            }}
            onMouseLeave={() => {
              setLogoHovered(false)
              setSublogoHovered(false)
            }}
          />
        </LogoLink>
        <SublogoLink to="/">
          <Sublogo
            isHovered={isSublogoHovered}
            onMouseEnter={() => {
              setLogoHovered(true)
              setSublogoHovered(true)
            }}
            onMouseLeave={() => {
              setLogoHovered(false)
              setSublogoHovered(false)
            }}
          />
        </SublogoLink>
        {includeNavigation ? (
          <Navigation areWorksInSamePage={isInHomePage} />
        ) : (
          <></>
        )}
      </LogoAndNavigationWrapper>
      {includeScrollHint ? <StyledScrollHint /> : <></>}
    </WrapperDiv>
  )
}

TopBanner.propTypes = {
  isInHomePage: PropTypes.bool,
  includeNavigation: PropTypes.bool,
  includeScrollHint: PropTypes.bool
}

TopBanner.defaultProps = {
  isInHomePage: false,
  includeNavigation: true,
  includeScrollHint: true
}

export default TopBanner
