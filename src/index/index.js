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

// CSS VARIABLES
function setCssWindowVars () {
    const doc = document.documentElement;
    doc.style.setProperty('--doc-height', window.innerHeight + 'px');
    doc.style.setProperty('--doc-width', window.innerWidth + 'px');
}

// Set initial variables
setCssWindowVars();

// Event Listener to set variables when window size changes
window.addEventListener('resize', setCssWindowVars);

// DETERMINE ENVIRONMENT
function determineEnvironment () {
    if (window.location.href === 'http://127.0.0.1:5500/dist/index.html') {
        console.log('Environment: Local Test Environment');
        return 'local';
    } else if (window.location.href.split('https://')[1].split('/')[0] === 'jamclean23.github.io') {
        console.log('Environment: Github Pages');
        return 'gh-pages';
    } else {
        console.log('Environment: Other');
        return 'other'
    }
}
const environment = determineEnvironment();

function setPrefix (environment) {
        // Set prefix for path on mount
        if (environment === 'local') {
            return '/dist/index.html';     
        } else if (environment === 'gh-pages') {
            return '/shopping-cart/';
        } else {
            return '/';
        }
}
const prefix = setPrefix(environment);


// ====== RENDER ======
const reactRoot = createRoot(document.querySelector('#root'));

reactRoot.render(
    <React.StrictMode>
        <RouteSwitch prefix={prefix} environment={environment}/>
    </React.StrictMode>);