import React, { Component } from 'react'
import styled from 'styled-components'
import InputTitel from './InputTitel'
import Button from './Button'
import { Link } from 'react-router-dom'

const StyledWrapper = styled.div`
  display: flex;
  border: 1px solid lightblue;
  border-radius: 15px;
  padding: 20px;
  form {
    grid-gap: 5px;
    align-items: start;
    padding: 5px;
    justify-content: start;

    input {
      display: flex;
      margin-left: 20px;
      margin-right: 20px;
      font-size: 22px;
      caret-color: black;
      color: darkgreen;
      width: 70%;
      border: solid black;
      margin: 40px;
      padding: 50px;
      border-radius: 15px;
      padding: 20px;

      &:focus {
        outline: none;
        box-shadow: 0 0 3px 3px darkgreen;
      }
    }
  }
`

export default class BookSearch extends Component {
  state = {
    titleEl: ''
  }

  render() {
    //this.save()

    console.log(this.props.suggestions)
    return (
      <StyledWrapper>
        <form>
          <InputTitel
            title="title"
            placeholder="Buchtitel"
            label="Buchtitel: "
            ref={input => (this.search = input)}
            onChange={this.handleOnChange}
          />
          <ul>
            {this.props.suggestions.map(book => (
              <li>{book.title}</li>
            ))}
          </ul>
          {/* <Link to={`/searchResults/${this.state.titleEl}`}>
            <Button text="Suchen" />
          </Link> */}
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
