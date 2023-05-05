import './cart.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';

function Cart (props) {

    const [cartContent, setCartContent] = useState();

    useEffect(() => {
        document.title = 'My Cool Shop! Cart';

        setCartContent(generateCartContent());        
    }, []);

    function generateCartContent () {
        let result = [];

        props.cart.forEach((item) => {
            result.push(
                <div key={uniqid()} className='cartItem'>

                </div>);
        });

        return result;
    }

    return (
        <div className='Cart'>
            <header>
                <h1 onClick={props.handleHeroClick}>My Cool Shop!</h1>
                <Link className='Link' to={props.prefix + '/Cart'}>Cart</Link>
            </header>
            <main className='cartContainer'>
                {cartContent}
            </main>
        </div>
    );
}

export default Cart;