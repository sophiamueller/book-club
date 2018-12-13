export default {
  books: [
    {
      id: uid(),
      title: 'The Time Machine',
      imgScr:
        'https://images-eu.ssl-images-amazon.com/images/I/515H5Ku3NRL.jpg',
      author: 'H. G. Wells',
      genre: 'Soft SciFi',
      words: '160',
      educational: true,
      extraterrestrials: false,
      timeTravel: false,
      philosophical: true,
      happyEnd: true,
      description:
        'The Time Machine is a science fiction novella by H. G. Wells, published in 1895 and written as a frame narrative. The work is generally credited with the popularization of the concept of time travel by using a vehicle that allows an operator to travel purposely and selectively forwards or backwards in time. The term "time machine", coined by Wells, is now almost universally used to refer to such a vehicle.',
      freeText:
        'At least once a year a (classic) novel in English. Thats my personal goal and this year I chose H. G. Wells The Time Machine. I love time-travveling stories.'
    },

    {
      id: uid(),
      title: 'The Secret of the Ninth Planet',
      imgScr:
        'https://images-eu.ssl-images-amazon.com/images/I/41ZRcMdC0%2BL.jpg',
      author: ' Donald Wollheim',
      genre: 'Soft SciFi',
      words: '280',
      description:
        'While the circumnavigation of the solar system seems farfetched, it may not be once the problem of effective anti-gravitational control is solved. In this book I have assumed that the many researchers now actually at work on this problem will achieve such a result in the next decade. It is not at all impossible that they may—for we all know that the more minds that work at a problem, the sooner it will be solved.',
      freeText:
        'Das Buch hatte ich vor knapp 50 Jahren zum Geburtstag geschenkt bekommen. Es ist somit natürlich ein Nostalgiekauf, aber das Buch empfehle ich dennoch, da es die Sehnsucht nach Abenteuer, Weite, Forscherdrang und Zusammenarbeit trotz Andersartigkeit vermittelt. Für mich war es der Startpunkt in viele, viele spätere Science Fiction Bücher mit bleibender Aussagekraft wie Alexander Bogdanows "Der Rote Planet"von 1908. Gefällt: @startdust',
      educational: false,
      extraterrestrials: true,
      timeTravel: true,
      philosophical: false,
      happyEnd: false,
      readers: [
        {
          id: uid(),
          name: 'Michael',
          likesBook: false,
          ownsBook: false
        },
        {
          id: uid(),
          name: 'Elke',
          likesBook: false,
          ownsBook: true
        }
      ]
    },
    {
      id: uid(),
      title: 'Anything You Can Do',
      imgScr:
        'https://images-eu.ssl-images-amazon.com/images/I/51mJybJRFdL.jpg',
      author: 'Bauer',
      genre: 'Soft SciFi',
      words: '675',
      educational: true,
      extraterrestrials: true,
      timeTravel: false,
      philosophical: true,
      happyEnd: false,
      marked: true,
      description:
        'The Alien was really alien—and Earth was faced with a strange problem indeed. They had to have a superman. And there werent any. So.... _________ Randall Garrett was an American science fiction and fantasy author. He was a prolific contributor to Astounding and other science fiction magazines of the 1950s and 1960s.',
      freeText:
        'I was excited about this book as I had very much enjoyed Not Alone by the same author.',

      readers: [
        {
          id: uid(),
          name: 'Michael',
          likesBook: true,
          ownsBook: false
        },
        {
          id: uid(),
          name: 'Elke',
          likesBook: true,
          ownsBook: true
        }
      ]
    }
  ],
  creationFormData: {
    title: '',
    author: '',
    genre: '',
    words: '',
    description: '',
    rating: '',
    reader: false,
    educational: false,
    extraterrestrials: false,
    timeTravel: false,
    philosophical: false,
    happyEnd: false
  }
}
