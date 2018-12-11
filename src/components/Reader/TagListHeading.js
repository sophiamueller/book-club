import React, { Component } from 'react'
import styled from 'styled-components'

const Heading = styled.h4`
  background: #eaeaea;
  border-radius: 5px;
  color: white;
  background: green;
  display: inline-block;
  margin: 5px 10px 5px 0;
  padding: 5px;
  width: 90px;
`

export default class TagListHeading extends Component {
  render() {
    const { text } = this.props
    return <Heading>{text}</Heading>
  }
}
