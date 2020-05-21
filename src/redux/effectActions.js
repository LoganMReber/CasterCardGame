/*
Creature Flags:
  first-strike
  aggressive(no def)
  defender(no atk)
  mundane(no effect activate)
  immune(no effect recieved)
  flying
  thorned
*/
const exampleTargetObject = {
  min: 0, //int (0 to max)
  max: 0, //int (1+)
  self: false, //bool
  caster: 0, //int (0-None,1-Ally,2-Enemy,3-All)
  creature: 0, //int (0-None,1-Ally,2-Enemy,3-All)
  c_flags_req: [], //required flags to target
  c_flags_ban: [], //creature with these flags cant be targeted
  spell: 0 //int (0-None,1-Ally,2-Enemy,3-All)
};
const exampleTriggerObject = {
  type: 0, //int (0-cast,1-turn,2-damage,3-destroy,4-attack,5-block,6-sacrifice)
  target: exampleTargetObject
};
const exampleEffectObject = {
  type: 0,
  /*
    0 - stat - modifies 'damage' and 'health' for 'duration' turns 
      vals: 0-damage,1-health,2-duration(-1==inf)
    1 - remove - removes target from game
      vals: NA
    2 - sacrifice - as remove but allows sacrifice triggers for the allowance
      vals: 0-allowance(target)
    3 - cancel_effect - removes 'target' effect from stack
    4 - cancel_attack - removes 'target' from attackers
    5 - cancel_block - removes 'target' from block stack
    6 - cancel_remove - stops removal of target
    7 - swap -  as stat but with variable input
    //Combat Tricks
    10 - haste - setsAge to 1
    11 - trample - pass overkill damage down blockerStack
    12 - imposing - hit bottom blocker in stack if not 'length' long
      vals: 0-length
    13 - first_strike - if damage is greater than blocker health take no block damage
                        (except if blocker has first_strike as well)
    14 - life_steal - damage dealt to bottom stack is added to casters life
    15 - multi_block - on block unflag blocked(keep blocking) 'count' times
      vals: 0-count
    16 - swap - 
  */
  target: 0,
  values: []
};
const exampleCardEffectObject = {};
/**
 * EFFECT OBJ
 *
 * TRIGGER: type
 * target: {}
 * EFFECT: type
 * VALUES: [?data,...]
 */
