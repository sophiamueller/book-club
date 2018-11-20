import React, { Component } from 'react'
import styled from 'styled-components'
import Input from './Input'

export const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 4px 40px;
  grid-auto-rows: 32px;

  input {
    display: flex;
    width: 250px;
    height: 30px;
    margin: 50px;
    padding: 25px;
    background-color: deeppink;
  }
`

export default class App extends Component {
  render() {
    return (
      <Wrapper>
        <Input onEnter={'text'} onClick={'text'} />
      </Wrapper>
    )
  }
}
