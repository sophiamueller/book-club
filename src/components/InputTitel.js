import React, { Component } from 'react'
import styled from 'styled-components'

const InputField = styled.input`
  margin: 0.5em 0 1em 0;
  font-size: 16px;
  padding: 1%;
  border: none;
  &:focus {
    outline: none;
    box-shadow: 0 0 2px 2px darkblue;
  }
`

export default class InputTitel extends Component {
  render() {
    const { titel, placeholder, label, onChange } = this.props
    return (
      <label htmlFor={titel}>
        {label}
        <InputField
          data-cy="InputTitle"
          ref="inputTitle"
          titel={titel}
          placeholder={placeholder}
          onChange={event => onChange(event.target.value)}
        />
      </label>
    )
  }
}
