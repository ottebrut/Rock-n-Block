import React from 'react';
import Context from '../context';
import card from './_img/card.svg';
import galleryArrow from './_img/galleryArrow.svg';
import './_css/gallery.css';

export default function Gallery() {
  const { gallery, cardsNumber } = React.useContext(Context);

  const cardsInRow = 3;
  function getCardBody(i, cardNumber) {
    let cardPos = "gallery__card_";
    if (i < 0) {
      cardPos += "left";
    } else if (i < cardsInRow) {
      cardPos += (i + 1);
    } else {
      cardPos += "right";
    }
    return (
      <div
        className={ "card gallery__card " + cardPos }
        key={ cardNumber }
      >
        <img src={ card } alt={ "Card number " + (cardNumber + 1) }/>
        <a href="/" className="card__number">#{cardNumber + 1}</a>
      </div>
    )
  }

  const initialCards = [];
  for (let i = 0; i < cardsNumber; ++i) {
    initialCards.push(getCardBody(i, i));
  }
  const [ cards, setCards ] = React.useState(initialCards);
  let [ curLeftCard, setCurLeftCard ] = React.useState(0);

  function moveRight() {
    if (curLeftCard + cardsInRow >= cardsNumber) {
      return;
    }
    const newCards = cards.slice();
    newCards[curLeftCard] = getCardBody(-1, curLeftCard);
    setCurLeftCard(++curLeftCard)
    for (let i = curLeftCard; i < curLeftCard + cardsInRow; ++i) {
      newCards[i] = getCardBody(i - curLeftCard, i);
    }
    setCards(newCards);
  }

  function moveLeft() {
    if (curLeftCard === 0) {
      return;
    }
    const newCards = cards.slice();
    newCards[curLeftCard + (cardsInRow - 1)] = getCardBody(cardsInRow, curLeftCard + (cardsInRow - 1));
    setCurLeftCard(--curLeftCard);
    for (let i = curLeftCard; i < curLeftCard + cardsInRow; ++i) {
      newCards[i] = getCardBody(i - curLeftCard, i);
    }
    setCards(newCards);
  }

  return (
    <section
      className={ "gallery header__gallery"
        + (gallery.active ? " header__gallery_active" : "") }
    >
      <div className="gallery__container">
        <button className="gallery__arrow gallery__arrow_left" onClick = { moveLeft }>
          <img src={galleryArrow} alt="Show previous card"/>
        </button>

        <div className="gallery__cards">
          { cards }
        </div>

        <button className="gallery__arrow gallery__arrow_right" onClick = { moveRight }>
          <img src={galleryArrow} alt="Show next card"/>
        </button>
      </div>
    </section>
  );
}