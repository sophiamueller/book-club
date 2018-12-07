import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPastafarianism,
  faBook,
  faUser,
  faPlus
} from '@fortawesome/free-solid-svg-icons'

library.add(faBook, faUser, faPlus, faPastafarianism)

const Navig = styled.nav`
  display: flex;
  background: black;
  grid-row: 4;

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
          <FontAwesomeIcon icon="pastafarianism" />
        </NavLink>
        <NavLink activeClassName="active" to="/readers/">
          <FontAwesomeIcon icon="user" />
        </NavLink>
        <NavLink activeClassName="active" to="/form/">
          <FontAwesomeIcon icon="book" />
        </NavLink>
      </Navig>
    )
  }
}
