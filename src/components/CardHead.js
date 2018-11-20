import React, { Component } from 'react'
import styled from 'styled-components'

const CardWrapper = styled.section`
  margin: 30px 0;
  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: lightblue;
  }
`

export default class CardHead extends Component {
  render() {
    const { titel, autor, genere, rating, isbn, description } = this.props

    return (
      <CardWrapper>
        <h3> {titel} </h3>
        <div>
          <span> Autor: {autor} </span>
        </div>
        <div>
          <span> Genere: {genere} </span>
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
