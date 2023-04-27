import './cart.css';
import React, { useEffect } from 'react';

function Cart (props) {

    useEffect(() => {
        document.title = 'Mock Store, Cart';
    }, []);
    
    return (
        <div className='Cart'>
            <h1>Cart</h1>
        </div>
    );
}

export default Cart;