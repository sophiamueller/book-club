import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import uid from 'uid'
import HomeScreen from '../Screens/HomeScreen'
import ReaderScreen from '../Screens/ReaderScreen'
import FormScreen from '../Screens/FormScreen'
import Navigation from './Navigation'
import imgSrc from '.././images/decorative-1801432_1280.png'
import { postBooks } from '../services/books'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 65px auto 60px;
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
        happyEnd: true
        // readers: [
        //   {
        //     id: uid(),
        //     name: 'Arne',
        //     likesBook: false,
        //     ownsBook: true,
        //     educationalBook: true
        //   },
        //   {
        //     id: uid(),
        //     name: 'Emilia',
        //     likesBook: false,
        //     ownsBook: true
        //   },
        //   {
        //     id: uid(),
        //     name: 'Lieselotte',
        //     likesBook: true,
        //     ownsBook: true
        //   },
        //   {
        //     id: uid(),
        //     name: 'Karl',
        //     likesBook: true,
        //     ownsBook: false
        //   },
        //   {
        //     id: uid(),
        //     name: 'Maria',
        //     likesBook: true,
        //     ownsBook: true
        //   },
        //   {
        //     id: uid(),
        //     name: 'Sophia',
        //     likesBook: false,
        //     ownsBook: false
        //   },
        //   {
        //     id: uid(),
        //     name: 'Monika',
        //     likesBook: true,
        //     ownsBook: true
        //   },
        //   {
        //     id: uid(),
        //     name: 'Michael',
        //     likesBook: false,
        //     ownsBook: false
        //   },
        //   {
        //     id: uid(),
        //     name: 'Elke',
        //     likesBook: false,
        //     ownsBook: true
        //   },
        //   {
        //     id: uid(),
        //     name: 'Eckhart',
        //     likesBook: false,
        //     ownsBook: false
        //   },
        //   {
        //     id: uid(),
        //     name: 'Rosalinde',
        //     likesBook: false,
        //     ownsBook: true
        //   }
        // ]
      },
      {
        id: uid(),
        title: 'The Secret of the Ninth Planet',
        imgScr:
          'https://images-eu.ssl-images-amazon.com/images/I/41ZRcMdC0%2BL.jpg',
        author: ' Donald Wollheim',
        genre: 'Soft SciFi',
        words: '280',
        description:
          'While the circumnavigation of the solar system seems farfetched, it may not be once the problem of effective anti-gravitational control is solved. In this book I have assumed that the many researchers now actually at work on this problem will achieve such a result in the next decade. It is not at all impossible that they may—for we all know that the more minds that work at a problem, the sooner it will be solved. ',
        freeText:
          'Das Buch hatte ich vor knapp 50 Jahren zum Geburtstag geschenkt bekommen. Es ist somit natürlich ein Nostalgiekauf, aber das Buch empfehle ich dennoch, da es die Sehnsucht nach Abenteuer, Weite, Forscherdrang und Zusammenarbeit trotz Andersartigkeit vermittelt. Für mich war es der Startpunkt in viele, viele spätere Science Fiction Bücher mit bleibender Aussagekraft wie Alexander Bogdanows "Der Rote Planet"von 1908. Gefällt: @startdust',
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
        marked: false,
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

    postBooks(newBook)
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

  toggleBookmark = id => {
    const { books } = this.state
    const index = books.findIndex(g => g.id === id)
    const book = books[index]
    const updatedBooks = [
      ...books.slice(0, index),
      { ...book, marked: !book.marked },
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
                toggleBookmark={this.toggleBookmark}
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
