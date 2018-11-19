import React, { Component } from 'react'

import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  padding: 0 20px;
  background: linear-gradient(#ddd, #efefef, #eee);

  .done {
    text-decoration: line-through;
  }
`

export default class Todo extends Component {
  render() {
    const { text, onToggle, onDelete, done } = this.props

    return (
      <Wrapper>
        <span className={done ? 'done' : ''} onClick={onToggle}>
          {text}
        </span>{' '}
        <span onClick={onDelete}>&times;</span>
      </Wrapper>
    )
  }
}
