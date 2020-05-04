import React from 'react';

const ManaPool = props => {
    return (
        <div className='ManaPool'>
            <div className='Red_Mana'>{props.mana.red}</div>
            <div className='Green_Mana'>{props.mana.green}</div>
            <div className='Blue_Mana'>{props.mana.blue}</div>
            <div className='Orange_Mana'>{props.mana.orange}</div>
        </div>
    )
}

export default ManaPool;