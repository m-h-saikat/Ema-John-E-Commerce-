import React from 'react';
import './Cart.css'
const Cart = (props) => {
    return (
        <div>
           <h3>Order Summery</h3>
<h4>Item Orderd: {props.cart.length}</h4> 
        </div>
    );
};

export default Cart;