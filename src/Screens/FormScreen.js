import React, { Component } from 'react'
import styled from 'styled-components'
import Checkbox from '../components/Form/Checkbox'
import Input from '../components/Form/Input'

const FormInput = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background: whitesmoke;
  box-shadow: 0 8px 16px rgba(0, 40, 100, 0.4);
  border: 0.5px solid gray;
  border-radius: 0.5px;
  overflow-y: scroll;
  background: linear-gradient(150deg, black, gray);
  grid-row: span 3;

  form {
    display: grid;
    grid-gap: 15px;
    padding: 20px;
    height: 100%;
  }
  label {
    display: grid;
    grid-gap: 8px;
  }
  Checkbox {
    display: flex;

    /* display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 2px;
    color: black; */
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial;
    box-sizing: border-box;
    text-align: center;
    transition: all ease 0.5s;
    letter-spacing: 1.5px;
    background: lightgray;
    max-width: 100%;
    height: 35px;
    border: 0.5px solid gray;
    border-radius: 1px;
    padding-left: 15px;
    color: black;
    text-transform: bold;
  }

  button:hover,
  button:focus {
    background: lightgray;
  }

  button:focus {
    outline: 1px solid black;
    outline-offset: -4px;
  }

  button:active {
    transform: scale(0.99);
  }

  textarea {
    height: 100px;
    border: 0.5px solid gray;
    border-radius: 4px;
    font-size: 14px;
    padding-left: 4px;
    background: lightgray;
  }

  textarea:focus {
    background: lightgray;
  }

  input:focus {
    background: white;
  }

  input {
    height: 30px;
    border: 0.5px solid gray;
    border-radius: 4px;
    font-size: 14px;
    padding-left: 4px;
    background: lightgray;
  }

  h2 {
    font-size: 26px;
    color: black;
    margin: 0;
    color: white;
  }

  h3 {
    font-size: 20px;
    font-family: arial;
    color: whitesmoke;
  }

  h6 {
    font-size: 12px;
    font-family: arial;
    color: whitesmoke;
  }

  a {
    color: black;
    text-decoration: none;
  }
`

export default class FormScreen extends React.Component {
  // static propTypes = {
  //   onChange: PropTypes.func.isRequired,
  //   onSubmit: PropTypes.func.isRequired,
  //   preventDefault: PropTypes.func.isRequired
  // }

  // constructor(props) {
  //   super(props)
  //   this.titleInputRef = React.createRef()
  //   this.authorInputRef = React.createRef()
  //   this.genreInputRef = React.createRef()
  //   this.wordsInputRef = React.createRef()
  //   this.descriptionInputRef = React.createRef()
  //   this.ratingInputRef = React.createRef()
  //   this.freeTextInputRef = React.createRef()
  //   this.educationalCheckboxRef = React.createRef()
  //   this.extraterrestialsCheckboxRef = React.createRef()
  //   this.TimeTravelCheckboxRef = React.createRef()
  //   this.philosophicalCheckboxRef = React.createRef()
  //   this.happyEndCheckboxRef = React.createRef()
  // }

  state = {
    title: '',
    author: '',
    genre: '',
    words: '',
    description: '',
    rating: ''
  }

  handleSubmitForm = event => {
    event.preventDefault()
    this.props.onSubmit(this.state)
    // this.titleInputRef.current.value = ''
    // this.authorInputRef.current.value = ''
    // this.genreInputRef.current.value = ''
    // this.wordsInputRef.current.value = ''
    // this.descriptionInputRef.current.value = ''
    // this.ratingInputRef.current.value = ''
    // this.freeTextInputRef.current.value = ''
  }

  render() {
    const {
      onCheck,
      // onChange,
      // preventDefault,
      displayValueCheckboxEducational,
      displayValueCheckboxExtraterrstials,
      displayValueCheckboxTimeTravel,
      displayValueCheckboxPhilosophical,
      displayValueCheckboxHappyEnd
    } = this.props

    return (
      <FormInput>
        <form id="bookCard" onSubmit={this.handleSubmit}>
          <h2>Füge ein neues Buch hinzu:</h2>
          <h3>Fülle alle relevanten Felder aus </h3>
          <Input
            placeholder="Buchtitel"
            name="title"
            type="text"
            onChange={event => this.setState({ title: event.target.value })}
          />
          <Input
            placeholder="Autor"
            name="author"
            type="text"
            onChange={this.handleChange}
            required
          />
          <Input
            placeholder="Genre"
            name="genre"
            type="text"
            onChange={this.handleChange}
            required
          />
          <Input
            placeholder="Wörter"
            name="words"
            type="number"
            onChange={this.handleChange}
            required
          />
          <Input
            placeholder="Buchbeschreibung"
            name="descrition"
            type="text"
            onChange={this.handleChange}
            required
          />
          <Input
            placeholder="Deine Bewertung: 5=sehr gut bis 1=schlecht"
            name="rating"
            type="number"
            onChange={this.handleChange}
            required
          />

          <label>
            <h6>Meinung zum Buch</h6>
            <Input
              placeholder="Schreib deine Meinung hier..."
              name="freeText"
              onChange={this.handleChange}
            />
          </label>

          <Checkbox
            onCheck={onCheck}
            name="educational"
            label="Bildungsroman"
            inputRef={this.educationalCheckboxRef}
            displayValue={displayValueCheckboxEducational}
          />

          <Checkbox
            onCheck={onCheck}
            name="extraterrestials"
            label="außerirdisches Leben"
            inputRef={this.extraterrestialsCheckboxRef}
            displayValue={displayValueCheckboxExtraterrstials}
          />

          <Checkbox
            onCheck={onCheck}
            name="timeTravel"
            label="Zeitreisen"
            inputRef={this.timeTravelCheckboxRef}
            displayValue={displayValueCheckboxTimeTravel}
          />

          <Checkbox
            onCheck={onCheck}
            name="philosophical"
            label="philosophisch"
            inputRef={this.philosophicalCheckboxRef}
            displayValue={displayValueCheckboxPhilosophical}
          />

          <Checkbox
            onCheck={onCheck}
            name="happyEnd"
            label="Happy End"
            inputRef={this.happyEndCheckboxRef}
            displayValue={displayValueCheckboxHappyEnd}
          />

          <button onClick={this.handleSubmitForm} text="Senden">
            Hinzufügen
          </button>
        </form>
      </FormInput>
    )
  }
}
