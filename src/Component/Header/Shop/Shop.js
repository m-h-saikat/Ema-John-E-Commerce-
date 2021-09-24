import './Shop.css'
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {
const [Products ,setProducts]=useState([]);
const [cart ,setCart]=useState([]);
useEffect( () =>
{
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
    .then(response => response.json())
    .then(data => setProducts(data));
},[])

const HandleAddToCart =(product) => {
  const newCart=[...cart ,product];
  setCart(newCart);
}
    return (
        <div className="Shopping">
            <div className="product">
<h1>Total Products : {Products.length}</h1>
{
   Products.map(product =><Product
     product={product}
     key={product.key}
     HandleAddToCart={HandleAddToCart}
   
   ></Product>)
}

            </div>
            <div className="Order-Summery">
<Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;