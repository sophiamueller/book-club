import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import uid from 'uid'

import HomeScreen from '../Screens/HomeScreen'
import ReaderScreen from '../Screens/ReaderScreen'
import FormScreen from '../Screens/FormScreen'

import Navigation from './Navigation'
import imgSrc from '.././images/decorative-1801432_1280.png'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 65px 30px auto 60px;
  height: 100vh;
  background: darkgray;
  background-image: url(${imgSrc});
`

export default class App extends Component {
  state = {
    newBook: {},
    books: [
      {
        id: uid(),
        title: 'The Time Machine',
        imgScr:
          'https://images-na.ssl-images-amazon.com/images/I/41rHveknzrL.jpg',
        author: 'H. G. Wells',
        genre: 'Soft SciFi',
        words: '160',
        educational: true,
        extraterrestrials: false,
        timeTravel: false,
        philosophical: true,
        happyEnd: true,
        readers: [
          {
            id: uid(),
            name: 'Arne',
            likesBook: false,
            ownsBook: true,
            educationalBook: true
          },
          {
            id: uid(),
            name: 'Emilia',
            likesBook: false,
            ownsBook: true
          },
          {
            id: uid(),
            name: 'Lieselotte',
            likesBook: true,
            ownsBook: true
          },
          {
            id: uid(),
            name: 'Karl',
            likesBook: true,
            ownsBook: false
          },
          {
            id: uid(),
            name: 'Maria',
            likesBook: true,
            ownsBook: true
          },
          {
            id: uid(),
            name: 'Sophia',
            likesBook: false,
            ownsBook: false
          },
          {
            id: uid(),
            name: 'Monika',
            likesBook: true,
            ownsBook: true
          },
          {
            id: uid(),
            name: 'Michael',
            likesBook: false,
            ownsBook: false
          },
          {
            id: uid(),
            name: 'Elke',
            likesBook: false,
            ownsBook: true
          },
          {
            id: uid(),
            name: 'Eckhart',
            likesBook: false,
            ownsBook: false
          },
          {
            id: uid(),
            name: 'Rosalinde',
            likesBook: false,
            ownsBook: true
          }
        ]
      },
      {
        id: uid(),
        title: 'Zweite Mondlandung',
        imgScr:
          'https://images-na.ssl-images-amazon.com/images/I/41rHveknzrL.jpg',
        author: 'fritz',
        genre: 'Soft SciFi',
        words: '160',
        educational: true,
        extraterrestrials: false,
        timeTravel: false,
        philosophical: false,
        happyEnd: false,
        readers: []
      },
      {
        id: uid(),
        title: 'Roter Stern',
        imgScr:
          'https://images-na.ssl-images-amazon.com/images/I/41rHveknzrL.jpg',
        author: 'Bauer',
        genre: 'Hard SciFi',
        words: '160',
        educational: false,
        extraterrestrials: true,
        timeTravel: true,
        philosophical: true,
        happyEnd: true,
        readers: []
      }
    ]
  }

  render() {
    return (
      <Router>
        <Wrapper>
          <Route
            exact
            path="/"
            render={() => <HomeScreen books={this.state.books} />}
          />
          <Route path="/readers" render={() => <ReaderScreen />} />
          <Route
            path="/form"
            render={() => (
              <FormScreen
                onSubmit={bookObj => this.setState({ newBook: bookObj })}
              />
            )}
          />
          <Navigation />
        </Wrapper>
      </Router>
    )
  }
}
