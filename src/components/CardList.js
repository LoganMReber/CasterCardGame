import React, { useState } from 'react';
import Card from './Card';
const CardList = (props) => {
  const { color, type, cards, modalActive, toggleModalActive } = props;
  const [showList, toggleList] = useState(false);
  return (
    <div
      className={`CardList ${color} ${type}`}
      onClick={() => {
        if (!modalActive) {
          toggleList(true);
          toggleModalActive(true);
        }
      }}
    >
      <img className='button-symbol' src={`./img/${type}.png`} alt={type} />

      {showList ? (
        <div
          className='modal-area'
          onClick={() => {
            if (modalActive) {
              toggleList(false);
              toggleModalActive(false);
            }
          }}
        >
          {cards.map((card, i) => (
            <Card
              key={i}
              type={type}
              color={color}
              card={card}
              context={'list'}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default CardList;
