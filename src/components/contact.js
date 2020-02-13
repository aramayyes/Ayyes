import React, { useReducer } from 'react'
import styled, { withTheme } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faEnvelope,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons'

import ButtonWithIcon from './button-with-icon'
import { Constants } from '../utils'

const WrapperDiv = styled.div``
const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
`

const NameEmailRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;

  @media screen and (max-width: ${props => props.theme.mediaSizes.medium}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: 0;
  }
`

const InputWrapperDiv = styled.div`
  position: relative;
  width: 48%;
  height: 50px;

  margin-bottom: 0;

  @media screen and (max-width: ${props => props.theme.mediaSizes.medium}) {
    width: 100%;
    margin-bottom: 20px;
  }
`

const InputIconWrapperSpan = styled.span`
  position: absolute;
  left: 16px;
  top: 16px;
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 18px;
`

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border: ${props =>
      props.error ? props.theme.colors.errorRed : props.theme.colors.mainBlack}
    3px solid;
  background-color: ${props => props.theme.colors.secondaryWhite};

  font-size: 18px;
  font-family: 'Montserrat Alternates', sans-serif;
  padding-left: 40px;
  padding-right: 10px;

  &:focus {
    outline-color: ${props => props.theme.colors.logoSecond};
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 100px
      ${props => props.theme.colors.secondaryWhite} inset;
  }
`

const StyledTextarea = styled.textarea`
  width: 100%;
  border: ${props =>
      props.error ? props.theme.colors.errorRed : props.theme.colors.mainBlack}
    3px solid;
  min-height: 200px;
  max-height: 400px;
  margin-bottom: 20px;
  padding: 10px;
  resize: vertical;
  background-color: ${props => props.theme.colors.secondaryWhite};

  font-size: 18px;
  font-family: 'Montserrat Alternates', sans-serif;

  &:focus {
    outline-color: ${props => props.theme.colors.logoSecond};
  }

  &:invalid {
    border: ${props => props.theme.colors.errorRed} 3px solid;
  }
`

const SubmitButton = styled(ButtonWithIcon)`
  align-self: flex-end;
  font-size: 24px;
  font-family: 'KoHo', sans-serif;
`

const Contact = ({ className, style, theme }) => {
  const [input, setInput] = useReducer(
    (state, action) => ({ ...state, ...action }),
    {
      name: '',
      email: '',
      message: ''
    }
  )

  const [inputError, setInputError] = useReducer(
    (state, action) => ({ ...state, ...action }),
    {
      name: null,
      email: null,
      message: null
    }
  )

  const handleInputChange = e => {
    const { name, value } = e.target
    setInput({ [name]: value })
    setInputError({ [name]: null })
  }

  const validateForm = e => {
    const error = {}
    if (!input.name) {
      error.name = true
    }

    if (!input.email || !/^\S+@\S+$/.test(input.email)) {
      error.email = true
    }

    if (!input.message) {
      error.message = true
    }

    if (Object.keys(error).length > 0) {
      setInputError(error)
      e.preventDefault()
    }
  }

  return (
    <WrapperDiv className={className} style={style}>
      <StyledForm
        action={Constants.CONTACT.CONTACT_URL}
        method="POST"
        onSubmit={validateForm}
        noValidate
      >
        <NameEmailRowDiv>
          <InputWrapperDiv>
            <InputIconWrapperSpan>
              <StyledFontAwesomeIcon
                icon={faUser}
                color={theme.colors.mainBlack}
              />
            </InputIconWrapperSpan>
            <StyledInput
              type="text"
              name="name"
              placeholder={Constants.CONTACT.PLACEHOLDERS.NAME}
              aria-label={Constants.CONTACT.PLACEHOLDERS.NAME}
              maxLength="40"
              spellCheck="false"
              value={input.name}
              error={inputError.name}
              onChange={handleInputChange}
            />
          </InputWrapperDiv>
          <InputWrapperDiv>
            <InputIconWrapperSpan>
              <StyledFontAwesomeIcon
                icon={faEnvelope}
                color={theme.colors.mainBlack}
              />
            </InputIconWrapperSpan>
            <StyledInput
              type="email"
              name="email"
              placeholder={Constants.CONTACT.PLACEHOLDERS.EMAIL}
              aria-label={Constants.CONTACT.PLACEHOLDERS.EMAIL}
              maxLength="60"
              spellCheck="false"
              value={input.email}
              error={inputError.email}
              onChange={handleInputChange}
            />
          </InputWrapperDiv>
        </NameEmailRowDiv>
        <StyledTextarea
          name="message"
          placeholder={Constants.CONTACT.PLACEHOLDERS.MESSAGE}
          aria-label={Constants.CONTACT.PLACEHOLDERS.MESSAGE}
          maxLength="400"
          value={input.message}
          error={inputError.message}
          onChange={handleInputChange}
        />
        <SubmitButton
          title={Constants.CONTACT.BUTTONS.SEND}
          icon={faPaperPlane}
          iconProps={{ color: theme.colors.mainBlack }}
        />
      </StyledForm>
    </WrapperDiv>
  )
}

export default withTheme(Contact)
