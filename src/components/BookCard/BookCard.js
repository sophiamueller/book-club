import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import SingleCard from './SingleCard'
import BookListDetails from './BookListDetails'
import ToggleIcon from './ToggleIcon'
import Separator from './Separator'
import Bookmark from '../Bookmark/Bookmark'
import TagIcon from './TagIcon'
import TagMain from './TagMain'
import CardContent from './CardContent'
import CollapsedCard from './CollapsedCard'

const ImageContainer = styled.div`
  line-height: 0;
  display: flex;
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
  display: flex;
  margin: 0;
`

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default class BookCard extends Component {
  static propTypes = {
    title: PropTypes.string,
    imgScr: PropTypes.string,
    author: PropTypes.string,
    genre: PropTypes.string,
    freeText: PropTypes.string,
    educational: PropTypes.bool,
    extraterrestrials: PropTypes.bool,
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
      educational,
      extraterrestrials,
      timeTravel,
      philosophical,
      happyEnd,
      freeText,
      isExpanded
    } = this.props.data
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
            onClick={this.props.onToggleClick}
            className={isExpanded ? 'rotate' : ''}
          >
            <FontAwesomeIcon icon="book" />
          </ToggleIcon>
          <Bookmark
            marked={this.props.marked}
            handleOnClick={this.props.onBookmarkClick}
            gridArea="bookmark"
            handleOnClick={this.props.onBookmarkClick}
          />

          <sectionTag>
            <BookListDetails>Autor:{author}</BookListDetails>
            <BookListDetails>Genre: {genre}</BookListDetails>
            <BookListDetails>Wörter: {freeText}</BookListDetails>
            <TagList>
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
            </TagList>
          </sectionTag>

          <CollapsedCard
            data-cy="CollapsedCard"
            className={isExpanded ? 'expand' : ''}
          >
            <Separator text={'über dieses Buch:'} />
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              ipsa, nisi et possimus porro iusto temporibus libero, dolor facere
              maxime nulla ab incidunt dolorem eum quos rem assumenda vel quis?
            </div>
            <Separator text={'Rezension'} />
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

    const { readers } = this.props.data
    console.log(this.props.data)

    if (criteria === 'like') {
      length = readers.filter(p => p.likesBook).length
    } else if (criteria === 'own') {
      length = 0
    }

    return length
  }

  renderLikedByReader() {
    console.log(this.props.data)
    return this.props.data.readers
      .filter(p => p.likesBook)
      .sort((a, b) => (a.name < b.name ? -1 : 1))
      .map(this.renderSingleReader)
  }

  renderOwnedByReader() {
    return this.props.data.reader
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
