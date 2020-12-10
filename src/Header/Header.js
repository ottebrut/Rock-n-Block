import React from 'react';
import Context from './context'
import HeaderContainer from "./HeaderContainer/HeaderContainer";
import Gallery from "./Gallery/Gallery";
import './_css/header.css';

export default function Header() {
  const [ gallery, setGallery ] = React.useState({
    active: false
  })

  const cardsNumber = 6;

  return (
    <Context.Provider value={{ gallery, setGallery, cardsNumber }}>
      <header className="header">
        <HeaderContainer/>
        <Gallery/>
      </header>
    </Context.Provider>
  );
}