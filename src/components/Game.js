import React from 'react';
import ManaPool from './ManaPool';
const Game = (props) => {
  const p1Mana = { red: 1, green: 0, blue: 2, orange: 0 };
  const p2Mana = { red: 0, green: 2, blue: 0, orange: 1 };
  return (
    <div className='Game'>
      <div className='play_area'>
        <div className='far_board'>
          <div className='creatures'>Creature Zone</div>
          <div className='info'>
            <ManaPool mana={p2Mana} />
            <div className='health'>♥ 20</div>
          </div>
        </div>
        <div className='effects_stack'>Active Effects Zone</div>
        <div className='close_board'>
          <div className='info'>
            <div className='health'>20 ♥</div>
            <ManaPool mana={p1Mana} />
          </div>
          <div className='creatures'>Creature Zone</div>
        </div>
      </div>
      <div className='cards_menu'>
        <div className='red'>
          <img src='./img/beast.png' alt='creature' />
        </div>
        <div className='green'>
          <img src='./img/beast.png' alt='creature' />
        </div>
        <div className='blue'>
          <img src='./img/beast.png' alt='creature' />
        </div>
        <div className='orange'>
          <img src='./img/beast.png' alt='creature' />
        </div>
      </div>
      <div className='cards_menu'>
        <div className='red'>
          <img src='./img/spell.png' alt='spell' />
        </div>
        <div className='green'>
          <img src='./img/spell.png' alt='spell' />
        </div>
        <div className='blue'>
          <img src='./img/spell.png' alt='spell' />
        </div>
        <div className='orange'>
          <img src='./img/spell.png' alt='spell' />
        </div>
      </div>
    </div>
  );
};

export default Game;
