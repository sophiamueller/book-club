import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, boolean, number } from '@storybook/addon-knobs'
import Input from '../components/InputTitel'
import CardHead from '../components/CardHead'
import CardText from '../components/CardText'

function dateKnob(name, defaultValue) {
  const stringTimestamp = date(name, defaultValue)
  return new Date(stringTimestamp)
}

storiesOf('Input', module).add('Input', () => (
  <Input
    onSubmit={action('addInputToArray')}
    placeholder={text('Buchtitel:', 'Time Machine')}
    name="input-storybook"
    label={text('Buchtitel:', 'Name: ')}
  />
))

storiesOf('CardHead', module).add('CardHead', () => (
  <CardHead
    titel={text('Titel:', 'Time Machine')}
    autor={number('Autor:', 'H. G. Wells')}
    genere={text('Genere:', 'Science-Fictio')}
    description={text(
      'Inhaltsbeschreibung:',
      'Die Zeitmaschine ist ein Science-Fiction-Roman von H. G. Wells. Dieser 1895 erschienene Klassiker der Science-Fiction-Literatur ist die erste literarische Beschreibung einer Zeitreise in die Zukunft, die mittels einer Zeitmaschine bewerkstelligt wird.'
    )}
    rating={number('Bewertung 10-1:', '7')}
    isbn={text('ISBN Nummer:', '848_A_17')}
  />
))

storiesOf('CardText', module).add('CardText', () => (
  <CardText
    TextInfo={text('Freie Beschreibung:', 'Das Buch war spannend und gut.')}
  />
))
