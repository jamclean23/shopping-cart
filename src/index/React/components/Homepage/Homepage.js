import './homepage.css';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import accesskey from '../../../accesskey.js';

function Homepage (props) {
    const mountCounter = useRef(0);

    useEffect(() => {
        
        if (mountCounter.current > 0) {

            // Set Title
            document.title = 'My Cool Shop!';

            // Generate cards using data from printify
            generateCards(accesskey);
        }

        mountCounter.current = mountCounter.current + 1;
    }, []);

    async function generateCards () {
        let printifyObject = await getPrintifyObject(accesskey);
        console.log(printifyObject);
    }

    async function getPrintifyObject (accesskey) {
        let response = await fetch('http://8.40.62.125:49000/', {
            method: "GET",
            mode: "cors",
            headers: {
                Authorization: 'Bearer ' + accesskey
            }
        });
        const content = await response.json();

        return content;
    }

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