import React, { Component } from 'react'
import styled from 'styled-components'

const FormWrapper = styled.div`
  max-width: 350px;
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
  .checkbox {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 5px;
    color: black;
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
    background: white;
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
    background: white;
  }

  textarea:focus {
    background: white;
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
    background: white;
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

export default class BookForm extends React.Component {
  render() {
    return (
      <FormWrapper>
        <form id="contact" action="" method="post">
          <h2>Füge ein neues Buch hinzu:</h2>
          <h3>Fülle alle relevanten Felder aus </h3>
          <input placeholder="Buchtitel" type="text" required />
          <input placeholder="Autor" type="text" required />
          <input placeholder="Genre" type="text" required />
          <input placeholder="Buchbeschreibung" type="text" required />
          <input
            placeholder="Deine Bewertung: 5=sehr gut bis 1=schlecht"
            type="number"
            required
          />

          <label>
            <h6>Meinung zum Buch</h6>
            <textarea placeholder="Schreib deine Meinung hier..." required />
          </label>
          <button data-submit="...Senden">Hinzufügen</button>
        </form>
      </FormWrapper>
    )
  }
}
