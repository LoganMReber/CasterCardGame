import React from 'react';
import { connect } from 'react-redux';
import { manaPhase } from '../redux/actions';
const ManaGain = (props) => {
  const { id, player } = props;
  const addMana = (color) => {
    props.manaPhase(id, color);
  };
  return (
    <div className='ManaGain'>
      <div className='spacer'>
        <div
          onClick={() => {
            addMana('red');
          }}
          className='red'
        >
          {player.red}
        </div>
        <div
          onClick={() => {
            addMana('green');
          }}
          className='green'
        >
          {player.green}
        </div>
      </div>
      <div className='spacer'>
        <div
          onClick={() => {
            addMana('blue');
          }}
          className='blue'
        >
          {player.blue}
        </div>
        <div
          onClick={() => {
            addMana('orange');
          }}
          className='orange'
        >
          {player.orange}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    id: state.player,
    player: state.players[state.player]
  };
};
export default connect(mapStateToProps, { manaPhase })(ManaGain);
