import React from 'react'
import styled from 'styled-components'

import UnderlinedText from './underlined-text'
import Contact from './contact'
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
  margin-bottom: 50px;

  @media screen and (max-width: ${props => props.theme.mediaSizes.medium}) {
    width: 85%;
    margin-bottom: 50px;
  }
`

const StyledContact = styled(Contact)`
  width: 85%;
  max-width: 900px;
`

const ContactSection = ({ className, style, id }) => {
  return (
    <WrapperDiv className={className} style={style} id={id}>
      <StyledUnderlinedText
        text={Constants.NAVIGATION.TITLES.CONTACT}
        textPosition="right"
      />
      <StyledContact />
    </WrapperDiv>
  )
}

export default ContactSection
