import React from 'react';
const colors = {
    "red":["#933","#FAA",'./img/fire.png'],
    "green":["#393","#AFA",'./img/wind.png'],
    "blue":["#339","#AAF",'./img/water.png'],
    "orange":["#963","#FDA",'./img/earth.png']
}


const Card = props => {
    const data = props.data;
    return (<div className='Card'>
        <div className='card_border'>
            <div style={{backgroundColor:colors[data.color][0]}} className='card_body'>
                <div style={{backgroundColor:colors[data.color][1]}} className='card_head'>
                    {console.log(colors[data.color][2])}
                    <img alt='icn' src={colors[data.color][2]} className='card_element'/>
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