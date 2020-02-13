import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import NavigationItem from './navigation-item'
import { Constants, HtmlIds } from '../utils'

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  user-select: none;

  & > * {
    margin-right: 40px;
    margin-bottom: 0;
  }

  a:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: ${props => props.theme.mediaSizes.medium}) {
    flex-direction: column;

    & > * {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }
`

const Navigation = ({ className, style, areWorksInSamePage }) => {
  const onWorksClick = e => {
    e.preventDefault()
    document
      .querySelector(`#${HtmlIds.WORKS}`)
      .scrollIntoView({ behavior: 'smooth' })
  }

  const onContactClick = e => {
    e.preventDefault()
    document
      .querySelector(`#${HtmlIds.CONTACT}`)
      .scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <WrapperDiv className={className} style={style}>
      <NavigationItem
        id={`navigation_${Constants.NAVIGATION.TITLES.WORKS}`}
        title={Constants.NAVIGATION.TITLES.WORKS}
        {...(areWorksInSamePage ? { onClick: onWorksClick } : { to: '/' })}
        rotationDegree={areWorksInSamePage ? 180 : -90}
      />
      <NavigationItem
        id={`navigation_${Constants.NAVIGATION.TITLES.THESIS}`}
        title={Constants.NAVIGATION.TITLES.THESIS}
        to={Constants.NAVIGATION.LINKS.THESIS}
        rotationDegree={25}
      />
      <NavigationItem
        id={`navigation_${Constants.NAVIGATION.TITLES.CONTACT}`}
        title={Constants.NAVIGATION.TITLES.CONTACT}
        onClick={onContactClick}
        useDoubleArrow
        rotationDegree={180}
      />
    </WrapperDiv>
  )
}

Navigation.propTypes = {
  areWorksInSamePage: PropTypes.bool
}

Navigation.defaultProps = {
  areWorksInSamePage: false
}

export default Navigation
