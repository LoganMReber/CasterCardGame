import React, { useState } from 'react';
import Card from './components/Card';
import ManaPool from './components/ManaPool';
import ManaGain from './components/ManaGain';
import {cards} from './cardData';
function App() {
  const [mana,setMana] = useState({red:0,green:0,blue:0,orange:0});
  const [showMG,setShowMG] = useState(true)
  return (
    <div className="App">
      {showMG ? <ManaGain mana={mana} setMana={setMana} setShowMG={setShowMG}/>:null}
      <div className='Cards'>
        {cards.map((card,id)=><Card key={id} data={card}/>)}
      </div>
      <ManaPool mana={mana}/>
    </div>
  );
}

export default App;

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
