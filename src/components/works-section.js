import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import UnderlinedText from './underlined-text'
import Works from './works'
import { Constants } from '../utils'

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 40px;
  background-color: ${props => props.theme.colors.mainWhite};
`

const StyledUnderlinedText = styled(UnderlinedText)`
  width: 50%;
  max-width: 1800px;

  @media screen and (max-width: ${props => props.theme.mediaSizes.medium}) {
    width: 85%;
    margin-bottom: 50px;
  }
`

const StyledWorks = styled(Works)`
  width: 85%;
  max-width: 1800px;
`

const WorksSection = ({ className, style, id }) => {
  const data = useStaticQuery(graphql`
    query {
      allWorksJson {
        edges {
          node {
            title
            slug
            previewImage {
              childImageSharp {
                fluid(maxWidth: 400, quality: 70) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            platform
            writtenIn
            thirdParty
            externalLink
          }
        }
      }
    }
  `)

  return (
    <WrapperDiv className={className} style={style} id={id}>
      <StyledUnderlinedText
        text={Constants.NAVIGATION.TITLES.WORKS}
        textPosition="left"
      />
      <StyledWorks works={data.allWorksJson.edges.map(edge => edge.node)} />
    </WrapperDiv>
  )
}

export default WorksSection
