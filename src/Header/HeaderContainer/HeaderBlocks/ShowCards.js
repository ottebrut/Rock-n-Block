import React from 'react';
import Context from '../../context';
import './_css/showCards.css';

export default function HeaderBlocks() {
  const { gallery, setGallery, cardsNumber } = React.useContext(Context);

  function toggleGallery() {
    setGallery({
      active: !gallery.active
    })
  }

  return (
    <button
      className={ "show-cards header__block"
        + (gallery.active ? " show-cards_active" : "") }
      onClick={ toggleGallery }
    >
      <span className="show-cards__text">My VIP NFT CARD</span>
      <span className="show-cards__counter">
          <span className="show-cards__counter-text">{ cardsNumber }</span>
      </span>
      <span className="show-cards__triangle"/>
    </button>
  );
}