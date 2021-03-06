import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import intera from '../components/../images/Interaction Designer.svg'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPastafarianism,
  faBook,
  faUser,
  faPlus,
  faAngleDoubleDown,
  faRocket
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faBook,
  faUser,
  faPlus,
  faPastafarianism,
  faAngleDoubleDown,
  faRocket
)

const Navig = styled.nav`
  display: flex;
  background: black;

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
      color: gray;
      background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
      font-size: 40px;
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
