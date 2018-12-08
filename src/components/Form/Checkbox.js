import React, { Component } from 'react'
//import PropTypes from 'prop-types'

export default class Checkbox extends Component {
  // static propTypes = {
  //     name: PropTypes.string.isRequired,
  //     label: PropTypes.string.isRequired,
  //     onCheck: PropTypes.func.isRequired
  //   }

  constructor(props) {
    super(props)
    this.state = {
      checked: false
    }
  }

  render() {
    const { name, label, onCheck, inputRef, target, displayValue } = this.props

    return (
      <div htmlFor={name}>
        <input
          checked={displayValue}
          type="checkbox"
          target={target}
          ref={inputRef}
          name={name}
          onChange={onCheck}
        />
        {label}
      </div>
    )
  }
}
