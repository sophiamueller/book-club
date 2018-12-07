import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import SingleCard from './SingleCard'
import BookListDetails from './BookListDetails'
import ToggleIcon from './ToggleIcon'
import Separator from './Separator'
import TagIcon from './TagIcon'
import TagMain from './TagMain'
import CardContent from './CardContent'
import CollapsedCard from './CollapsedCard'

const ImageContainer = styled.div`
  line-height: 0;
  /* display: flex; */
  flex-direction: column;
  justify-content: center;
  margin: 2px;
`

const Image = styled.img`
  border-radius: 5px;
  height: 120px;
  object-fit: cover;
`

const Title = styled.h2`
  width: 100%;
  align-items: center;
  /* display: flex;
  grid-column-start: span 3; */
  margin: 0;
`

export default class BookCard extends Component {
  static propTypes = {
    title: PropTypes.string,
    imgScr: PropTypes.string,
    author: PropTypes.string,
    genre: PropTypes.string,
    words: PropTypes.string,
    educational: PropTypes.bool,
    extraterrestials: PropTypes.bool,
    timeTravel: PropTypes.bool,
    philosophical: PropTypes.bool,
    happyEnd: PropTypes.bool,
    isExpanded: PropTypes.bool,
    onClick: PropTypes.func
  }

  static defaultProps = {
    imgScr: 'https://images-na.ssl-images-amazon.com/images/I/41rHveknzrL.jpg'
  }

  render() {
    console.log('props:', this.props)
    const {
      title,
      imgScr,
      author,
      genre,
      words,
      educational,
      extraterrestrials,
      timeTravel,
      philosophical,
      happyEnd,
      isExpanded,
      onClick
    } = this.props
    console.log('extrater', extraterrestrials)

    return (
      <SingleCard data-cy="SingleCard">
        <ImageContainer>
          <Image src={imgScr} alt="" />
        </ImageContainer>
        <CardContent>
          <Title>{title}</Title>
          <ToggleIcon
            data-cy="Toggle"
            onClick={onClick}
            className={isExpanded ? 'rotate' : ''}
          >
            <FontAwesomeIcon icon="book" />
          </ToggleIcon>
          <div>
            <BookListDetails>Autor:{author}</BookListDetails>
            <BookListDetails>Genre: {genre}</BookListDetails>
            <BookListDetails>Wörter: {words}</BookListDetails>
            <BookListDetails>
              {this.showBookBooleanTag(educational, 'Bildungsroman')}
            </BookListDetails>
            <BookListDetails>
              {this.showBookBooleanTag(
                extraterrestrials,
                'außerirdisches Leben'
              )}
            </BookListDetails>
            <BookListDetails>
              {this.showBookBooleanTag(timeTravel, 'Zeitreisen')}
            </BookListDetails>
            <BookListDetails>
              {this.showBookBooleanTag(philosophical, 'philosophisch')}
            </BookListDetails>
            <BookListDetails>
              {this.showBookBooleanTag(happyEnd, 'Happy End')}
            </BookListDetails>
          </div>

          <CollapsedCard
            data-cy="CollapsedCard"
            className={isExpanded ? 'expand' : ''}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            ipsa, nisi et possimus porro iusto temporibus libero, dolor facere
            maxime nulla ab incidunt dolorem eum quos rem assumenda vel quis?
            <Separator />
            <TagMain text="Begeisterte/r Leser/in" />
            <TagIcon>
              {this.countSelectedReader('like') >= 1 ? (
                this.renderLikedByReader()
              ) : (
                <span>Kein Leser wurde ausgewählt</span>
              )}
            </TagIcon>
            <TagMain text="Besitzt das Buch" />
            <TagIcon>
              {this.countSelectedReader('own') >= 1 ? (
                this.renderOwnedByReader()
              ) : (
                <span>Kein Leser wurde ausgewählt</span>
              )}
            </TagIcon>
          </CollapsedCard>
        </CardContent>
      </SingleCard>
    )
  }

  showBookBooleanTag = (booleanTag, tagName) => {
    return (
      <span
        style={{
          backgroundColor: booleanTag ? 'green' : 'lightgray',
          color: 'white',
          padding: '3px 3px',
          margin: '2px',
          borderRadius: '5px',
          border: '0.5px solid green'
        }}
      >
        {tagName}
      </span>
    )
  }

  countSelectedReader(criteria) {
    let length

    const { readers } = this.props

    if (criteria === 'like') {
      length = readers.filter(p => p.likesBook).length
    } else if (criteria === 'own') {
      length = 0
    }

    return length
  }

  renderLikedByReader() {
    return this.props.readers
      .filter(p => p.likesBook)
      .sort((a, b) => (a.name < b.name ? -1 : 1))
      .map(this.renderSingleReader)
  }

  renderOwnedByReader() {
    return this.props.reader
      .filter(p => p.ownsBook)
      .sort((a, b) => (a.name < b.name ? -1 : 1))
      .map(this.renderSingleReader)
  }

  renderSingleReader = reader => (
    <li key={reader.id} className={reader.ownsBook ? 'owns' : ''}>
      {reader.name}
    </li>
  )
}
