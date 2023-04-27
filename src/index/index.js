// Entry point


// ====== IMPORTS ======

// Styling
import css from './styles.css';

// React
import React from 'react';
import { createRoot } from 'react-dom/client';

// Router
import RouteSwitch from './React/RouteSwitch';


// ====== RENDER ======
console.log('Loaded index');
const reactRoot = createRoot(document.querySelector('#root'));

reactRoot.render(
    <React.StrictMode>
        <RouteSwitch />
    </React.StrictMode>);