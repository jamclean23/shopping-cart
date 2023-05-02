import './card.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import parseCardDescription from '../../../../functions/parseCardDescription/parseCardDescription';

function Card (props) {
    const navigate = useNavigate();

    function handleCardClick () {
        navigate(props.prefix + '/products/' + props.productId);
    }

    return (
        <div className='Card' onClick={handleCardClick}>
            <img className='cardImage' src={props.mainImage}></img>
            <h1 className='cardTitle'>{props.cardTitle}</h1>
            <div className='cardDescription'>
                {parseCardDescription(props.cardDescription)}
                <div className='descriptionGradient'></div>
            </div>
        </div>
    );
}

export default Card;