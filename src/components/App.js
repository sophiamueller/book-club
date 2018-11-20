import React, { Component } from 'react'
import styled from 'styled-components'
import InputTitel from './InputTitel'
import BookCard from './BookCard'

export const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 4px 40px;
  grid-auto-rows: 32px;

  input {
    display: flex;
    margin: 0.5em 0 3em 0;
    font-size: 22px;
    caret-color: lightblue;
    color: darkblue;
    width: 80%;
    border: solid lightblue;
    margin: 40px;
    padding: 50px;
    &:focus {
      outline: none;
      box-shadow: 0 0 3px 3px lightblue;
    }
  }
`

export default class App extends Component {
  render() {
    return (
      <Wrapper>
        <InputTitel onEnter={'text'} onClick={'text'} />
        <BookCard />
      </Wrapper>
    )
  }
}
