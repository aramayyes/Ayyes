import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { Theme } from '../utils'

import GlobalStyle from './global-style'
import TopBanner from './top-banner'
import Footer from './footer'

const Layout = ({ children, isHomePage }) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <TopBanner isInHomePage={isHomePage} />
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHomePage: PropTypes.bool
}

Layout.defaultProps = {
  isHomePage: false
}

export default Layout
