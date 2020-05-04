import React from 'react';
import fireIcon from '../fire.png';
import windIcon from '../wind.png';
import waterIcon from '../water.png';
import earthIcon from '../earth.png';
const colors = {
    "red":["#933","#FAA"],
    "green":["#393","#AFA"],
    "blue":["#339","#AAF"],
    "orange":["#963","#FDA"],
    "gold":["#993","#FFA"]
}


const Card = props => {
    const data = props.data;
    return (<div className='Card'>
        <div className='card_border'>
            <div style={{backgroundColor:colors[data.color][0]}} className='card_body'>
                <div style={{backgroundColor:colors[data.color][1]}} className='card_head'>
                {   data.cost === 'Fi' 
                    ? <img alt='icn_fi'src={fireIcon} className='card_element'/>
                    : data.cost === 'Wi' 
                    ? <img alt='icn_wi'src={windIcon} className='card_element'/>
                    : data.cost === 'Wa' 
                    ? <img alt='icn_wa'src={waterIcon} className='card_element water'/>
                    : <img alt='icn_ea'src={earthIcon} className='card_element'/>}
                    <div className='card_name'>{data.name}</div>
                    <div className='card_level'>{data.level}</div>
                </div>
                <div style={{backgroundColor:colors[data.color][1]}} className='card_type'>
                    <div className='spacer'/>
                    <div className='card_type_text'>{data.type}</div>
                    <div className='card_type_icon'>{data.set_emblem}</div>    
                </div>
                <div style={{backgroundColor:colors[data.color][1]}} className='card_text'>{data.effect}</div>
                {data.health ? (
                <div style={{backgroundColor:colors[data.color][1]}} className='card_stat_block'>
                    {data.damage}/{data.health}
                </div>):null}
            </div>
            <div className='card_footer'>
                <div className='card_creator'>{data.creator}</div>
                <div className='card_copyright'>&copy;Logan Reber {data.year}</div>
            </div>
        </div>
    </div>)
}

export default Card;