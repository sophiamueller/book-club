import React, { Component } from 'react'
import styled from 'styled-components'
import InputTitel from './InputTitel'
import Button from './Button'
import { Link } from 'react-router-dom'

const StyledWrapper = styled.div`
  border: 1px solid lightblue;
  border-radius: 15px;
  padding: 20px;
  form {
    display: grid;
    grid-gap: 5px;
    align-items: start;
    justify-content: start;
  }
`

export default class BookSearch extends Component {
  state = {
    titleEl: ''
  }

  render() {
    this.save()

    console.log(this.state)
    return (
      <StyledWrapper>
        <form>
          <InputTitel
            titel="titel"
            placeholder="Buchtitel"
            label="Buchtitel: "
            onChange={this.handleOnChange}
          />
          <Link to={`/searchResults/${this.state.titleEl}`}>
            <Button text="Suchen" />
          </Link>
        </form>
      </StyledWrapper>
    )
  }

  handleOnChange = inputText => {
    this.setState({ titleEl: inputText })
  }

  save() {
    localStorage.setItem(
      'book-club--title-inputs',
      JSON.stringify(this.state.titleEl)
    )
  }
}
