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
                <h1>My Cool Shop!</h1>
            </header>
        </div>
    );
}

export default Cart;