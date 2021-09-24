import React from 'react';
import './Nav.css'
const Nav = () => {
    return (
        <div>
            <div className="nav">
                <a href="/Shop">Shop</a>
                <a href="/Orders">Orders</a>
                <a href="Review">Review</a>
                <a href="Inventory">Inventory</a>
            </div>
            <div className="Search-Product">
              <input type="text" placeholder="Type Here to Search" />  <button className="Search-Btn">Search</button>
            </div>
        </div>
    );
};

export default Nav;