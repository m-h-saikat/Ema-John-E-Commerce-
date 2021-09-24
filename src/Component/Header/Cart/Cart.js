import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart}=props;
    let total=0;
    for(const product of cart)
    {
        total=total+product.price;
    }
    return (
        <div>
           <h3>Order Summery</h3>
<h4>Item Orderd: {props.cart.length}</h4> 
<p>Total: {total}</p>
        </div>
    );
};

export default Cart;