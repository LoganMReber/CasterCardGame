import React from 'react';
import { connect } from 'react-redux';
import { playCard } from '../redux/actions';
const Card = (props) => {
  const { player, color, type, card, context } = props;
  return (
    <div
      className='Card'
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
      <div className='card_border'>
        <div className={`card_body ${color}`}>
          <div className={`card_head ${color}_body`}>
            {console.log()}
            <img
              alt={color}
              src={`./img/${color}.png`}
              className='card_element'
            />
            <div className='card_name'>{card.name}</div>
            <div className='card_level'>{card.level}</div>
          </div>
          <div className='card_type'>
            <div className='spacer' />
            <div className='card_type_text'>{card.type}</div>
            <div className='card_type_icon'>{card.set_emblem}</div>
          </div>
          <div className='card_text'>{card.effect}</div>
          {type === 'creature' ? (
            <div className='card_stat_block'>
              {card.damage}/{card.health}
            </div>
          ) : null}
        </div>
        <div className='card_footer'>
          <div className='card_creator'>{card.creator}</div>
          <div className='card_copyright'>&copy;Logan Reber {card.year}</div>
        </div>
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
