import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faUser } from '@fortawesome/free-solid-svg-icons'

library.add(faBook, faUser)

const Navig = styled.navigation`
  display: flex;

  a:any-link {
    align-items: center;
    background: #add8e6;
    color: #7f7f7f;
    display: flex;
    font-size: 30px;
    justify-content: center;
    text-decoration: none;
    width: 100%;

    &.active {
      color: #0066c3;
    }
  }
`

export default class Navigation extends Component {
  render() {
    return (
      <Navig>
        <NavLink exact activeClassName="active" to="/">
          <FontAwesomeIcon icon="book" />
        </NavLink>
        <NavLink activeClassName="active" to="/readers/">
          <FontAwesomeIcon icon="user" />
        </NavLink>
      </Navig>
    )
  }
}
