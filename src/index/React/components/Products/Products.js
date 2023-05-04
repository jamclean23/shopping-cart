import React, { useEffect, useRef, useState } from "react";
import './products.css';
import { Link, useParams } from "react-router-dom";
import getPrintifyObject from "../../../functions/getPrintifyObject/getPrintifyObject";
import parseCardDescription from "../../../functions/parseCardDescription/parseCardDescription";


function Products (props) {
    const mountCounter = useRef(0);
    const { productId } = useParams();
    const [productData, setProductData] = useState(false);
    const [quantity, setQuantity] = useState(1);

    // On Mount
    useEffect (() => {
        if (mountCounter.current < 1) {
            getProductData(productId);
        }

        mountCounter.current = mountCounter.current + 1;
    }, []);

    async function getProductData (productId) {
        const printifyObject = await getPrintifyObject();
        let itemObject = printifyObject.data.filter((item) => {
            return item.id === productId;
        })[0];
        setProductData(itemObject);
    }

    function handleQuantityChange (event) {
        if (event.target.value < 1) event.target.value = 1;

        setQuantity(event.target.value);
    }

    function addToCartLambda (item, quantity) {
        props.addToCart(item, quantity);
        setQuantity(1);
    }

    return (
        <div>
            <header>
                <h1 onClick={props.handleHeroClick}>My Cool Shop!</h1>
                <Link className='Link' to={props.prefix + '/Cart'}>Cart</Link>
            </header>
            <h2 className="productTitle">{productData.title}</h2>
            <img className="productImage" src={productData ? productData.images[0].src : ''}/>
            <div className="buttonWrapper">
                <button className="addToCartButton" onClick={addToCartLambda.bind(this, productData, quantity)}>Add to Cart</button>
                <label className="quantityLabel">Quantity: </label>
                <input className="quantityInput" type="number" value={quantity} onChange={handleQuantityChange}/>
            </div>
            <div className="productDescription">{parseCardDescription(productData.description)}</div>
        </div>
    );
}

export default Products;