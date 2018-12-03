import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faUser } from '@fortawesome/free-solid-svg-icons'

library.add(faBook, faUser)

const Navig = styled.nav`
  display: flex;

  a:any-link {
    align-items: center;
    background: 0;
    color: white;
    display: flex;
    font-size: 30px;
    justify-content: center;
    text-decoration: none;
    width: 100%;

    &.active {
      color: brown;
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
