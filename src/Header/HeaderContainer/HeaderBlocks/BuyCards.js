import React from 'react';
import minus from './_img/minus.svg';
import plus from './_img/plus.svg';
import './_css/buyCards.css';

export default function HeaderBlocks() {
  const [ buyCardsForm, setBuyCardsForm ] = React.useState({
    active: false
  });

  const input = React.createRef();
  const initialCardsAmount = 1;

  function toggleBuyCardsForm() {
    setBuyCardsForm({
      active: !buyCardsForm.active
    });
    setTimeout((current) => current.focus(), 0, input.current);
  }

  const oneCardCost = 225;
  const [moneySum, setMoneySum] = React.useState(oneCardCost);

  function updateMoneySum() {
    setMoneySum(input.current.value * oneCardCost);
  }

  function inputChange() {
    const newValue = input.current.value;
    if (newValue !== '') {
      input.current.value = Math.min(input.current.max, Math.max(1, Number(newValue)));
      updateMoneySum();
    } else {
      setMoneySum(0);
    }
  }

  function decrementCards() {
    input.current.value = Math.max(1, input.current.value - 1);
  }

  function incrementCards() {
    input.current.value = Math.min(input.current.max, Number(input.current.value) + 1);
  }

  function submitHandler(event) {
    if (input.current.value === '') {
      event.preventDefault();
    }
  }

  return (
    <div className="buy-cards-container">
      <button className="buy-cards-dropdown header__block" onClick={ toggleBuyCardsForm }>
        <span className="buy-cards-dropdown__text">BUY VIP PAW CARD</span>
        <span
          className={ "buy-cards-dropdown__sign"
            + (buyCardsForm.active ? " buy-cards-dropdown__sign_active": "") }
        />
      </button>

      <form
        className={"buy-cards-form buy-cards__form"
          + (buyCardsForm.active ? " buy-cards__form_active" : "") }
        onSubmit={ submitHandler }
      >
        <div className="buy-cards-input-container buy-cards-form__input-container">
          <button type="button" className="buy-cards-input-button input-button-minus" onClick={ decrementCards }>
            <img src={minus} alt="Delete one card from the cart"/>
          </button>

          <input
            type="number"
            name="amount"
            className="buy-cards-input"
            defaultValue={ initialCardsAmount } max="99"
            ref={ input }
            onChange={ inputChange }
          />

          <button type="button" className="buy-cards-input-button input-button-plus" onClick={ incrementCards }>
            <img src={plus} alt="Add one card to the cart"/>
          </button>
        </div>

        <div className="buy-cards-form__money-sum">${moneySum}</div>

        <button type="submit" className="buy-cards-form__submit-button">BUY CARD</button>
      </form>
    </div>
  );
}