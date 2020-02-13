import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Image from 'gatsby-image'

import Link from './link'

const requireSvgIcon = name => {
  switch (name) {
    case 'Windows':
      return require('../components/svg/windows.svg').default
    case 'Android':
      return require('../components/svg/android.svg').default
    case 'Telegram':
      return require('../components/svg/telegram.svg').default
    case 'Facebook':
      return require('../components/svg/facebook.svg').default
    case 'WEB':
      return require('../components/svg/web.svg').default
    case 'C++':
      return require('../components/svg/c-plus-plus.svg').default
    case 'Java':
      return require('../components/svg/java.svg').default
    case 'C#':
      return require('../components/svg/c-sharp.svg').default
    case 'JS':
      return require('../components/svg/js.svg').default
    case 'Python':
        return require('../components/svg/python.svg').default
    case 'HTML':
      return require('../components/svg/html.svg').default
    case 'BotFramework':
      return require('../components/svg/bot-framework.svg').default
    case 'Xamarin':
      return require('../components/svg/xamarin.svg').default
    case 'SFML':
      return require('../components/svg/sfml.svg').default
    default:
      return null
  }
}

const TitleH2 = styled.h2`
  position: relative;
  margin-bottom: 0;
  margin-top: 0;
  padding: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: ${props => props.theme.colors.mainWhite};
  text-align: center;
  font-family: 'Work Sans', sans-serif;
  font-size: 24px;
  font-weight: normal;
  opacity: 100;
  filter: alpha(opacity=100);

  transition: all 0.2s ease-in;
`

const ImageOverlayDiv = styled.div`
  height: 100%;
  background: ${props => props.theme.colors.mainBlack};
  opacity: 0.3;
  filter: alpha(opacity=30);

  transition: all 0.2s ease-in;
`

const WrapperDiv = styled(Link)`
  display: flex;
  flex-direction: row;
  transition: all 0.3s ease-in;

  &:hover ${TitleH2} {
    opacity: 0;
    filter: alpha(opacity=0);
    transform: translateY(20px);
  }

  &:hover ${ImageOverlayDiv} {
    opacity: 0;
    filter: alpha(opacity=0);
    transform: translateY(-100px);
  }

  &:hover {
    transform: translateY(-20px);
  }
`

const ImageWrapperDiv = styled.div`
  display: flex;
  flex: 5;
  width: 100%;
  height: 100%;
  float: left;
  overflow: hidden;
  position: relative;
  text-align: center;
`

const PreviewImage = styled(Image)`
  width: 100%;
  height: 100%;
`

const CaptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  bottom: 0;
  left: 0;
`

const LogosBarDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  background-color: ${props => props.theme.colors.secondaryWhite};

  & > * {
    margin-bottom: 20px;
  }

  svg:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: ${props => props.theme.mediaSizes.medium}) {
    padding-top: 10px;

    & > * {
      margin-bottom: 15px;
    }

    svg:last-child {
      margin-bottom: 0;
    }
  }
`

const Work = ({
  className,
  style,
  title,
  slug,
  previewImage,
  platform,
  writtenIn,
  thirdParty,
  externalLink
}) => {
  let icons = platform.map(name => ({
    title: name,
    svg: requireSvgIcon(name)
  }))

  if (writtenIn && writtenIn.length > 0) {
    icons = icons.concat(
      writtenIn.map(name => ({
        title: name,
        svg: requireSvgIcon(name)
      }))
    )
  }

  if (thirdParty && thirdParty.length > 0) {
    icons = icons.concat(
      thirdParty.map(name => ({
        title: name,
        svg: requireSvgIcon(name)
      }))
    )
  }

  icons = icons.filter(ic => ic.svg != null)

  return (
    <WrapperDiv
      className={className}
      style={style}
      to={externalLink || `/${slug}`}
    >
      <ImageWrapperDiv>
        <PreviewImage fluid={previewImage.childImageSharp.fluid} alt={title} />
        <CaptionDiv>
          <ImageOverlayDiv />
          <TitleH2>{title}</TitleH2>
        </CaptionDiv>
      </ImageWrapperDiv>
      <LogosBarDiv>
        {icons.map(({ svg: IconSvg, title: IconTitle }, index) => (
          <IconSvg width="50%" key={index.toString()} title={IconTitle} />
        ))}
      </LogosBarDiv>
    </WrapperDiv>
  )
}

Work.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  platform: PropTypes.arrayOf(PropTypes.string).isRequired,
  writtenIn: PropTypes.arrayOf(PropTypes.string),
  thirdParty: PropTypes.arrayOf(PropTypes.string),
  // eslint-disable-next-line react/forbid-prop-types
  previewImage: PropTypes.object.isRequired,
  externalLink: PropTypes.string
}

Work.defaultProps = {
  writtenIn: [],
  thirdParty: [],
  externalLink: null
}

export default Work
