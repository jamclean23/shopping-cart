import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Homepage from "./components/Homepage/Homepage";
import Cart from "./components/Cart/Cart";
 
function RouteSwitch (props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/shopping-cart/' element={<Homepage />} />
                <Route path='/shopping-cart/' element={<Cart />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouteSwitch;