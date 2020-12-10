import React from 'react';
import ShowCards from "./ShowCards";
import BuyCards from "./BuyCards";
import './_css/headerBlocks.css';
import './_css/login.css';

export default function HeaderBlocks() {
  return (
    <div className="header__blocks">
      <a href="/" className="login header__block">
        <span className="login__text">Login to Binance Smart Chain Wallet</span>
      </a>
      <ShowCards/>
      <BuyCards/>
    </div>
  );
}