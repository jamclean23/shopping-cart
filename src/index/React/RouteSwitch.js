import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Homepage from "./components/Homepage/Homepage";
import Cart from "./components/Cart/Cart";
 
function RouteSwitch (props) {

    const [testInt, setTestInt] = useState(0);

    function handleTestClick () {
        console.log('clicked');
        setTestInt(() => testInt + 1);
        console.log(testInt);
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/shopping-cart/' element={<Homepage handleTestClick={handleTestClick}/>} />
                <Route path='/shopping-cart/Cart' element={<Cart handleTestClick={handleTestClick}/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouteSwitch;