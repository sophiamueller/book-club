import React, { Component } from 'react'
import uid from 'uid'
import ReaderHeader from '../components/Reader/ReaderHeader'
import ReaderCardContainer from '../components/Reader/ReaderCardContainer'
import ReaderCard from '../components/Reader/ReaderCard'

export default class ReaderScreen extends Component {
  state = {
    readers: [
      {
        id: uid(),
        name: 'Emilia',
        imgScr:
          'https://images-na.ssl-images-amazon.com/images/I/41rHveknzrL.jpg',
        userName: 'Emilia',
        isExpanded: false,
        books: [
          {
            id: uid(),
            title: 'The Time Machine',
            likedByReader: true,
            ownedByReader: true
          },
          {
            id: uid(),
            title: 'Roter Stern',
            likedByReader: true,
            ownedByReader: false
          }
        ]
      },
      {
        id: uid(),
        name: 'Arne',
        imgScr:
          'https://images-na.ssl-images-amazon.com/images/I/41rHveknzrL.jpg',
        userName: 'Arne',
        isExpanded: false,
        books: [
          {
            id: uid(),
            title: 'The Time Machine',
            likedByReader: false,
            ownedByReader: false
          },
          {
            id: uid(),
            title: 'Roter Stern',
            likedByReader: false,
            ownedByReader: true
          }
        ]
      }
    ]
  }

  render() {
    return (
      <React.Fragment>
        <ReaderHeader text={'Lesezirkel'} />
        <ReaderCardContainer>{this.renderAllReader()}</ReaderCardContainer>
      </React.Fragment>
    )
  }

  renderAllReader() {
    return this.state.readers
      .sort((a, b) => (a.name < b.name ? -1 : 1))
      .map(this.renderSingleReader)
  }

  renderSingleReader = reader => (
    <ReaderCard
      key={reader.id}
      {...reader}
      onClick={() => this.toggleExpand(reader.id)}
    />
  )

  toggleExpand = id => {
    const { readers } = this.state
    const index = readers.findIndex(p => p.id === id)
    const reader = readers[index]
    const updatedReaders = [
      ...readers.slice(0, index),
      { ...reader, isExpanded: !reader.isExpanded },
      ...readers.slice(index + 1)
    ]
    this.setState({
      readers: updatedReaders
    })
  }
}
