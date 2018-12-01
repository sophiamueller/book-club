import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import HomeScreen from './HomeScreen'
import SearchScreen from './SearchScreen'
import Navigation from './Navigation'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 60px auto 60px;
  height: 100vh;
`

export default class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Route exact path="/" render={() => <HomeScreen />} />
          <Route path="/booksearch/" render={() => <SearchScreen />} />
          <Navigation />
        </Wrapper>
      </Router>
    )
  }
}
