import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import styled from 'styled-components'

library.add(faHeart)

const Heart = styled.div`
  display: flex;
  align-items: right;
  color: grey;
  grid-area: bookmark;

  &.marked {
    color: black;
  }
`

export default class Bookmark extends Component {
  render() {
    return (
      <Heart
        className={this.props.marked ? 'marked' : ''}
        onClick={this.props.handleOnClick}
      >
        <FontAwesomeIcon icon="heart" />
      </Heart>
    )
  }
}
