import React from 'react';
import { connect } from 'react-redux';
import Game from './components/Game';
import ManaGain from './components/ManaGain';

const App = (props) => {
  const pid = 0;
  const { player, phase } = props;
  console.log(player, phase);
  return (
    <div className='App'>
      {phase === 'MANA' ? <ManaGain /> : null}
      <Game pid={pid} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    player: state.player,
    phase: state.phase
  };
};
export default connect(mapStateToProps, {})(App);

/**
 * Round Start
 * ===========
 * P1 - Mana
 *    Creature Health
 *    Mana Pools
 *    Gain New Mana
 * P1 - Main (SP)
 * P1 - Combat
 *    Declare (SP)
 *    Block (SP)
 *    Damage (SP)
 *    Results
 * P1 - End
 * P2 - Mana
 *    Creature Health
 *    Mana Pools
 *    Gain New Mana
 * P2 - Main (SP)
 * P2 - Combat
 *    Declare (SP)
 *    Block (SP)
 *    Damage (SP)
 *    Results
 * P2 - End
 * ==========
 * Round End
 */
