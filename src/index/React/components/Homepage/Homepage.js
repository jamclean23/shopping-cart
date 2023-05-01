import './homepage.css';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import accesskey from '../../../accesskey.js';
import Card from './Card/Card';
import uniqid from 'uniqid';

function Homepage (props) {
    const mountCounter = useRef(0);
    const [cards, setCards] = useState('');

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
        // Get object with data concerning printify store
        const printifyObject = await getPrintifyObject(accesskey);

        // Make a new card for each item in printify object
        let cardsArray = [];
        printifyObject.data.forEach((item) => {
            cardsArray.push(<Card key={uniqid()} mainImage={item.images[0].src}/>);
        });

        setCards(cardsArray);

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
            <div className='itemsContainer'>{cards}</div>
        </div>
    );
}

export default Homepage;