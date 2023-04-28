import './cart.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Cart (props) {

    useEffect(() => {
        document.title = 'Mock Store, Cart';
    }, []);

    return (
        <div className='Cart'>
            <h1>Cart</h1>
            <button onClick={props.handleTestClick}>Test</button>            
            <Link to={'../shopping-cart/'}>Home</Link>
        </div>
    );
}

export default Cart;