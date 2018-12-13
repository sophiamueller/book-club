import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import ToggleIcon from './ToggleIcon'
import Separator from '../BookCard/Separator'
import TagStyle from './TagStyle'
import ReaderCardContent from '../Reader/ReaderCardContent'
import CollapsedCard from '../BookCard/CollapsedCard'
import { ZoomIn } from 'animate-css-styled-components'

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
const IconContainer = styled.div`
  font-size: 15px;
  padding: 20px;
  border-radius: 50px;
  background-image: linear-gradient(
    to top,
    lightgrey 0%,
    lightgrey 1%,
    #e0e0e0 26%,
    #efefef 48%,
    #d9d9d9 75%,
    #bcbcbc 100%
  );
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

  render() {
    const { name, imgScr, userName, isExpanded, onClick } = this.props
    return (
      <ZoomIn duration="1.3s" delay="0.2s">
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
              <IconContainer>
                {' '}
                <FontAwesomeIcon icon="rocket" />
              </IconContainer>
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
      </ZoomIn>
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
