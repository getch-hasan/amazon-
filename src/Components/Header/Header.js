import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div className='properties'>
                <a href="Home">Home</a>
                <a href="/order">Order</a>
                <a href="/Inventory">Inventory</a>
                <a href="/shop">Shop</a>

            </div>
        </div>
    );
};

export default Header;