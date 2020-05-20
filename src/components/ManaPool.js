import React from 'react';

const ManaPool = ({ id, mana }) => {
  return (
    <div className='ManaPool'>
      {!id ? <div className='thp'>20</div> : null}
      <div className='rm'>{mana.red_current}</div>
      <div className='gm'>{mana.green_current}</div>
      <div className='bm'>{mana.blue_current}</div>
      <div className='om'>{mana.orange_current}</div>
      {id ? <div className='bhp'>20</div> : null}
    </div>
  );
};

export default ManaPool;
