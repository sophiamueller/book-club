import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import BookCard from './BookCard'
import BookSearch from './BookSearch'

export const Wrapper = styled.section`
  display: grid;
  grid-template-rows: auto;

  input {
    display: flex;
    margin-left: 20px;
    margin-right: 20px;
    font-size: 22px;
    caret-color: lightblue;
    color: darkblue;
    width: 80%;
    border: solid lightblue;
    margin: 40px;
    padding: 50px;
    border-radius: 15px;
    padding: 20px;

    &:focus {
      outline: none;
      box-shadow: 0 0 3px 3px lightblue;
    }
  }
`

export default class App extends Component {
  state = {
    demoBooks: [
      {
        id: '1',
        titel: 'Time Machine',
        author: 'Wells',
        genre: 'Soft SciFi',
        description: 'lorem lorem lorem ipsum ipsum ',
        rating: '7 points'
      },
      {
        id: '2',
        titel: 'Roter Stern',
        author: 'Bauer',
        genre: 'Hard SciFi',
        description: 'lorem lorem lorem ipsum ipsum ',
        rating: '4 points'
      },
      {
        id: '3',
        titel: 'Zweite Mondlandung',
        author: 'Fritz',
        genre: 'Soft SciFi',
        description: 'lorem lorem lorem ipsum ipsum ',
        rating: '6 points'
      },
      {
        id: '4',
        titel: 'Nachkommen der Sterne',
        author: 'Hausinger',
        genre: 'Soft SciFi',
        description: 'lorem lorem lorem ipsum ipsum ',
        rating: '9 points'
      }
    ]
  }

  render() {
    return (
      <Router>
        <Wrapper data-cy="Separator">
          <Route path="/" exact render={() => <BookSearch />} />
          <Route
            path="/searchResults/:query"
            exact
            render={({ match }) => this.renderSearchResults(match.params.query)}
          />
          <nav>
            <NavLink data-cy="NavLink" to="/search">
              Book Search
            </NavLink>
          </nav>
        </Wrapper>
      </Router>
    )
  }

  renderSearchResults = query => {
    const { demoBooks } = this.state

    console.log(query)

    return demoBooks
      .filter(book => book.titel === query)
      .map(this.renderBookCard)
  }

  renderBookCard = book => {
    const { author, description, genre, isbn, rating, titel, id } = book

    return (
      <BookCard
        key={id}
        titel={titel}
        author={author}
        genre={genre}
        rating={rating}
        isbn={isbn}
        description={description}
      />
    )
  }
}

/*
this.state.books.map(bookInfo => {
  return <BookCard titel={bookInfo.title} />
})
*/
