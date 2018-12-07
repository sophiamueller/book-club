import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Input extends Component {
  //   static propTypes = {
  //     name: PropTypes.string.isRequired,
  //     label: PropTypes.string,
  //     onChange: PropTypes.func.isRequired,
  //     placeholder: PropTypes.string
  //   }

  render() {
    const { name, placeholder, label, onChange, inputRef } = this.props

    return (
      <label htmlFor={name}>
        {label}
        <input
          ref={inputRef}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
        />
      </label>
    )
  }
}
