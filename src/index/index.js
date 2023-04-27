// Entry point


// ====== IMPORTS ======

// Styling
import css from './styles.css';

// React
import React from 'react';
import { createRoot } from 'react-dom/client';

// Router
import RouteSwitch from './React/RouteSwitch';

// ====== WINDOW ======

function setCssWindowVars () {
    const doc = document.documentElement;
    doc.style.setProperty('--doc-height', window.innerHeight);
    doc.style.setProperty('--doc-width', window.innerWidth);
}

// Set initial variables
setCssWindowVars();

// Event Listener to set variables when window size changes
window.addEventListener('resize', setCssWindowVars);


// ====== RENDER ======
const reactRoot = createRoot(document.querySelector('#root'));

reactRoot.render(
    <React.StrictMode>
        <RouteSwitch />
    </React.StrictMode>);