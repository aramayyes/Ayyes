import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import GlobalStyle from '../components/global-style'
import SEO from '../components/seo'
import TopBannerBackground from '../components/top-banner-background'
import NavigationItem from '../components/navigation-item'
import { Constants, Theme } from '../utils'

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 400px;
`

const Message404Span = styled.span`
  color: ${props => props.theme.colors.mainWhite};
  text-align: center;
  font-family: 'KoHo', sans-serif;
  font-size: 10em;
  font-weight: normal;
`
const NotFoundMessageSpan = styled.span`
  color: ${props => props.theme.colors.mainWhite};
  text-align: center;
  font-family: 'KoHo', sans-serif;
  font-size: 2em;
  font-weight: normal;
`

const StyledNavigationItem = styled(NavigationItem)`
  margin-top: 40px;
  width: 180px;
`

const NotFoundPage = () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <SEO title="404: Not found" />
    <TopBannerBackground />
    <MessageWrapper>
      <Message404Span>{Constants.MESSAGES.M_404}</Message404Span>
      <NotFoundMessageSpan>{Constants.MESSAGES.NOT_FOUND}</NotFoundMessageSpan>
      <StyledNavigationItem
        id={`navigation_${Constants.NAVIGATION.TITLES.HOME}`}
        title={Constants.NAVIGATION.TITLES.HOME}
        to={Constants.NAVIGATION.LINKS.HOME}
        rotationDegree={-90}
      />
    </MessageWrapper>
  </ThemeProvider>
)

export default NotFoundPage
