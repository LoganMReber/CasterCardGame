import React from 'react';
import { connect } from 'react-redux';
import { playCard } from '../redux/actions';
const Card = (props) => {
  const { player, color, type, card, context } = props;
  return (
    <div
      className='Card'
      style={{ width: '200px', height: '250px' }}
      onClick={() => {
        switch (context) {
          case 'list':
            props.playCard(player, card, color, type);
            break;
          default:
            break;
        }
      }}
    >
      <div className='header' />
      <div className={`body ${color}`}>
        <div className={`head ${color}_body`}>
          <img alt={color} src={`./img/${color}.png`} className='element' />
          <div className='name'>{card.name}</div>
          <div className='level'>{card.level}</div>
        </div>
        <div className={`text ${color}_body`}>{card.effect}</div>
        {type === 'creature' ? (
          <div className={`stat_block`}>
            <div className={`damage ${color}_body`}>{card.damage}</div>
            <div className={`health ${color}_body`}>{card.health}</div>
          </div>
        ) : null}
      </div>
      <div className='footer'>
        <div className='creator'>{card.creator}</div>
        <div className='copyright'>&copy;Logan Reber {card.year}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    player: state.players[state.player]
  };
};

export default connect(mapStateToProps, { playCard })(Card);
