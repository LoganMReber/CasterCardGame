import React from 'react';

const ManaPool = (props) => {
  return (
    <div className='ManaPool'>
      <div className='red'>
        {props.mana.red_current} / {props.mana.red}
      </div>
      <div className='green'>
        {props.mana.green_current} / {props.mana.green}
      </div>
      <div className='blue'>
        {props.mana.blue_current} / {props.mana.blue}
      </div>
      <div className='orange'>
        {props.mana.orange_current} / {props.mana.orange}
      </div>
    </div>
  );
};

export default ManaPool;
