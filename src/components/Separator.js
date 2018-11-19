import React, { Component } from 'react'

import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  background: ${props => props.background || 'white'};
`

const Text = styled.span`
  white-space: nowrap;
`

const Line = styled.div`
  width: 100%;
  margin: 0 10px;
  border-bottom: ${props => props.width || 4}px solid deeppink;
`

export default class Separator extends Component {
  render() {
    return (
      <Wrapper>
        <Line width={2} />
        <Text>{this.props.text}</Text>
        <Line width={2} />
      </Wrapper>
    )
  }
}
