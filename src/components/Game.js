import React, { useState } from 'react';
import { connect } from 'react-redux';
import { cards } from '../cardData';
import ManaPool from './ManaPool';
import CardList from './CardList';
import Card from './Card';
const Game = ({ players }) => {
  const colorList = ['red', 'green', 'blue', 'orange'];
  const [modalActive, toggleModalActive] = useState(false);
  console.log(players[0].board);
  return (
    <div className='Game'>
      <div className='play_area'>
        <div className='far_board'>
          <div className='creatures'>Creature Zone</div>
          <div className='info'>
            <ManaPool mana={players[1]} />
            <div className='health'>♥ 20</div>
          </div>
        </div>
        <div className='effects_stack'>Active Effects Zone</div>
        <div className='close_board'>
          <div className='info'>
            <div className='health'>20 ♥</div>
            <ManaPool mana={players[0]} />
          </div>
          <div className='creatures'>
            {players[0].board.length
              ? players[0].board.map((card) => (
                  <Card type='creature' color={card.color} card={card} />
                ))
              : null}
          </div>
        </div>
      </div>
      <div className='cards_menu'>
        {colorList.map((color) => (
          <CardList
            key={`${color}_creature`}
            modalActive={modalActive}
            toggleModalActive={toggleModalActive}
            color={color}
            type='creature'
            cards={cards.creature[color]}
          />
        ))}
        {colorList.map((color) => (
          <CardList
            key={`${color}_spell`}
            modalActive={modalActive}
            toggleModalActive={toggleModalActive}
            color={color}
            type='spell'
            cards={cards.spell[color]}
          />
        ))}
        />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    players: state.players
  };
};
export default connect(mapStateToProps, {})(Game);
