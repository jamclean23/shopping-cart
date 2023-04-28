import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Homepage from "./components/Homepage/Homepage";
import Cart from "./components/Cart/Cart";
 
function RouteSwitch (props) {

    const [testInt, setTestInt] = useState(0);
    const testIntCounter = useRef(0);

    useEffect(() => {
        if (testIntCounter.current > 1) {
            console.log(testInt);
        }
        testIntCounter.current = testIntCounter.current + 1;
    }, [testInt]);

    function handleTestClick () {
        console.log('clicked');
        setTestInt(() => testInt + 1);
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path={props.prefix} element={<Homepage prefix={props.prefix} handleTestClick={handleTestClick}/>} />
                <Route path={props.prefix + 'Cart'} element={<Cart prefix={props.prefix} handleTestClick={handleTestClick}/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouteSwitch;