import React, { Component } from 'react'
import styled from 'styled-components'

const CardWrapper = styled.section`
  margin: 30px 0;
  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #e0f3f9;
    border-radius: 8px;
    margin: 10px 3px;
  }
`

export default class CardHead extends Component {
  render() {
    const { titel, author, genre, rating, isbn, description } = this.props
    console.log(this.props)
    return (
      <CardWrapper>
        <h3> {titel} </h3>
        <div>
          <span> Autor: {author} </span>
        </div>
        <div>
          <span> Genere: {genre} </span>
        </div>
        <div>
          <span> Bewertung: {rating}</span>
        </div>
        <div>
          <span> ISBN Nr.: {isbn} </span>
        </div>
        <div>
          <span> Beschreibung: {description} </span>
        </div>
      </CardWrapper>
    )
  }
}
