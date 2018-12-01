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
  width: 100%;
`

const Image = styled.img`
  border-radius: 5px 5px 0 0;
  height: 120px;
  object-fit: cover;
  width: 100%;
`

const Title = styled.h2`
  align-items: center;
  display: flex;
  grid-column-start: span 3;
  margin: 0;
`

export default class BookCard extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    imgScr: PropTypes.string,
    author: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    words: PropTypes.string.isRequired,
    educational: PropTypes.bool.isRequired,
    extraterrestials: PropTypes.bool.isRequired,
    timeTravel: PropTypes.bool.isRequired,
    philosophical: PropTypes.bool.isRequired,
    happyEnd: PropTypes.bool.isRequired,
    isExpanded: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
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
            <FontAwesomeIcon icon="angle-down" />
          </ToggleIcon>
          <BookListDetails>Autor:{author}</BookListDetails>
          <BookListDetails>Genre: {genre}</BookListDetails>
          <BookListDetails>Wörter: {words}</BookListDetails>
          <BookListDetails>Bildungsroman: ja{educational}</BookListDetails>
          <BookListDetails>
            Außerirdisches Leben: {extraterrestrials ? 'ja' : 'nein'}
          </BookListDetails>
          <BookListDetails>
            {this.showBookBooleanTag(timeTravel, 'Zeitreisen')}
          </BookListDetails>
          <BookListDetails>philosophisch: ja{philosophical}</BookListDetails>
          <BookListDetails>Gutes Ende: ja{happyEnd}</BookListDetails>
          <CollapsedCard
            data-cy="CollapsedCard"
            className={isExpanded ? 'expand' : ''}
          >
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
          backgroundColor: booleanTag ? 'green' : 'red',
          color: 'white',
          borderRadius: '10px'
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

  // renderEducationalReader() {
  //   return this.props.reader
  //     .filter(p => p.educationalBook)
  //     .sort((a, b) => (a.name < b.name ? -1 : 1))
  //     .map(this.renderSingleReader)
  // }

  // renderExtraterrReader() {
  //   return this.props.reader
  //     .filter(p => p.extraterrBook)
  //     .sort((a, b) => (a.name < b.name ? -1 : 1))
  //     .map(this.renderSingleReader)
  // }

  // renderTimeTravelReader() {
  //   return this.props.reader
  //     .filter(p => p.timeTravelBook)
  //     .sort((a, b) => (a.name < b.name ? -1 : 1))
  //     .map(this.renderSingleReader)
  // }

  // renderphilosophicalReader() {
  //   return this.props.reader
  //     .filter(p => p.philosophicalBook)
  //     .sort((a, b) => (a.name < b.name ? -1 : 1))
  //     .map(this.renderSingleReader)
  // }

  // renderHappyEndReader() {
  //   return this.props.reader
  //     .filter(p => p.happyEndBook)
  //     .sort((a, b) => (a.name < b.name ? -1 : 1))
  //     .map(this.renderSingleReader)
  // }

  renderSingleReader = reader => (
    <li
      key={reader.key}
      className={reader.ownsBook ? 'owns' : ''}
      // className={reader.educationalBook ? 'educational' : ''}
      // className={reader.extraterrBook ? 'extrarrestials' : ''}
      // className={reader.timeTravelBook ? 'timeTravel' : ''}
      // className={reader.philosophicalBook ? 'philosophical' : ''}
      // className={reader.happyEndBook ? 'happyEnd' : ''}
    >
      {reader.name}
    </li>
  )
}
