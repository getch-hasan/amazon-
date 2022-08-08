import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div className='properties'>
                <Link to="Home">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/Inventory">Inventory</Link>
                <Link to="/about">About</Link>

            </div>
        </div>
    );
};

export default Header;