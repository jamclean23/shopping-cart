import './homepage.css';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Homepage (props) {
    const mountCounter = useRef(0);

    useEffect(() => {
        
        if (mountCounter.current > 0) {

            // Set Title
            document.title = 'My Cool Shop!';
        }

        mountCounter.current = mountCounter.current + 1;
    }, []);

    return (
        <div className='Homepage'>
            <header>
                <h1>Home</h1>
                <Link className='Link' to={props.prefix + 'Cart'}>Cart</Link>
            </header>
            <button onClick={props.handleTestClick}>Test</button>
        </div>
    );
}

export default Homepage;