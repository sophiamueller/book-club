import React, { Component } from 'react'
import styled from 'styled-components'
import CardHead from './CardHead'
import CardText from './CardText'
import Separator from './Separator'

export default class BookCard extends Component {
  render() {
    const BookCardWrapper = styled.main`
      display: grid;
      justify-content: center;
      border: 1px solid darkblue;
      border-radius: 10px;
      padding: 100px;
    `
    const { autor, genere, rating, isbn, description, textInfo } = this.props

    return (
      <BookCardWrapper>
        <CardHead
          autor={autor}
          genere={genere}
          rating={rating}
          isbn={isbn}
          description={description}
        />
        <CardText textInfo={textInfo} />

        <Separator text="Kommentar" />
        <CardText textInfo={textInfo} />
      </BookCardWrapper>
    )
  }
}
