import React, { Component } from 'react'
import styled from 'styled-components'

const SearchButton = styled.button`
  font-size: 16px;
  background: lightblue;
  color: white;
  border-radius: 5px;
  border: none;
  padding: 1%;
  &:focus {
    outline: none;
    box-shadow: 0 0 2px 2px lightblue;
  }
`

export default class Button extends Component {
  render() {
    return (
      <SearchButton data-cy="Button" onClick={this.props.onClick}>
        {this.props.text}
      </SearchButton>
    )
  }
}
