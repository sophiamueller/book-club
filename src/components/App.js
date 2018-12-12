import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import uid from 'uid'
import HomeScreen from '../Screens/HomeScreen'
import ReaderScreen from '../Screens/ReaderScreen'
import FormScreen from '../Screens/FormScreen'
import Navigation from './Navigation'
import { configureStore } from 'redux-starter-kit'
import reducer from '../duck/reducer'
import imgSrc from '.././images/trees-3464777_1280.jpg'
import { postBooks } from '../services/books'
import * as Actions from '../duck/actions'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 65px auto 60px;
  height: 100vh;
  background: darkgray;
  background-image: url(${imgSrc});
`
const store = configureStore({ reducer })

export default class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  render() {
    const state = store.getState()
  }

  resetFormValues = () => {
    store.dispatch(Actions.resetFormValues())
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
    const name = event.target.name
    this.setState({
      creationFormData: {
        ...this.state.creationFormData,
        [name]: checkBoxChecked
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
    //store.dispatch(toggleExpand(id))
    //actions importieren
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
