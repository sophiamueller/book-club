import React, { Component } from 'react'
import Header from '../components/BookCard/Header'
import BookCardContainer from '../components/BookCard/BookCardContainer'
import BookCard from '../components/BookCard/BookCard'
import BookSearch from '../components/BookSearch'

export default class HomeScreen extends Component {
  state = {
    query: ''
  }

  render() {
    return (
      <React.Fragment>
        <Header text={'Bücher'} />
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
    console.log(this.props.books)
    return this.props.books
      .sort((a, b) => (a.title < b.title ? -1 : 1))
      .map(this.renderSingleBook)
  }

  renderSingleBook = book => (
    <BookCard
      key={book.id}
      data={book}
      onClick={() => this.props.toggleExpand(book.id)}
    />
  )
}
