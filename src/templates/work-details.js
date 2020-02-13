import React from 'react'
import styled, { withTheme } from 'styled-components'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import Slider from 'react-slick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faCloudDownloadAlt
} from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/layout'
import SEO from '../components/seo'
import KeyValue from '../components/key-value'

import AboutSection from '../components/about-section'
import ContactSection from '../components/contact-section'
import Link from '../components/link'
import ButtonWithIcon from '../components/button-with-icon'
import { Constants, HtmlIds } from '../utils'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const query = graphql`
  query($slug: String!, $screenshotsPath: String!) {
    worksJson(slug: { eq: $slug }) {
      title
      slug
      previewImage {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      platform
      writtenIn
      thirdParty
      releaseDate
      videoLink
      downloadLink
    }
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
        relativeDirectory: { eq: $screenshotsPath }
      }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 40px;
  background-color: ${props => props.theme.colors.mainWhite};
`

const TextSpan = styled.span`
  color: ${props => props.theme.colors.mainBlack};
  font-family: 'KoHo', sans-serif;
  text-align: center;
  font-size: 4em;
  text-transform: uppercase;
  margin-bottom: 40px;

  @media screen and (max-width: ${props => props.theme.mediaSizes.extraSmall}) {
    font-size: 3em;
  }
`

const DetailsRowDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;

  & > * {
    margin-right: 40px;
    margin-bottom: 0;
  }

  div:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: ${props => props.theme.mediaSizes.medium}) {
    flex-direction: column;

    & > * {
      margin-right: 0;
      margin-bottom: 20px;
    }

    div:last-child {
      margin-bottom: 0;
    }
  }
`

const ScreenshotsWrapperDiv = styled.div`
  width: 95%;
  max-width: 700px;
  padding: 40px;
  margin-bottom: 60px;
`

const StyledImage = styled(Image)`
  max-height: 700px;
`

const StyledVideo = styled.video`
  width: 100%;
  max-width: 800px;
  height: 600px;
  background-color: gray;
  margin-bottom: 60px;

  @media screen and (max-width: ${props => props.theme.mediaSizes.small}) {
    height: 400px;
  }
`

const SliderArrowFontAwesomeIcon = styled(
  ({ isNext, currentSlide, slideCount, ...props }) => (
    <FontAwesomeIcon {...props} /> // Filter props passing to the component
  )
)`
  position: absolute;
  top: 50%;
  ${props => (props.isNext ? 'right: -42px' : 'left: -42px')};

  font-size: 32px;
  cursor: pointer;

  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
`

const DownloadLink = styled(Link)`
  margin-bottom: 60px;
`

const SliderArrow = withTheme(
  ({ className, style, isNext, theme, ...props }) => {
    return (
      <span>
        <SliderArrowFontAwesomeIcon
          isNext={isNext}
          icon={isNext ? faArrowAltCircleRight : faArrowAltCircleLeft}
          color={theme.colors.mainBlack}
          {...props}
        />
      </span>
    )
  }
)

const WorkDetails = props => {
  const { data } = props
  const screenshots = data.allFile.edges.map(edge => edge.node)

  const work = { ...data.worksJson }

  work.platform = work.platform.join(', ')
  work.language = work.writtenIn.join(', ')

  if (work.thirdParty && work.thirdParty.length > 0) {
    work.language += ` | [${work.thirdParty.join(', ')}]`
  }

  return (
    <Layout>
      <SEO title={work.title} />
      <WrapperDiv>
        <TextSpan>{work.title}</TextSpan>
        <DetailsRowDiv>
          <KeyValue keyText={Constants.WORK.PLATFORM} value={work.platform} />
          <KeyValue
            keyText={Constants.WORK.DATE}
            value={work.releaseDate.toString()}
          />
          <KeyValue keyText={Constants.WORK.LANGUAGE} value={work.language} />
        </DetailsRowDiv>
        <ScreenshotsWrapperDiv>
          <Slider
            dots
            fade
            prevArrow={<SliderArrow isNext={false} />}
            nextArrow={<SliderArrow isNext />}
          >
            {screenshots.map(screenshot => (
              <StyledImage
                imgStyle={{ objectFit: 'contain' }}
                fluid={screenshot.childImageSharp.fluid}
                alt={screenshot.name}
                key={screenshot.name}
              />
            ))}
          </Slider>
        </ScreenshotsWrapperDiv>
        <StyledVideo muted controls>
          <source src={work.videoLink} type="video/mp4" />
          {Constants.MESSAGES.VIDEO_NOT_SUPPORTED}
        </StyledVideo>
        <DownloadLink to={work.downloadLink}>
          <ButtonWithIcon
            title={Constants.WORK.DOWNLOAD}
            icon={faCloudDownloadAlt}
          />
        </DownloadLink>
      </WrapperDiv>
      <AboutSection />
      <ContactSection id={HtmlIds.CONTACT} />
    </Layout>
  )
}

export default WorkDetails
