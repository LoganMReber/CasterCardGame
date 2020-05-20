import React from 'react';
import { connect } from 'react-redux';
import { endPhase } from '../redux/actions';
const PhaseButton = ({ pid, player, phase, endPhase }) => {
  const activate = (e) => {
    if (phase === 'MAIN') {
      endPhase();
    }
  };
  return (
    <div onClick={activate} className='PhaseButton'>
      {phase === 'MAIN' ? <p>End Turn</p> : <p>Please Wait</p>}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    player: state.player,
    phase: state.phase
  };
};

export default connect(mapStateToProps, { endPhase })(PhaseButton);
