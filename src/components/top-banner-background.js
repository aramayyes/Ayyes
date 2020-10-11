import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'

const WrapperDiv = styled.div`
  height: 100vh;
  width: 100%;
  text-align: center;
  background-color: ${props => props.theme.colors.mainBlack};
  box-sizing: border-box;
`

const MainImage = styled(Image)`
  max-width: 1920px;
  max-height: 100%;
  margin: 0 auto;
`

const TopBannerBackground = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "top-banner-background.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <WrapperDiv>
      <MainImage fluid={data.file.childImageSharp.fluid} alt="bg-image" />
    </WrapperDiv>
  )
}

export default TopBannerBackground
