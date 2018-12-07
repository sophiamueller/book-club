import React, { Component } from 'react'
//import PropTypes from 'prop-types'

export default class Checkbox extends Component {
  // static propTypes = {
  //     name: PropTypes.string.isRequired,
  //     label: PropTypes.string.isRequired,
  //     onCheck: PropTypes.func.isRequired
  //   }

  render() {
    const { name, label, onCheck, inputRef, displayValue } = this.props

    return (
      <div htmlFor={name}>
        <input
          type="checkbox"
          ref={inputRef}
          name={name}
          onChange={onCheck}
          checked={displayValue}
        />
        {label}
      </div>
    )
  }
}
