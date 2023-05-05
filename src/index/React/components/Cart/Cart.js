import './cart.css';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import uniqid from 'uniqid';
import CartCard from './CartCard/CartCard.js';

function Cart (props) {

    const [cartContent, setCartContent] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'My Cool Shop! Cart';

    }, []);

    useEffect(() => {
        setCartContent(generateCartContent())
    }, [props.cart]);

    function generateCartContent () {

        if (props.cart && props.cart.length) {

            let result = [];
            
            props.cart.forEach((item) => {
                result.push(
                    <CartCard itemData={item} key={uniqid()} />);
                });
                
            return result;

        } else {
            return (<div className='emptyCart'>Cart is empty</div>);
        }
    }

    function handleCheckoutClick () {
        alert('Mock Checkout Submitted, your order is (not) on the way!');
        props.setCart([]);
    }

    return (
        <div className='Cart'>
            <header>
                <h1 onClick={props.handleHeroClick.bind(this, navigate)}>My Cool Shop!</h1>
                <Link className='Link' to={props.prefix + '/Cart'}>Cart</Link>
            </header>
            <main className='cartContainer'>
                <h2>My Cart</h2>
                {cartContent}
                <button className='checkoutButton' onClick={handleCheckoutClick}>Checkout</button>
            </main>
        </div>
    );
}

export default Cart;