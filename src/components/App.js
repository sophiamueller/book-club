import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import HomeScreen from '../Screens/HomeScreen'
import ReaderScreen from '../Screens/ReaderScreen'
import Navigation from './Navigation'
import imgSrc from '.././images/silver-955496_1280.jpg'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 65px 95px auto 60px;
  height: 100vh;
  background: darkgray;
  background-image: url(${imgSrc});
`

export default class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Route exact path="/" render={() => <HomeScreen />} />
          <Route path="/readers" render={() => <ReaderScreen />} />
          <Navigation />
        </Wrapper>
      </Router>
    )
  }
}
