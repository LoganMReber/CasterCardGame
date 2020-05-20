export const MANA_PHASE = 'MANA_PHASE';
export const manaPhase = (player, color) => (dispatch) => {
  dispatch({ type: MANA_PHASE, payload: { player, color } });
};
export const END_PHASE = 'END_PHASE';
export const endPhase = () => (dispatch) => {
  dispatch({ type: END_PHASE, payload: null });
};

export const PLAY_CARD_CREATURE = 'PLAY_CARD_CREATURE';
export const PLAY_CARD_SPELL = 'PLAY_CARD_SPELL';
export const PLAY_CARD_FAILURE = 'PLAY_CARD_FAILURE';
export const playCard = (player, card, color, type) => (dispatch) => {
  const current = `${color}_current`;
  if (player[current] >= card.level) {
    if (type === 'creature') {
      dispatch({ type: PLAY_CARD_CREATURE, payload: { color, current, card } });
    } else {
      dispatch({ type: PLAY_CARD_SPELL, payload: { color, current, card } });
    }
  } else {
    dispatch({ type: PLAY_CARD_FAILURE, payload: null });
  }
};
