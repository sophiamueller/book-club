import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  align-items: center;
`

const Line = styled.div`
  width: 100%;
  margin: 0.75em 0;
  border-bottom: 1px solid black;
  &.left {
    margin-left: 80px;
  }
  &.right {
    margin-right: 80px;
  }
`

const Text = styled.span`
  color: black;
  white-space: nowrap;
  margin: 0.75em 1em;
`

export default class Separator extends Component {
  render() {
    return (
      <Wrapper>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ipsa,
        nisi et possimus porro iusto temporibus libero, dolor facere maxime
        nulla ab incidunt dolorem eum quos rem assumenda vel quis?
        <Line className="left" />
        <Text>{this.props.text}</Text>
        <Line className="right" />
      </Wrapper>
    )
  }
}
