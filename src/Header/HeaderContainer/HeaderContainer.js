import React from 'react';
import Context from '../context';
import HeaderBlocks from "./HeaderBlocks/HeaderBlocks";
import logoImage from "./_img/bearHead.svg";
import logoText from "./_img/bearGamesText.svg";
import './_css/headerContainer.css';
import './_css/logo.css';

export default function HeaderContainer() {
  const { gallery } = React.useContext(Context);

  return (
    <div className="header-container header__container">
      <div
        className={ "header__box-container"
          + (gallery.active ? " header__box-container_with-gallery" : "") }
      >
        <div className="header__box">
          <a href="/" className="logo">
            <img src={logoImage} alt="Bear head" className="logo__image"/>
            <img src={logoText} alt="Bear games" className="logo__text"/>
          </a>
          <HeaderBlocks/>
        </div>
      </div>
    </div>
  );
}