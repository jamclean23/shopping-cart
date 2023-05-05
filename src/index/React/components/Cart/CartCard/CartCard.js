import './cartcard.css';
import React from 'react';

function CartCard (props) {

    return (
        <div className='CartCard'>
            <img src={props.itemData.item.images[0].src}/>
            <div className='infoWrapper'>
                <h2>{props.itemData.item.title}</h2>
                <span>Quantity: {props.itemData.quantity}</span>
            </div>
        </div>
    );
}

export default CartCard;