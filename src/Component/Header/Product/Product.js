import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props);
   const {name,img,price,stock,seller}=props.product;
    return (
        <div className="Product">
            <div className="Product-image-Container">
            <img src={img} alt="" />
            </div>
<div className="Product-Details-Containe">

         <h3>{name}</h3>
         <h4>Price: {price}</h4>
         <h5>Stock :{stock}</h5>
         <p>Sell By {seller}</p>
         <button onClick={() => props.HandleAddToCart(props.product)} className="AddToCartBtn">Add to Cart</button>
</div>
          
        </div>
    );
};

export default Product;