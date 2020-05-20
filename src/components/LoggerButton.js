import React from 'react';
import { connect } from 'react-redux';

const LoggerButton = ({ id, player, phase }) => {
  return (
    <div className='LoggerButton'>
      <p>History</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    player: state.player,
    phase: state.phase
  };
};

export default connect(mapStateToProps, {})(LoggerButton);
