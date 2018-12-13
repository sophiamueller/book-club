import React, { Component } from 'react'
import styled from 'styled-components'
import InputTitle from './InputTitle'
import { ZoomIn } from 'animate-css-styled-components'
import { Link } from 'react-router-dom'

const StyledWrapper = styled.div`
  display: flex;

  form {
    align-items: center;
    padding: 5px;
    justify-content: center;
    margin: 20px;
  }

  input {
    width: 100%;
    height: 4vh;
    border: 0;
    border-radius: 10px;
    outline: 0;
    padding: 5px;
    transition: all 0.3s ease-in-out;
    margin: 55px;
    font-size: 12px;

    &:focus {
      border-color: darkgreen;
      outline: none;
      box-shadow: 0 0 45px 40px white;
      z-index: -1;
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
        <ZoomIn duration="0.9s" delay="0.2s">
          <form>
            <InputTitle
              title="title"
              placeholder="Licht an!  Finde deinen SciFi Buchtitel"
              ref={input => (this.search = input)}
              onChange={this.handleOnChange}
            />
            <Link to={`/searchResults/${this.state.titleEl}`} />
          </form>
        </ZoomIn>
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
