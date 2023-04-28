import './homepage.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Homepage (props) {

    useEffect(() => {
        document.title = 'My Cool Shop!';
    }, []);

    return (
        <div className='Homepage'>
            <header>
                <h1>Home</h1>
                <Link className='Link' to={'/shopping-cart/Cart'}>Cart</Link>
            </header>
            <button onClick={props.handleTestClick}>Test</button>
        </div>
    );
}

export default Homepage;