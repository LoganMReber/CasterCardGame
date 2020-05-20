import React, { useState } from 'react';
import { connect } from 'react-redux';
import { cards } from '../cardData';
import ManaPool from './ManaPool';
import CardList from './CardList';
import LoggerButton from './LoggerButton';
import PhaseButton from './PhaseButton';
import Card from './Card';
const Game = ({ pid, players }) => {
  const colorList = ['red', 'green', 'blue', 'orange'];
  const [modalActive, toggleModalActive] = useState(false);
  return (
    <div className='Game'>
      <div className='stats'>
        <ManaPool mana={players[1]} id={1} />
        <div className='buttons'>
          <div className='cards_menu'>
            <div className='player_name top'>Opponent Name</div>
            <div>
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
            </div>
            <PhaseButton pid={pid} />
            <div>
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
            </div>
            <div className='player_name bottom'>Player Name</div>
          </div>
        </div>

        <ManaPool mana={players[0]} id={0} />
      </div>
      <div className='play_area'>
        <div className='creatures'>
          {players[1].board.length
            ? players[1].board.map((card, i) => (
                <Card type='creature' key={i} color={card.color} card={card} />
              ))
            : null}
        </div>

        <div className='creatures'>
          {players[0].board.length
            ? players[0].board.map((card, i) => (
                <Card type='creature' key={i} color={card.color} card={card} />
              ))
            : null}
        </div>
      </div>
      <div className='hist_stack'>
        <LoggerButton />
        <div className='effects_stack'></div>
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
