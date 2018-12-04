import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

import ToggleIcon from './ToggleIcon'
import Separator from '../BookCard/Separator'
import TagListHeading from './TagListHeading'
import TagStyle from './TagStyle'
import CardContent from '../BookCard/CardContent'
import CollapsedCard from '../BookCard/CollapsedCard'

const ImageContainer = styled.div`
  grid-row-start: span 2;
  height: 80px;
  width: 80px;
`

const Image = styled.img`
  border-radius: 50%;
  height: 100%;
  object-fit: cover;
  width: 100%;
`

const Username = styled.span`
  color: black;
  display: flex;
  font-size: 14px;
`

const Title = styled.h2`
  align-self: flex-end;
  display: flex;
  font-family: Arial;
  grid-column-start: span 2;
  margin: 0;
`

export default class ReaderCard extends Component {
  static propTypes = {
    name: PropTypes.string,
    imgScr: PropTypes.string,
    userName: PropTypes.string,
    isExpanded: PropTypes.bool,
    onClick: PropTypes.func,
    books: PropTypes.array
  }

  static defaultProps = {
    imgScr: 'https://images-na.ssl-images-amazon.com/images/I/41rHveknzrL.jpg'
  }

  render() {
    const { name, imgScr, userName, isExpanded, onClick } = this.props
    return (
      <section data-cy="ReaderCard">
        <CardContent>
          <ImageContainer>
            <Image src={imgScr} alt="" />
          </ImageContainer>
          <Title>{name}</Title>
          <ToggleIcon
            data-cy="Toggle"
            onClick={onClick}
            className={isExpanded ? 'rotate' : ''}
          >
            <FontAwesomeIcon icon="angle-down" />
          </ToggleIcon>
          <Username>{userName}</Username>
          <CollapsedCard
            data-cy="ExpandContent"
            className={isExpanded ? 'expand' : ''}
          >
            <Separator />
            <TagListHeading text="Ich suche nach neuem Lesestoff" />
            <TagStyle>
              {this.countSelectedBooks('mag ich') >= 1 ? (
                this.renderLikedBooks()
              ) : (
                <span>Es wurden keine Bücher ausgewählt</span>
              )}
            </TagStyle>
            <TagListHeading text="hab ich!" />
            <TagStyle>
              {this.countSelectedBooks('hab ich') >= 1 ? (
                this.renderOwnedBooks()
              ) : (
                <span>Es wurden keine Bücher ausgewählt</span>
              )}
            </TagStyle>
          </CollapsedCard>
        </CardContent>
      </section>
    )
  }

  countSelectedBooks = criteria => {
    if (criteria === 'mag ich') {
      return this.props.books.filter(g => g.likedByReader).length
    } else if (criteria === 'hab ich') {
      return this.props.books.filter(g => g.ownedByReader).length
    } else {
      return 0
    }
  }

  renderLikedBooks = () => {
    return this.props.books
      .filter(g => g.likedByReader)
      .sort((a, b) => (a.title < b.title ? -1 : 1))
      .map(this.renderSingleBook)
  }

  renderOwnedBooks = () => {
    return this.props.books
      .filter(g => g.ownedByReader)
      .sort((a, b) => (a.title < b.title ? -1 : 1))
      .map(this.renderSingleBook)
  }

  renderSingleBook = book => (
    <li key={book.id} className={book.ownedByReader ? 'hab ich' : ''}>
      {book.title}
    </li>
  )
}
