import React, { Component } from 'react'
import uid from 'uid'
import Header from './Header'
import BookCardContainer from './BookCardContainer'
import BookCard from './BookCard'

export default class HomeScreen extends Component {
  state = {
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
        <BookCardContainer>{this.renderAllBooks()}</BookCardContainer>
      </React.Fragment>
    )
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
