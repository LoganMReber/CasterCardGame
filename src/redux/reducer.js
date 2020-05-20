import {
  MANA_PHASE,
  PLAY_CARD_CREATURE,
  PLAY_CARD_SPELL,
  PLAY_CARD_FAILURE,
  END_PHASE
} from './actions';
const storeShape = {
  round: 0,
  player: 0,
  phase: 'MANA',
  players: [
    {
      health: 20,
      red: 0,
      green: 0,
      blue: 0,
      orange: 0,
      red_current: 0,
      green_current: 0,
      blue_current: 0,
      orange_current: 0,
      board: []
    },
    {
      health: 20,
      red: 0,
      green: 0,
      blue: 0,
      orange: 0,
      red_current: 0,
      green_current: 0,
      blue_current: 0,
      orange_current: 0,
      board: []
    }
  ],
  activeEffects: []
};

export const reducer = (state = storeShape, action) => {
  const pl = action.payload;
  switch (action.type) {
    case MANA_PHASE:
      const newState = {
        ...state,
        phase: 'MAIN',
        players: state.players.map((p, i) => {
          if (i === pl.player) {
            return {
              ...p,
              [pl.color]: p[pl.color] + 1
            };
          } else {
            return p;
          }
        })
      };
      newState.players[pl.player].red_current = newState.players[pl.player].red;
      newState.players[pl.player].green_current =
        newState.players[pl.player].green;
      newState.players[pl.player].blue_current =
        newState.players[pl.player].blue;
      newState.players[pl.player].orange_current =
        newState.players[pl.player].orange;
      return newState;
    case END_PHASE:
      return {
        ...state,
        player: state.player + 1 < state.players.length ? state.player + 1 : 0,
        phase: 'MANA'
      };
    case PLAY_CARD_CREATURE:
      console.log(
        state.players[state.player][pl.current],
        pl.card.level,
        pl.current
      );
      return {
        ...state,
        players: state.players.map((p, i) => {
          if (i === state.player) {
            return {
              ...p,
              board: [...p.board, { ...pl.card, color: pl.color }],
              [pl.current]: p[pl.current] - pl.card.level
            };
          } else {
            return p;
          }
        })
      };
    case PLAY_CARD_SPELL:
    case PLAY_CARD_FAILURE:
      window.alert("You don't have enough mana.");
      return state;
    default:
      return state;
  }
};
