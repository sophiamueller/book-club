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
    value: ''
  }

  render() {
    console.log(this.state)
    return (
      <StyledWrapper>
        <form>
          <InputTitel
            titel="titel"
            placeholder="Buchtitel"
            label="Buchtitel: "
            onChange={value => this.setState({ value })}
          />
          <Link to={`/searchResults/${this.state.value}`}>
            <Button text="Suchen" />
          </Link>
        </form>
      </StyledWrapper>
    )
  }
}
