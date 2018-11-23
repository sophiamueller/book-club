import React, { Component } from 'react'
import styled from 'styled-components'
import CardHead from './CardHead'
import CardText from './CardText'
import Separator from './Separator'

const BookCardWrapper = styled.main`
  border: 3px solid lightblue;
  border-radius: 15px;
  padding: 20px;
  display: grid;
  margin-left: 10px;
  margin-right: 10px;
`

export default class BookCard extends Component {
  render() {
    const { author, genre, rating, isbn, description, textInfo } = this.props

    return (
      <BookCardWrapper>
        <CardHead
          author={author}
          genre={genre}
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
