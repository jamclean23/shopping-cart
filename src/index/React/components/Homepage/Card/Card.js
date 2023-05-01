import './card.css';
import React from 'react';

function Card (props) {
    return (
        <div className='Card'>
            <img className='cardImage' src={props.mainImage}></img>
        </div>
    );
}

export default Card;