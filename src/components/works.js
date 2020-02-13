import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Work from './work'

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props =>
    props.children.length === 3 ? 'space-between' : 'space-around'};
  align-items: center;
  width: 100%;
  margin-bottom: 60px;

  & > * {
    width: 30%;
  }

  @media screen and (max-width: ${props => props.theme.mediaSizes.medium}) {
    flex-direction: column;
    margin-bottom: 0;

    & > * {
      width: 100%;
      margin-bottom: 60px;
    }
  }
`

const Works = ({ className, style, works }) => {
  const worksSubArray = []
  const worksInARow = 3
  for (let i = 0; i < works.length; i += worksInARow) {
    worksSubArray.push(works.slice(i, i + 3))
  }

  return (
    <WrapperDiv className={className} style={style}>
      {worksSubArray.map((rowWorks, index) => (
        <RowDiv key={index.toString()}>
          {rowWorks.map(work => (
            <Work {...work} key={work.slug} />
          ))}
        </RowDiv>
      ))}
    </WrapperDiv>
  )
}

Works.propTypes = {
  works: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      platform: PropTypes.arrayOf(PropTypes.string).isRequired,
      writtenIn: PropTypes.arrayOf(PropTypes.string),
      thirdParty: PropTypes.arrayOf(PropTypes.string),
      previewImage: PropTypes.object.isRequired,
      externalLink: PropTypes.string
    })
  ).isRequired
}

export default Works
