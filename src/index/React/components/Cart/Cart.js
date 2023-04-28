import './cart.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Cart (props) {

    useEffect(() => {
        document.title = 'My Cool Shop! Cart';
    }, []);

    return (
        <div className='Cart'>
            <header>
                <h1>Cart</h1>
                <Link className='Link' to={'../shopping-cart/'}>Home</Link>
            </header>
            <button onClick={props.handleTestClick}>Test</button>            
        </div>
    );
}

export default Cart;