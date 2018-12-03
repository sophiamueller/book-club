import React, { Component } from 'react'
import styled from 'styled-components'
import InputTitle from './InputTitle'

import { Link } from 'react-router-dom'

const StyledWrapper = styled.div`
  display: flex;
  height: 20px;
  padding: 20px;
  form {
    align-items: start;
    padding: 5px;
    justify-content: start;
    }

    input {
      display: flex;
      width: 100%;
      border: 0;
      outline: 0;
      padding: 0;
      transition: all 0.3s ease-in-out;
      border-bottom: 2px solid darkgreen;

      /* margin-left: 10px;
      margin-right: 20px;
      font-size: 22px;
      caret-color: black;
      color: darkgreen;
      width: 70%;
      border: 0.5px solid black;
      margin: 40px;
      padding: 50px;
      border-radius: 10px;
      padding: 20px; */

      &:focus {
        border-color: darkgreen;
        outline: none;
        box-shadow: 0 0 250px 250px whitesmoke; 
      }
    }
  }
`

export default class BookSearch extends Component {
  state = {
    titleEl: ''
  }

  render() {
    this.save()

    console.log(this.props.suggestions)
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
