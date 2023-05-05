import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom"; 
import Homepage from "./components/Homepage/Homepage";
import Cart from "./components/Cart/Cart";
import Products from "./components/Products/Products.js";


function RouteSwitch (props) {
    
    const [testInt, setTestInt] = useState(0);
    const testIntCounter = useRef(0);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        if (testIntCounter.current > 1) {
            console.log(testInt);
        }
        testIntCounter.current = testIntCounter.current + 1;
    }, [testInt]);
    
    useEffect(() => {
        if (cart.length) {
            console.log('CART');
            console.log(cart);
        }
    }, [cart]);

    function addToCart (item, quantity) {
        if (item && quantity) {

                // Clone current cart
                let newCart = [...cart];

                // Search to see if item already exists in cart
                const itemSearchResults = getItemInCart(item, newCart);
                console.log(itemSearchResults);
                if (itemSearchResults.itemFound) {
                    // If item found then increase the quantity
                    newCart[itemSearchResults.itemIndex].quantity += quantity;
                } else {
                    // If not, then add it
                    newCart.push({ item, quantity });
                }

                // Set cart to cloned cart.
                setCart(newCart);
        }

        function getItemInCart (itemToBeFound, newCart) {
            let itemFound = false;
            let itemIndex = 'Not Found';

            newCart.forEach((item, index) => {
                if (item.item.id === itemToBeFound.id) {
                    itemFound = true;
                    itemIndex = index;
                }    
            });

            return {itemFound, itemIndex};
        }
    }

    function handleHeroClick (navigate) {
        navigate(props.prefix);
    }
    
    function handleTestClick () {
        setTestInt(() => testInt + 1);
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path={props.prefix} element={<Homepage prefix={props.prefix} handleHeroClick={handleHeroClick} handleTestClick={handleTestClick}/>} />
                <Route path={props.prefix + '/Cart'} element={<Cart cart={cart} prefix={props.prefix} handleHeroClick={handleHeroClick} handleTestClick={handleTestClick}/>} />
                <Route path={props.prefix + '/products/:productId'} element={<Products addToCart={addToCart} handleHeroClick={handleHeroClick} prefix={props.prefix}/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouteSwitch;