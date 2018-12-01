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

    console.log(this.props.suggestions)
    return (
      <StyledWrapper>
        <form>
          <InputTitel
            titel="titel"
            placeholder="Buchtitel"
            label="Buchtitel: "
            ref={input => (this.search = input)}
            onChange={this.handleOnChange}
          />
          <ul>
            {this.props.suggestions.map(book => (
              <li>{book.titel}</li>
            ))}
          </ul>
          <Link to={`/searchResults/${this.state.titleEl}`}>
            <Button text="Suchen" />
          </Link>
        </form>
      </StyledWrapper>
    )
  }

  getInfo = () => {}

  handleOnChange = inputText => {
    this.props.onChange(inputText)
    this.setState({ titleEl: inputText })
  }

  // handleOnChange = () => {
  //   console.log(this.search)
  //   this.props.onChange(this.search.value)
  //   this.setState(
  //     {
  //       titleEl: this.search.value
  //     },
  //     () => {
  //       if (this.state.titleEl && this.state.titleEl.length > 1) {
  //         if (this.state.titleEl.length % 2 === 0) {
  //           this.getInfo()
  //         }
  //       }
  //     }
  //   )
  // }

  save() {
    localStorage.setItem(
      'book-club--title-inputs',
      JSON.stringify(this.state.titleEl)
    )
  }
}
