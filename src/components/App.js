import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import uid from 'uid'
import HomeScreen from '../Screens/HomeScreen'
import ReaderScreen from '../Screens/ReaderScreen'
import FormScreen from '../Screens/FormScreen'
import Navigation from './Navigation'
import imgSrc from '.././images/decorative-1801432_1280.png'
import { getBook, postBook, deletebook, patchBook } from '../services/books'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 65px 30px auto 60px;
  height: 100vh;
  background: darkgray;
  background-image: url(${imgSrc});
`

export default class App extends Component {
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
        readers: [
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
          }
        ]
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
        readers: [
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
          }
        ]
      }
    ],
    creationFormData: {
      title: '',
      author: '',
      genre: '',
      words: '',
      description: '',
      rating: '',
      educational: false,
      extraterrestrials: false,
      timeTravel: false,
      philosophical: false,
      happyEnd: false
    }
  }

  resetFormValues = () => {
    this.setState({
      title: '',
      author: '',
      genre: '',
      words: '',
      description: '',
      rating: '',
      educational: false,
      extraterrestrials: false,
      timeTravel: false,
      philosophical: false,
      happyEnd: false
    })
  }

  addNewBook = () => {
    const newBook = this.state.creationFormData

    postBook(newBook)
      .then(newBook => {
        this.setState({
          books: [newBook, ...this.state.books]
        })
      })
      .then(this.resetFormValues)
  }

  renderBookData = () => {
    return this.state.books
  }

  handleChange = event => {
    this.setState({
      creationFormData: {
        ...this.state.creationFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  handleCheck = event => {
    const checkBoxChecked = event.target.checked ? true : false

    this.setState({
      creationFormData: {
        ...this.state.creationFormData,
        [event.target.name]: checkBoxChecked
      }
    })
  }

  SaveToLocalStorage = () => {
    localStorage.setItem(
      'book-club',
      JSON.stringify(this.state.creationFormData)
    )
  }

  loadFromLocalStorage() {
    try {
      return JSON.parse(localStorage.getItem('book-club'))
    } catch (err) {
      console.log(err)
    }
  }

  toggleExpand = id => {
    const { books } = this.props
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

  render() {
    return (
      <Router>
        <Wrapper>
          <Route
            exact
            path="/"
            render={() => (
              <HomeScreen
                books={this.state.books}
                toggleExpand={this.toggleExpand}
              />
            )}
          />
          <Route path="/readers" render={() => <ReaderScreen />} />
          <Route
            path="/form"
            render={() => (
              <FormScreen
                newBook={this.addNewBook}
                onChange={this.handleChange}
                onCheck={this.handleCheck}
                displayValueCheckboxEducational={
                  this.state.creationFormData.eductional
                }
                resetFormValues={this.resetFormValues}
              />
            )}
          />
          <Navigation />
        </Wrapper>
      </Router>
    )
  }
}
