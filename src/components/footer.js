import React from 'react'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import { Constants } from '../utils'

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: -1;
  bottom: 0;
  width: 100%;
  height: 200px;
  background-color: ${props => props.theme.colors.mainBlack};
`

const MainImage = styled(Image)`
  position: absolute !important;
  max-width: 1920px;
  width: 100%;
  max-height: 100%;
  height: 100%;
  z-index: -1;
`

const CopyrightTextSpan = styled.span`
  color: ${props => props.theme.colors.mainWhite};
  font-family: 'KoHo', sans-serif;
  font-size: 24px;
`

const DesignedByTextSpan = styled.span`
  color: ${props => props.theme.colors.mainWhite};
  font-family: 'KoHo', sans-serif;
  font-size: 14px;
`

const StyledHr = styled.hr`
  border: ${props => props.theme.colors.mainWhite} 0.5px dashed;
  width: 20%;
  min-width: 200px;
`

const AuthorA = styled.a`
  color: ${props => props.theme.colors.logoSecond};
`

const Footer = ({ className, style }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "footer-background.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <WrapperDiv className={className} style={style}>
      <MainImage fluid={data.file.childImageSharp.fluid} alt="bg-image" />
      <CopyrightTextSpan>
        &copy; {new Date().getFullYear()} - {Constants.FOOTER_TITLE}
      </CopyrightTextSpan>
      <StyledHr />
      <DesignedByTextSpan>
        Designed by{' '}
        <AuthorA
          href="https://github.com/aramayyes/"
          target="_blank"
          rel="noreferrer noopener"
        >
          @aramayyes
        </AuthorA>
      </DesignedByTextSpan>
    </WrapperDiv>
  )
}

export default Footer
