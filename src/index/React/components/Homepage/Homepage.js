import './homepage.css';
import React, { useEffect } from 'react';

function Homepage () {

    useEffect(() => {
        document.title = 'Mock Store, Home';
    }, []);

    return (
        <div className='Homepage'>
            <header>
                <h1>Home</h1>
            </header>
        </div>
    );
}

export default Homepage;