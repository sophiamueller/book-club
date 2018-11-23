import React, { Component } from 'react'

export default class BookForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titel: '',
      author: '',
      genre: '',
      rating: '',

      userData: {
        bookTitel: '',
        authorName: '',
        genreName: '',
        ratingValue: ''
      },
      showFormInput: false
    }
  }

  handleBookTitelChange(event) {
    const bookTitel = event.target.value
    this.setState({
      bookTitel: bookTitel
    })
  }

  handleAuthorNameChange(event) {
    const authorName = event.target.value
    this.setState({
      authorName: authorName
    })
  }

  handleGenreName(event) {
    const genreName = event.target.value
    this.setState({
      genreName: genreName
    })
  }

  handleRatingValueChange(event) {
    const ratingValue = event.target.value
    this.setState({
      ratingValue: ratingValue
    })
  }

  handleFormSubmit(event) {
    this.hideFormInput()
    this.setState({
      userData: {
        bookTitel: this.inputIsEmpty(this.state.bookTitel)
          ? ''
          : this.state.bookTitel,
        authorName: this.inputIsEmpty(this.state.bookTitel)
          ? ''
          : this.state.authorName,
        genreName: this.inputIsEmpty(this.state.genreName)
          ? ''
          : this.state.genreName,
        ratingValuel: this.inputIsEmpty(this.state.ratingValue)
          ? ''
          : this.state.ratingValue
      }
    })
    event.preventDefault()
  }

  inputIsEmpty(input) {
    return input === ''
  }

  displayFormData() {
    this.setState({
      showFormInput: true
    })
  }

  hideFormInput() {
    this.setState({
      showFormInput: false
    })
  }

  render() {
    const displayForm = ''
    if (this.state.showFormInput) {
      const displayFormData = <UserInfoDisplay userData={this.state.userData} />
    }

    return (
      <div className="row">
        <div className="form-container center col-lg-3">
          <h2>React Form</h2>
          {displayForm}
          {displayFormData}
          <form onSubmit={this.handleFormSubmit.bind(this)}>
            <input
              className="form-control"
              type="text"
              name="titel_name"
              value={this.state.bookTitel}
              onChange={this.handleBookTitelChange.bind(this)}
              placeholder="Buchtitel"
            />

            <input
              className="form-control"
              type="text"
              name="author_name"
              value={this.state.authorName}
              onChange={this.handleathorNameChange.bind(this)}
              placeholder="Autor"
            />

            <input
              className="form-control"
              type="text"
              name="genre_name"
              value={this.state.genre}
              onChange={this.handleGenreNameChange.bind(this)}
              placeholder="Genre"
            />

            <input
              className="form-control"
              type="text"
              name="ratingValue"
              value={this.state.rating}
              onChange={this.ratingValue.bind(this)}
              placeholder="Bewertung"
            />
            <div className="form-group">
              <input
                className="btn btn-primary btn-block"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
          <div>
            <button
              className="btn btn-primary btn-block"
              onClick={this.displayFormInput.bind(this)}
            >
              Show saved input
            </button>
          </div>
          {displayFormData}
        </div>
      </div>
    )
  }
}

function UserInfoDisplay(props) {
  return (
    <div className="user-info-display">
      <p>
        <span>{props.userData.bookTitel}</span>,{' '}
        <span>{props.userData.authorName}</span>
      </p>
      <p>
        <span>{props.userData.genreName}</span> |{' '}
        <span>{props.userData.ratingValue}</span>
      </p>
    </div>
  )
}
