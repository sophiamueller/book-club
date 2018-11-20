import React, { Component } from 'react'

export default class Input extends Component {
  handleClickEvent = event => {
    const input = event.target ? event.key === 'Enter' : event.key === 'click'
    this.props.onEnter(input.value)
    this.props.onClick(input.value)
    input.value = ''
    input.focus()
  }
  render() {
    return (
      <input
        onKeyUp={this.handleKeyUp}
        onClick={this.handleOnKlick}
        placeholder="Add book"
      />
    )
  }
}
