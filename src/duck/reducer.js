import { createReducer } from 'redux-starter-kit'
import initialState from './initialState'

const resetFormValues = state => {
  return {
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

const handleCheck = (state, action) => {
  const { payload } = action
  const { checkBoxChecked, name } = payload
  return {
    ...state,
    creationFormData: [
      {
        ...state.creationFormData,
        [name]: checkBoxChecked
      }
    ]
  }
}

const toggleExpand = (state, action) => {
  const { payload } = action
  const { updatedBooks } = payload
  return {
    ...state,
    books: updatedBooks
  }
}

const handleBookTitelChange = (state, action) => {
  const { payload } = action
  const bookTitel = payload
  return {
    ...state,
    bookTitel
  }
}

const handleAuthorNameChange = (state, action) => {
  const { payload } = action
  const authorName = payload
  return {
    ...state,
    authorName
  }
}

const handleGenreName = (state, action) => {
  const { payload } = action
  const genreName = payload
  return {
    ...state,
    genreName
  }
}

const handleRatingValueChange = (state, action) => {
  const { payload } = action
  const ratingValue = payload
  return {
    ...state,
    ratingValue
  }
}

const handleFormSubmit = state => {
  return {
    ...state,
    userData: {
      bookTitel: inputIsEmpty(state.bookTitel) ? '' : state.bookTitel,
      authorName: inputIsEmpty(state.bookTitel) ? '' : state.authorName,
      genreName: inputIsEmpty(state.genreName) ? '' : state.genreName,
      ratingValuel: inputIsEmpty(state.ratingValue) ? '' : state.ratingValue
    }
  }
}

const displayFormData = state => {
  return {
    ...state,
    showFormInput: true
  }
}

const hideFormInput = state => {
  return {
    ...state,
    showFormInput: true
  }
}

const searchFunction = (state, action) => {
  const { payload } = action
  const { inputText } = payload
  return {
    ...state,
    query: inputText
  }
}

const toggleExpand = (state, action) => {
  const id = action.payload
  const { books } = state
  const index = books.findIndex(g => g.id === id)
  const book = books[index]
  const updatedBooks = [
    ...books.slice(0, index),
    { ...book, isExpanded: !book.isExpanded },
    ...books.slice(index + 1)
  ]
  return {
    ...state,
    books: updatedBooks
  }
}

function inputIsEmpty(input) {
  return input === ''
}

export default createReducer(initialState, {
  handleCheck,
  resetFormValues,
  toggleExpand,
  handleBookTitelChange,
  handleAuthorNameChange,
  handleGenreName,
  handleRatingValueChange,
  handleFormSubmit,
  displayFormData,
  hideFormInput,
  searchFunction
})
