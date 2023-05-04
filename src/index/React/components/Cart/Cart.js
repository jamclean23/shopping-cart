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
                <h1 onClick={props.handleHeroClick}>My Cool Shop!</h1>
                <Link className='Link' to={props.prefix + '/Cart'}>Cart</Link>
            </header>
        </div>
    );
}

export default Cart;