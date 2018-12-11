import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import ToggleIcon from './ToggleIcon'
import Separator from '../BookCard/Separator'
import TagListHeading from './TagListHeading'
import TagStyle from './TagStyle'
import ReaderCardContent from '../Reader/ReaderCardContent'
import CollapsedCard from '../BookCard/CollapsedCard'
// import Bookmark from '../Bookmark/Bookmark'

const ImageContainer = styled.div`
  display: grid;
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
  font-family: roboto;
  font-size: 12px;
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

  // static defaultProps = {
  //   imgScr: 'https://images-na.ssl-images-amazon.com/images/I/41rHveknzrL.jpg'
  // }

  render() {
    const { name, imgScr, userName, isExpanded, onClick } = this.props
    return (
      <section data-cy="ReaderCard">
        <ReaderCardContent>
          <ImageContainer>
            <Image src={imgScr} alt="" />
          </ImageContainer>
          <Title>{name}</Title>

          <ToggleIcon
            data-cy="Toggle"
            onClick={onClick}
            className={isExpanded ? 'rotate' : ''}
          >
            <FontAwesomeIcon icon="book" />
          </ToggleIcon>
          <Username>{userName}</Username>
          <CollapsedCard
            data-cy="ExpandContent"
            className={isExpanded ? 'expand' : ''}
          >
            <TagStyle>
              <Separator text={'Diese Bücher finde ich gut!'} />

              {this.countSelectedBooks('mag ich') >= 1 ? (
                this.renderLikedBooks()
              ) : (
                <span>
                  Es wurden keine Bücher ausgewählt, ich freue mich über
                  Vorschläge!
                </span>
              )}
            </TagStyle>
            <Separator text={'Diese Bücher kann ich verleihen!'} />
            <TagStyle>
              {this.countSelectedBooks('hab ich') >= 1 ? (
                this.renderOwnedBooks()
              ) : (
                <span>Es wurden keine Bücher ausgewählt</span>
              )}
            </TagStyle>
          </CollapsedCard>
        </ReaderCardContent>
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
