import React from 'react';

const ManaGain = props => {
    const upgradeRed = () => {
        props.setMana(m=>{return{...m,red:m.red+1}})
        props.setShowMG(false)
    }
    const upgradeGreen = () => {
        props.setMana(m=>{return{...m,green:m.green+1}})
        props.setShowMG(false)
    }
    const upgradeBlue = () => {
        props.setMana(m=>{return{...m,blue:m.blue+1}})
        props.setShowMG(false)
    }
    const upgradeOrange = () => {
        props.setMana(m=>{return{...m,orange:m.orange+1}})
        props.setShowMG(false)
    }
    return (
        <div className='ManaGain'>
            <div className='spacer'>
                <div onClick={upgradeRed}className='Gain_Red'>{props.mana.red}</div>
                <div onClick={upgradeGreen}className='Gain_Green'>{props.mana.green}</div>
            </div>
            <div className='spacer'>
                <div onClick={upgradeBlue}className='Gain_Blue'>{props.mana.blue}</div>
                <div onClick={upgradeOrange}className='Gain_Orange'>{props.mana.orange}</div>
            </div>
        </div>
    )
}

export default ManaGain;