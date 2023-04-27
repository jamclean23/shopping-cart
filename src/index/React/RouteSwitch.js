import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import { Component } from './components/Component';
 
function RouteSwitch (props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/shopping-cart/' element={<Homepage />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RouteSwitch;