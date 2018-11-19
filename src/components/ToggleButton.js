import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
  color: deeppink;
  background: linear-gradient(#eee, #fff, #fff);

  &.active {
    color: white;
    background: deeppink;
  }
`

export default class ToggleButton extends Component {
  state = {
    isDefault: this.props.isDefault == null ? true : this.props.isDefault,
    lastPropsIsDefault: this.props.isDefault
  }

  static getDerivedStateFromProps(props, state) {
    const isTheSame = state.lastPropsIsDefault === props.isDefault

    return isTheSame
      ? null
      : {
          isDefault: props.isDefault,
          lastPropsIsDefault: props.isDefault
        }
  }

  handleToggle = () => {
    this.setState({
      isDefault: !this.state.isDefault
    })
    this.props.onClick()
  }

  render() {
    const { defaultText, alternativeText } = this.props
    const { isDefault } = this.state

    return (
      <Wrapper
        className={isDefault ? '' : 'active'}
        onClick={this.handleToggle}
      >
        {isDefault ? defaultText : alternativeText}
      </Wrapper>
    )
  }
}
