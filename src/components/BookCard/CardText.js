import React, { Component } from 'react'
import styled from 'styled-components'

const SectionWrapper = styled.section`
  display: flex;
  margin: 20px 0;
`

export default class CardText extends Component {
  render() {
    const { TextInfo } = this.props
    return <SectionWrapper>{TextInfo}</SectionWrapper>
  }
}
