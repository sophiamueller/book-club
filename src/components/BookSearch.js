import React, { Component } from 'react'
import styled from 'styled-components'
import InputTitle from './InputTitle'

import { Link } from 'react-router-dom'

const StyledWrapper = styled.div`
  display: flex;

  form {
    align-items: start;
    padding: 5px;
    justify-content: start;
    margin: 20px;
  }

  input {
    display: flex;
    width: 100%;
    height: 4vh;
    border: 0;
    border-radius: 10px;
    outline: 0;
    padding: 5px;
    transition: all 0.3s ease-in-out;
    margin: 10px;
    font-size: 14px;

    &:focus {
      border-color: darkgreen;
      outline: none;
      box-shadow: 0 0 450px 350px black;
    }
  }
`

export default class BookSearch extends Component {
  state = {
    titleEl: ''
  }

  render() {
    this.save()

    return (
      <StyledWrapper>
        <form>
          <InputTitle
            title="title"
            placeholder="Buchtitel"
            ref={input => (this.search = input)}
            onChange={this.handleOnChange}
          />
          <Link to={`/searchResults/${this.state.titleEl}`} />
        </form>
      </StyledWrapper>
    )
  }

  getInfo = () => {}

  handleOnChange = inputText => {
    this.props.onChange(inputText)
    this.setState({ titleEl: inputText })
  }

  save() {
    localStorage.setItem(
      'book-club--title-inputs',
      JSON.stringify(this.state.titleEl)
    )
  }
}
