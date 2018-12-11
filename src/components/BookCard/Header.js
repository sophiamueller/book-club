import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import imgSrc from '../../images/silver-955496_1280.jpg'

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
  background: url(${imgSrc});
`

export default class Header extends Component {
  static propTypes = {
    text: PropTypes.string
  }
  render() {
    return <Wrapper data-cy="Header">{this.props.text}</Wrapper>
  }
}
