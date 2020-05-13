import {
  MANA_PHASE,
  MAIN_PHASE,
  ATTACK_PHASE,
  BLOCK_PHASE,
  END_PHASE
} from './actions';
const storeShape = {
  round: 0,
  turn2: false,
  phase: 'MANA',
  player1: {
    health: 20,
    red: 0,
    green: 0,
    blue: 0,
    orange: 0,
    board: [],
    spellEffects: []
  },
  player2: {
    health: 20,
    red: 0,
    green: 0,
    blue: 0,
    orange: 0,
    board: [],
    spellEffects: []
  }
};

export const reducer = (state = storeShape, action) => {
  switch (action.type) {
    case MANA_PHASE:
    case MAIN_PHASE:
    case ATTACK_PHASE:
    case BLOCK_PHASE:
    case END_PHASE:
    default:
      return state;
  }
};
