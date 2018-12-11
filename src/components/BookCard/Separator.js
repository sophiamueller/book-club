import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  padding: 0 3%;
  max-width: 400px;
  width: 100%;
  margin: auto;
`

const Line = styled.div`
  width: 100%;
  margin: 0.75em 0;
  border-bottom: 5px dotted darkgray;
`

const Text = styled.span`
  color: black;
  white-space: nowrap;
  margin: 0.75em 1em;
  font: bold;
`

export default class Separator extends Component {
  render() {
    return (
      <Wrapper>
        <Line className="left" />
        <Text>{this.props.text}</Text>
        <Line className="right" />
      </Wrapper>
    )
  }
}
