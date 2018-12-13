import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.section`
  align-items: center;
  background: #333;
  color: #fefefe;
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5em;
  font-weight: bold;
  justify-content: center;
  width: 100%;
  text-shadow: 1px 1px 2px brown, 0 0 1em black, 0 0 0.2em black;
`

export default class ReaderHeader extends Component {
  static propTypes = {
    text: PropTypes.string
  }
  render() {
    return <Wrapper data-cy="BookHeader">{this.props.text}</Wrapper>
  }
}
