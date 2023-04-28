import './homepage.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Homepage (props) {

    useEffect(() => {
        document.title = 'Mock Store, Home';
    }, []);

    return (
        <div className='Homepage'>
            <header>
                <h1>Home</h1>
                <Link to={'/shopping-cart/Cart'}>Cart</Link>
            </header>
        </div>
    );
}

export default Homepage;