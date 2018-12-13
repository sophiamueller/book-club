import React, { Component } from 'react'
import Header from '../components/BookCard/Header'
import BookCardContainer from '../components/BookCard/BookCardContainer'
import BookCard from '../components/BookCard/BookCard'
import BookSearch from '../components/BookSearch'
import styled from 'styled-components'

const Scroller = styled.div`
  overflow-y: scroll;
`

export default class HomeScreen extends Component {
  state = {
    query: ''
  }

  render() {
    return (
      <React.Fragment>
        <Header text={'~ Book Club ~'} />
        <Scroller>
          <BookSearch
            onChange={inputText => this.searchFunction(inputText)}
            suggestions={this.props.books.filter(book => {
              return book.title
                .toLowerCase()
                .includes(this.state.query.toLowerCase())
            })}
          />
          <BookCardContainer>
            {this.state.query
              ? this.renderSearchResults()
              : this.renderAllBooks()}
          </BookCardContainer>
        </Scroller>
      </React.Fragment>
    )
  }

  renderSearchResults = () => {
    const { query } = this.state
    return this.props.books
      .filter(book => book.title.toLowerCase().startsWith(query.toLowerCase()))
      .sort((a, b) => (a.title < b.title ? -1 : 1))
      .map(this.renderSingleBook)
  }

  searchFunction = inputText => {
    this.setState({ query: inputText })
  }

  renderAllBooks() {
    return this.props.books
      .sort((a, b) => (a.title < b.title ? -1 : 1))
      .map(this.renderSingleBook)
  }

  renderSingleBook = book => (
    <BookCard
      key={book.id}
      data={book}
      onToggleClick={() => this.props.toggleExpand(book.id)}
      onBookmarkClick={() => this.props.toggleBookmark(book.id)}
      marked={book.marked}
    />
  )
}
