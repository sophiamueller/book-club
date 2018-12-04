import React, { Component } from 'react'
import uid from 'uid'
import Header from '../components/BookCard/Header'
import BookCardContainer from '../components/BookCard/BookCardContainer'
import BookCard from '../components/BookCard/BookCard'
import BookSearch from '../components/BookSearch'

export default class HomeScreen extends Component {
  state = {
    query: '',
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
      <React.Fragment>
        <Header text={'Bücher'} />
        <BookSearch
          onChange={inputText => this.searchFunction(inputText)}
          suggestions={this.state.books.filter(book => {
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
    const { query, books } = this.state
    return books
      .filter(book => book.title.toLowerCase().startsWith(query.toLowerCase()))
      .sort((a, b) => (a.title < b.title ? -1 : 1))
      .map(this.renderSingleBook)
  }

  searchFunction = inputText => {
    this.setState({ query: inputText })
  }

  renderAllBooks() {
    return this.state.books
      .sort((a, b) => (a.title < b.title ? -1 : 1))
      .map(this.renderSingleBook)
  }

  renderSingleBook = book => (
    <BookCard
      key={book.id}
      {...book}
      onClick={() => this.toggleExpand(book.id)}
    />
  )

  toggleExpand = id => {
    const { books } = this.state
    const index = books.findIndex(g => g.id === id)
    const book = books[index]
    const updatedBooks = [
      ...books.slice(0, index),
      { ...book, isExpanded: !book.isExpanded },
      ...books.slice(index + 1)
    ]
    this.setState({
      books: updatedBooks
    })
  }
}
